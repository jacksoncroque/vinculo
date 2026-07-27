import { createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';
import { getMyProfile } from '../services/profile.service';
import { getUserPosts } from '../services/posts.service';

const ProfileContext = createContext();

const initialState = {
   user: '',
   email: '',
   id: '',
   postsList: [],
   postsCount: 0,
   friendsCount: 0,
   commentsCount: 0,
};

const ProfileProvider = ({ children }) => {
   const [state, setState] = useState(initialState);
   const { toggleLoading, showErrorMessage, showSuccesMessage } = useGlobalContext();

   const myProfile = async () => {
      try {
         toggleLoading(true);

         const res = await getMyProfile();

         if (res.success) {
            setState((prev) => {
               return {
                  ...prev,
                  user: res.data.user.name,
                  email: res.data.user.email,
                  id: res.data.user.id,
                  postsCount: res.data.stats.postsCount,
                  friendsCount: res.data.stats.friendsCount,
                  commentsCount: res.data.stats.commentsCount,
               };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const getMyPosts = async (userId) => {
      try {
         toggleLoading(true);
         const res = await getUserPosts(userId);

         if (res.success) {
            setState((prev) => {
               return { ...prev, postsList: res.data };
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
      myProfile,
      getMyPosts,
   };

   return <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>;
};

const useProfileContext = () => {
   return useContext(ProfileContext);
};

export { ProfileProvider, useProfileContext };
