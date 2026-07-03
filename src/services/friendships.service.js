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

const getFriends = () => {};

export {
  friendRequest,
  getReceivedRequests,
  getSentRequests,
  acceptFriendship,
  rejectFriendship,
  removeFriendship,
  getFriends,
};
