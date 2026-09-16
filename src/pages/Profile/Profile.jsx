import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ChipButton from '../../components/ChipButton/ChipButton';
import Input from '../../components/Input/Input';
import PostCard from '../../components/PostCard/PostCard';

import { useProfileContext } from '../../contexts/ProfileContext';

import styles from './Profile.module.scss';

const Profile = () => {
   const { state, myProfile, getMyPosts, handleNameChange, handleEmailChange, updateMyProfile } =
      useProfileContext();

   const [loaded, setLoaded] = useState(false);
   const [isEditing, setIsEditing] = useState(false);

   const data = state.postsList;

   const handleOpenEdit = () => {
      setIsEditing(true);
   };

   const handleCloseEdit = () => {
      setIsEditing(false);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      await updateMyProfile();

      setIsEditing(false);
   };

   useEffect(() => {
      myProfile();
   }, []);

   useEffect(() => {}, [state]);

   useEffect(() => {
      if (state.id && !loaded) {
         getMyPosts(state.id);
         //eslint-disable-next-line
         setLoaded(true);
      }
   }, [state.id, loaded]);

   return (
      <div className={styles.container}>
         <Card customStyle={styles.containerWrapper}>
            <div className={styles.containerWrapperCover} />

            <div className={styles.containerWrapperProfile}>
               <Avatar
                  label={state.user}
                  customStyle={styles.containerWrapperProfileAvatar}
               />

               <div className={styles.containerWrapperProfileInfo}>
                  <h2>{state.user}</h2>
                  <p>{state.email}</p>
               </div>

               <div className={styles.containerWrapperProfileActions}>
                  <ChipButton
                     label="Editar perfil"
                     onClick={handleOpenEdit}
                  />

                  <Button
                     label="Compartilhar"
                     customStyle={styles.containerWrapperProfileActionsBtn}
                  />
               </div>
            </div>

            <div className={styles.containerWrapperStats}>
               <div>
                  <p>POSTS</p>
                  <h2>{state.postsCount}</h2>
               </div>

               <div>
                  <p>AMIGOS</p>
                  <h2>{state.friendsCount}</h2>
               </div>

               <div>
                  <p>COMENTÁRIOS</p>
                  <h2>{state.commentsCount}</h2>
               </div>
            </div>
         </Card>

         <AnimatePresence>
            {isEditing && (
               <motion.div
                  className={styles.editOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleCloseEdit}
               >
                  <motion.div
                     className={styles.editModal}
                     initial={{
                        opacity: 0,
                        scale: 0.95,
                        y: 20,
                     }}
                     animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                     }}
                     exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: 20,
                     }}
                     transition={{
                        duration: 0.2,
                     }}
                     onClick={(event) => event.stopPropagation()}
                  >
                     <form onSubmit={handleSubmit}>
                        <h2>Editar perfil</h2>

                        <Input
                           name="user"
                           label="Nome"
                           value={state.user}
                           onChange={handleNameChange}
                        />

                        <Input
                           name="email"
                           type="email"
                           label="E-mail"
                           value={state.email}
                           onChange={handleEmailChange}
                        />

                        <div className={styles.editModalActions}>
                           <Button
                              type="button"
                              label="Cancelar"
                              onClick={handleCloseEdit}
                           />

                           <Button
                              type="submit"
                              label="Salvar"
                           />
                        </div>
                     </form>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>

         <div className={styles.containerPosts}>
            {data.map((post) => (
               <PostCard
                  key={post.id}
                  post={post}
               />
            ))}
         </div>
      </div>
   );
};

export default Profile;
