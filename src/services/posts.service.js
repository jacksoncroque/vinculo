import { api } from './api';

const getFeed = async () => {
   const res = await api.get('posts/feed');

   return res;
};

const createPost = async (content) => {
   const res = await api.post('posts', {
      content,
   });

   return res;
};

const getUserPosts = async (userId) => {
  console.log(`posts/user/${userId}`);
  
   const res = await api.get(`posts/user/${userId}`);

   return res;
};

const updatePost = (postId, content) => {};

const deletePost = (postId) => {};

const createComment = async (postId, content) => {
   const res = await api.post(`posts/${postId}/comments`, {
      content,
   });

   return res;
};

const deleteComment = (commentId) => {};

export { getFeed, createPost, getUserPosts, updatePost, deletePost, createComment, deleteComment };
