import axios from 'axios';
import { API_URL } from '../../utils';

export const loginService = (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, {
    email: email,
    password: password,
  });
};
