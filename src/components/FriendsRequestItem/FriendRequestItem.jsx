import { useEffect } from 'react';
import { useFriendsContext } from '../../contexts/FriendsContext';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Card from '../Card/Card';
import ChipButton from '../ChipButton/ChipButton';

import styles from './FriendRequestItem.module.scss';

const FriendRequestItem = ({ label, name, email, friendsInComunm = 'Nenhum amigo', userId }) => {
   const {
      state,
      friendsList,
      receivedRequests,
      rejectFriendshipRequest,
      acceptFriendshipRequest,
   } = useFriendsContext();

   const data = state.friendsList;

   const handleAcceptFriendship = async () => {
      await acceptFriendshipRequest(userId);

      await receivedRequests();
   };

   const handleRejectFriendship = async () => {
      await rejectFriendshipRequest(userId);

      await receivedRequests();
   };

   useEffect(() => {
      console.log(data);
   }, [data]);

   return (
      <Card>
         <div className={styles.container}>
            <div className={styles.containerAvatar}>
               <Avatar label={label} />
            </div>
            <div className={styles.containerInfo}>
               <h5>{name}</h5>
               <p>{email}</p>
               <p>{`${friendsInComunm} em comum`}</p>
            </div>
            <div className={styles.containerActions}>
               <div>
                  <Button
                     label="Aceitar "
                     customStyle={styles.containerActionsButton}
                     onClick={handleAcceptFriendship}
                  />
                  <ChipButton
                     label="Recusar"
                     onClick={handleRejectFriendship}
                  />
               </div>
            </div>
         </div>
      </Card>
   );
};

export default FriendRequestItem;
