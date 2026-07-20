import { api } from './api';

const friendRequest = async (userId) => {
   const res = await api.post(`friendships/request/${userId}`);

   return res;
};

const getReceivedRequests = async () => {
   const res = await api.get('friendships/requests');

   return res;
};

const getSentRequests = async () => {
   const res = await api.get('friendships/sent');

   return res;
};

const acceptFriendship = async (friendshipId) => {
   const res = await api.post(`friendships/${friendshipId}/accept`);

   return res;
};

const rejectFriendship = async (friendshipId) => {
   const res = await api.post(`friendships/${friendshipId}/reject`);

   return res;
};

const removeFriendship = async (friendshipId) => {
   const res = await api.delete(`friendships/${friendshipId}`);

   return res;
};

const getFriends = async () => {
   const res = await api.get('friendships/friends');

   return res;
};

export {
   getFriends,
   friendRequest,
   getSentRequests,
   acceptFriendship,
   rejectFriendship,
   removeFriendship,
   getReceivedRequests,
};
