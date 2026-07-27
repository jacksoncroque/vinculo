import { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ChipButton from '../../components/ChipButton/ChipButton';
import PostCard from '../../components/PostCard/PostCard';
import { useProfileContext } from '../../contexts/ProfileContext';

import styles from './Profile.module.scss';

const Profile = () => {
   const { state, myProfile, getMyPosts } = useProfileContext();

   const [loaded, setLoaded] = useState(false);

   const data = state.postsList;

   useEffect(() => {
      myProfile();
   }, []);

   useEffect(() => {
      if (state.id && !loaded) {
         getMyPosts(state.id);

         // eslint-disable-next-line
         setLoaded(true);
      }
   }, [state, loaded]);

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
                  <ChipButton label="Editar perfil" />
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
