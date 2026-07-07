import { createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';
import { api } from '../services/api';
import { getFriends } from '../services/friendships.service';

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

   const values = { state, getFriendsList };

   return <FriendsContext.Provider value={values}>{children}</FriendsContext.Provider>;
};

const useFriendsContext = () => {
   return useContext(FriendsContext);
};

export { FriendsProvider, useFriendsContext };
