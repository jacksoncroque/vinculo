import ChipButton from '../ChipButton/ChipButton';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

import styles from './UserCard.module.scss';
import { useFriendsContext } from '../../contexts/FriendsContext';
import { useEffect } from 'react';

const UserCard = ({ user, activeTab }) => {
   const {
      sendFriendRequest,
      acceptFriendshipRequest,
      rejectFriendshipRequest,
      removeFriend,
      getFriendsList,
      getUsersList,
      getFriendsSugestionList,
   } = useFriendsContext();

   const handleSendRequest = async () => {
      await sendFriendRequest(user.id);

      if (activeTab === 'all') {
         await getUsersList();
      }

      if (activeTab === 'suggestions') {
         await getFriendsSugestionList();
      }
   };

   const handleRemoveFriendship = async () => {
      await removeFriend(user.friendship.id);

      if (activeTab === 'all') {
         await getUsersList();
      }

      if (activeTab === 'friends') {
         await getFriendsList();
      }
   };

   let status = '';

   if (user.friendship === null) {
      status = 'suggestion';
   } else if (user.friendship?.status === 'pending') {
      status = 'pending';
   } else if (user.friendship?.status === 'rejected') {
      status = 'rejected';
   } else {
      status = 'accepted';
   }

   return (
      <Card customStyle={styles.container}>
         <div className={styles.containerUser}>
            <div className={styles.containerUserAvatar}>
               <Avatar
                  label={user.name}
                  customStyle={styles.containerUserAvatarContainer}
               />
            </div>
            <div className={styles.containerUserInfo}>
               <h5>{user.name}</h5>
               <p>{user.email}</p>
            </div>
         </div>
         {(() => {
            switch (status) {
               case 'suggestion':
                  return (
                     <div className={styles.containerActionsSuggestion}>
                        <ChipButton
                           type="button"
                           label="Adicionar amigo"
                           hasIcon={false}
                           onClick={handleSendRequest}
                        />
                     </div>
                  );
               case 'pending':
                  return (
                     <div className={styles.containerActionsPending}>
                        <ChipButton
                           label="Solicitação enviada"
                           hasIcon={false}
                        />
                     </div>
                  );
               case 'rejected':
                  return (
                     <div className={styles.containerActionsRejected}>
                        <ChipButton
                           label="Solicitação rejeitada"
                           hasIcon={false}
                        />
                     </div>
                  );

               case 'accepted':
               default:
                  return (
                     <div className={styles.containerActions}>
                        <ChipButton
                           label="Amigos"
                           hasIcon={true}
                        />
                        <button
                           id="remove-button"
                           onClick={handleRemoveFriendship}
                        >
                           Remover
                        </button>
                     </div>
                  );
            }
         })()}
      </Card>
   );
};

export default UserCard;
