import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LocationState } from '../../pages/Login/Login';
import { loginService, signUpService } from '../../services';
import { API_URL } from '../../utils';
import { CreateAuthContext, User } from './authContext.types';

const AuthContext = createContext<CreateAuthContext>({} as CreateAuthContext);

const setupAuthHeaderForServiceCalls = (token: string | null) => {
  if (token) {
    return (axios.defaults.headers.common['Authorization'] = token);
  }
  delete axios.defaults.headers.common['Authorization'];
};

export const AuthProvider: FunctionComponent = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage?.getItem('login') as string);
  const [token, setToken] = useState<string | null>(localStorageToken?.token);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  token && setupAuthHeaderForServiceCalls(token);
  const toast = useToast();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 403) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    token && getUserData();
  }, [token]);

  const getUserData = async () => {
    try {
      const userResponse = await axios.get(`${API_URL}/user`);

      setUser(userResponse.data.user);
    } catch (error) {
      console.error('Error getting user data from backend!!! ' + error);
    }
  };

  const loginUserWithCredentials = async (email: string, password: string, state: LocationState) => {
    try {
      const {
        data: { token, response },
        status,
      } = await loginService(email, password);

      if (status === 200) {
        setToken(token);
        localStorage?.setItem('login', JSON.stringify({ token: token }));
        setupAuthHeaderForServiceCalls(token);
        getUserData();
        state === null ? navigate('/') : navigate(state.from ? state.from : '/');
        toast({
          title: 'Login Success!',
          position: 'bottom-left',
          duration: 4000,
          status: 'success',
          isClosable: true,
        });
      }
      return response;
    } catch (error) {
      const { response, message } = error;

      if (response.status === 401) {
        return response;
      }
      console.error('Error with login ', message);
    }
  };

  const signUpUser = async (firstName: string, lastName: string, email: string, password: string, state: LocationState) => {
    try {
      const {
        data: { token, response },
        status,
      } = await signUpService(firstName, lastName, email, password);

      if (status === 201) {
        localStorage?.setItem('login', JSON.stringify({ token: token }));
        setToken(token);
        setupAuthHeaderForServiceCalls(token);
        getUserData();
        state === null ? navigate('/') : navigate(state.from ? state.from : '/');
        toast({
          title: 'Signup successful',
          position: 'bottom-left',
          duration: 5000,
          status: 'success',
          isClosable: true,
        });
      }
      return response;
    } catch (error) {
      const { response, message } = error;

      if (response.status === 409) {
        return response;
      }
      console.error('Error signing up user', message);
    }
  };

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage?.removeItem('login');
    setupAuthHeaderForServiceCalls(null);
    toast({
      title: 'Logged out successfully',
      position: 'bottom-left',
      duration: 3000,
      status: 'success',
      isClosable: true,
    });
    navigate('/');
  };

  return <AuthContext.Provider value={{ user, token, signUpUser, loginUserWithCredentials, logoutUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
