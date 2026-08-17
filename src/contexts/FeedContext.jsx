import { createContext, useContext, useEffect, useState } from 'react';

import { createComment, createPost, getFeed } from '../services/posts.service';
import { useGlobalContext } from './GlobalContext';

import { postFriendRequest } from '../services/friendships.service';
import { getUsers } from '../services/users.service';

const FeedContext = createContext();

const initialState = {
   postsList: [],
   friendsSugestions: [],
   inputValue: '',
};

const FeedProvider = ({ children }) => {
   const [state, setState] = useState(initialState);
   const { toggleLoading, showErrorMessage, showSucessMessage } = useGlobalContext();

   const handleInputChange = (e) => {
      setState((prev) => {
         return { ...prev, inputValue: e.target.value };
      });
   };

   const getPostsList = async () => {
      try {
         toggleLoading(true);

         const res = await getFeed();

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

   const getFriendsSugestionList = async () => {
      try {
         toggleLoading(true);

         const res = await getUsers();

         if (res.success) {
            setState((prev) => {
               return { ...prev, friendsSugestions: res.data };
            });
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const postPost = async () => {
      try {
         toggleLoading(true);

         const res = await createPost(state.inputValue);

         if (res.success) {
            setState((prev) => {
               return { ...prev, inputValue: '' };
            });

            showSucessMessage('Post criado!');

            await getPostsList();
         } else {
            showErrorMessage('O conteúdo do post é obrigatório.');
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const createNewComment = async (postId, comment) => {
      try {
         toggleLoading(true);

         const res = await createComment(postId, comment);

         if (res.success) {
            showSucessMessage('Comentário enviado!');
         } else {
            showErrorMessage('O conteúdo do comentário é onrigatório!');
         }
         await getPostsList();
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

         if (res.success) {
            showSucessMessage('Pedido de amizade enviado.');
         } else {
            showErrorMessage('Falha ao enviar pedido de amizade.');
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const values = {
      state,
      getFriendsSugestionList,
      sendFriendRequest,
      handleInputChange,
      createNewComment,
      getPostsList,
      postPost,
   };

   return <FeedContext.Provider value={values}>{children}</FeedContext.Provider>;
};

const useFeedContext = () => {
   return useContext(FeedContext);
};

export { FeedProvider, useFeedContext };
