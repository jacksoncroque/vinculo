import { createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';
import { api } from '../services/api';
import {
   acceptFriendship,
   getFriends,
   getReceivedRequests,
   postFriendRequest,
   rejectFriendship,
   removeFriendship,
} from '../services/friendships.service';
import { getUsers } from '../services/users.service';

const FriendsContext = createContext();

const initialState = {
   friendsList: [],
   inputValue: '',
};

const FriendsProvider = ({ children }) => {
   const [state, setState] = useState(initialState);
   const { toggleLoading, showErrorMessage, showSuccesMessage } = useGlobalContext();

   const getFriendsList = async () => {
      try {
         toggleLoading(true);

         const res = await getFriends();

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsList: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const receivedRequests = async () => {
      try {
         toggleLoading(true);

         const res = await getReceivedRequests();

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsList: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const acceptFriendshipRequest = async () => {
      try {
         toggleLoading(true);

         const res = await acceptFriendship();

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsList: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const rejectFriendshipRequest = async () => {
      try {
         toggleLoading(true);

         const res = await rejectFriendship();

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsList: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const removeFriend = async (friendshipId) => {
      try {
         toggleLoading(true);

         const res = await removeFriendship(friendshipId);

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsList: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const getUsersList = async (search = '') => {
      try {
         toggleLoading(true);

         const res = await getUsers(search);

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsList: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };
   const sendFriendRequest = async (userId) => {
      try {
         toggleLoading(true);

         const res = await postFriendRequest(userId);
         console.log(res);
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const getFriendsSugestionList = async () => {
      try {
         toggleLoading(true);

         const res = await getUsers();

         if (res.success) {
            setState((prev) => {
               return {
                  ...prev,
                  friendsList: res.data
                     .filter((item) => {
                        return item.friendship === null;
                     })
                     .sort((a, b) => {
                        return a.mutualFriendsCount - b.mutualFriendsCount;
                     }),
               };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const values = {
      state,
      getFriendsList,
      receivedRequests,
      getFriendsSugestionList,
      acceptFriendshipRequest,
      rejectFriendshipRequest,
      removeFriend,
      getUsersList,
      sendFriendRequest,
   };

   return <FriendsContext.Provider value={values}>{children}</FriendsContext.Provider>;
};

const useFriendsContext = () => {
   return useContext(FriendsContext);
};

export { FriendsProvider, useFriendsContext };
