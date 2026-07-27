import { api } from './api';

export const getMyProfile = async () => {
   const res = await api.get('users/me/profile');

   return res;
};
