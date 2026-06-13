import { api } from './api';

const login = async (email, password) => {
  const res = await api.post('auth/login', { email, password });

  return res;
};

const register = (name, email, password) => {};

const getMe = (token) => {};

export { login, register, getMe };
