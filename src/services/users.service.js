import { api } from './api';

const getUsers = async (search = '') => {
  const res = await api.get(`users?${search}`);
  return res;
};

const updateMe = (data) => {};

export { getUsers, updateMe };
