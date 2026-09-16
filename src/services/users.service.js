import { api } from './api';

const getUsers = async (search = '') => {
   const res = await api.get(`users?search=${search}`);
   return res;
};

const updateMe = async (data) => {
   const res = await api.put(`users/me`, data);
   return res;
};

export { getUsers, updateMe };
