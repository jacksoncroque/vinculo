import { createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';
import { getMyProfile } from '../services/profile.service';
import { getUserPosts } from '../services/posts.service';
import { updateMe } from '../services/users.service';

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
   const { toggleLoading, showErrorMessage, showSucessMessage } = useGlobalContext();

   const handleNameChange = (event) => {
      const user = event.target.value;

      setState((prev) => {
         return { ...prev, user: user };
      });
   };
   const handleEmailChange = (event) => {
      const email = event.target.value;

      setState((prev) => {
         return { ...prev, email: email };
      });
   };

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
         } else {
            showErrorMessage(res.error);
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
         } else {
            showErrorMessage(res.error);
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const updateMyProfile = async () => {
      try {
         toggleLoading(true);

         const res = await updateMe({ name: state.user, email: state.email });

         console.log(res);
         
         if (res.success) {
            console.log('oi');

            showSucessMessage('Alterações salvas.');
         } else {
            showErrorMessage(res.error);
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
      updateMyProfile,
      handleNameChange,
      handleEmailChange,
   };

   return <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>;
};

const useProfileContext = () => {
   return useContext(ProfileContext);
};

export { ProfileProvider, useProfileContext };
