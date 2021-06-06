import axios from 'axios';
import { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LocationState } from '../../pages/Login/Login';
import { CreateAuthContext, User } from './authContext.types';

const AuthContext = createContext<CreateAuthContext>({} as CreateAuthContext);

function setupAuthHeaderForServiceCalls(token: string | null) {
  if (token) {
    return (axios.defaults.headers.common['Authorization'] = token);
  }
  delete axios.defaults.headers.common['Authorization'];
}

const setupAuthExceptionHandler = (logoutUser: any, navigate: any) => {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logoutUser();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
};

const loginService = (email: string, password: string) => {
  return axios.post('https://quizmaster.pranshudobhal.repl.co/login', {
    email: email,
    password: password,
  });

  // return axios.post('http://localhost:3000/login', {
  //   email: email,
  //   password: password,
  // });
};

export const AuthProvider: FunctionComponent = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage?.getItem('login') as string);
  const [token, setToken] = useState<string | null>(localStorageToken?.token);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    token && setupAuthHeaderForServiceCalls(token);
    !token && setupAuthExceptionHandler(logoutUser, navigate);
  }, []);

  useEffect(() => {
    (async function getUserData() {
      try {
        // const userResponse = await axios.get('http://localhost:3000/user');

        const userResponse = await axios.get('https://quizmaster.pranshudobhal.repl.co/user');
        console.log(userResponse);
        setUser(userResponse.data.user);
      } catch (error) {
        console.error('Error getting user data from backend!!! ' + error);
      }
    })();
  }, []);

  const loginUserWithCredentials = async (email: string, password: string, state: LocationState) => {
    try {
      const {
        data: { user, token },
        status,
      } = await loginService(email, password);

      console.log(user);

      if (status === 200) {
        setToken(token);
        localStorage?.setItem('login', JSON.stringify({ token: token }));
        setupAuthHeaderForServiceCalls(token);
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

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage?.removeItem('login');
    setupAuthHeaderForServiceCalls(null);
    navigate('/');
  };

  return <AuthContext.Provider value={{ user, token, loginUserWithCredentials, logoutUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
