import ChipButton from '../ChipButton/ChipButton';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

import styles from './UserCard.module.scss';
import { useFriendsContext } from '../../contexts/FriendsContext';

const UserCard = ({ user }) => {
   const { sendFriendRequest, acceptFriendshipRequest, rejectFriendshipRequest, removeFriend } =
      useFriendsContext();

   const handleSendRequest = async () => {
      await sendFriendRequest(user.id);
   };

   let status = '';

   if (user.friendship === null) {
      status = 'suggestion';
   } else if (user.friendship.status === 'pending') {
      status = 'pending';
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

               case 'accepted':
               default:
                  <div className={styles.containerActions}>
                     <ChipButton
                        label="Amigos"
                        hasIcon={true}
                     />
                     <button id="remove-button">Remover</button>
                  </div>;
                  break;
            }
         })()}
      </Card>
   );
};

export default UserCard;
