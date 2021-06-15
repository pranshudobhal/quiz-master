import axios from 'axios';
import { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LocationState } from '../../pages/Login/Login';
import { CreateAuthContext, User } from './authContext.types';

const AuthContext = createContext<CreateAuthContext>({} as CreateAuthContext);

const setupAuthHeaderForServiceCalls = (token: string | null) => {
  if (token) {
    return (axios.defaults.headers.common['Authorization'] = token);
  }
  delete axios.defaults.headers.common['Authorization'];
};

const setupAuthExceptionHandler = (logoutUser: any, navigate: any) => {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logoutUser();
        console.log('in setupAuthExceptionHandler');
        // navigate('/login');
      }
      return Promise.reject(error);
    }
  );
};

const loginService = (email: string, password: string) => {
  // return axios.post('https://quizmaster.pranshudobhal.repl.co/login', {
  //   email: email,
  //   password: password,
  // });

  return axios.post('http://localhost:3000/login', {
    email: email,
    password: password,
  });
};

const signUpService = (firstName: string, lastName: string, email: string, password: string) => {
  return axios.post('http://localhost:3000/signup', {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};

export const AuthProvider: FunctionComponent = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage?.getItem('login') as string);
  const [token, setToken] = useState<string | null>(localStorageToken?.token);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const userResponse = await axios.get('http://localhost:3000/user');

      // const userResponse = await axios.get('https://quizmaster.pranshudobhal.repl.co/user');

      setUser(userResponse.data.user);
    } catch (error) {
      console.error('Error getting user data from backend!!! ' + error);
    }
  };

  useEffect(() => {
    token && setupAuthHeaderForServiceCalls(token);
    !token && setupAuthExceptionHandler(logoutUser, navigate);
  }, []);

  const loginUserWithCredentials = async (email: string, password: string, state: LocationState) => {
    try {
      const {
        data: { token },
        status,
      } = await loginService(email, password);

      if (status === 200) {
        setToken(token);
        localStorage?.setItem('login', JSON.stringify({ token: token }));
        setupAuthHeaderForServiceCalls(token);
        getUserData();
        state === null ? navigate('/') : navigate(state.from ? state.from : '/');
      }
    } catch (error) {
      const { response, message } = error;

      if (response.status === 401) {
        return navigate('/login');
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

  /**
   * FIXME:
   * navigate not holding login page
   */
  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage?.removeItem('login');
    setupAuthHeaderForServiceCalls(null);
    navigate('/');
  };

  return <AuthContext.Provider value={{ user, token, signUpUser, loginUserWithCredentials, logoutUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
