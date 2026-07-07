import { api } from './api';

const friendRequest = async (userId) => {
   const res = await api.post(`friendships/request/${userId}`);

   return res;
};

const getReceivedRequests = () => {};

const getSentRequests = () => {};

const acceptFriendship = (friendshipId) => {};

const rejectFriendship = (friendshipId) => {};

const removeFriendship = (friendshipId) => {};

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
