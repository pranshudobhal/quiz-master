import axios from 'axios';
import { API_URL } from '../../utils';

export const signUpService = (firstName: string, lastName: string, email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};
