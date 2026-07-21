import { useEffect } from 'react';

import { useGlobalContext } from '../../contexts/GlobalContext';
import { useFeedContext } from '../../contexts/FeedContext';
import getNameInitials from '../../utils/getNameInitials';

import FriendSugestion from '../../components/FriendSugestion/FriendSugestion';
import PostCard from '../../components/PostCard/PostCard';
import TextArea from '../../components/TextArea/TextArea';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import styles from './Feed.module.scss';

const Feed = () => {
   const { state, handleInputChange, getPostsList, postPost } = useFeedContext();
   const { state: globalState } = useGlobalContext();

   const data = state.postsList;

   const userLogged = getNameInitials(globalState.user?.name);

   useEffect(() => {
      getPostsList();
   }, []);

   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <div className={styles.containerWrapperMain}>
               <Card customStyle={styles.containerWrapperMainCard}>
                  <div>
                     <Avatar label={userLogged} />
                  </div>
                  <div>
                     <TextArea
                        id={''}
                        name={''}
                        placeholder={`No que você está pensando?`}
                        onChange={handleInputChange}
                        value={state.inputValue}
                     />
                     <Button
                        label="Publicar"
                        onClick={postPost}
                        disabled={state.inputValue == ''}
                     />
                  </div>
               </Card>

               {data.map((post) => (
                  <PostCard
                     key={post.id}
                     post={post}
                  />
               ))}
            </div>
            <div className={styles.containerWrapperAside}>
               <Card>
                  <div className={styles.containerWrapperAsideInfo}>
                     <h5>Sugestões</h5>
                     <span>Pessoas que talvez você conheça</span>
                  </div>
                  <FriendSugestion />
               </Card>
               <Card>
                  <div className={styles.containerWrapperAsideFooter}>
                     <p>
                        <strong>vínculo</strong> · uma referência visual de design para uma rede
                        social leve. Adapte livremente em React + SCSS.
                     </p>
                  </div>
               </Card>
            </div>
         </div>
      </div>
   );
};

export default Feed;
