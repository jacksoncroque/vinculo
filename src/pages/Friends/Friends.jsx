import { useEffect, useState } from 'react';

import { useFriendsContext } from '../../contexts/FriendsContext';

import ChipButton from '../../components/ChipButton/ChipButton';
import UserCard from '../../components/UserCard/UserCard';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';

import styles from './Friends.module.scss';
import cn from 'classnames';
import { getUsers } from '../../services/users.service';

const Friends = () => {
   const {
      state,
      getFriendsList,
      receivedRequests,
      acceptFriendshipRequest,
      rejectFriendshipRequest,
      getFriendsSugestionList,
      removeFriend,
      getUsersList,
   } = useFriendsContext();

   const [selectedFilter, setSelectedFilter] = useState('all');

   const data = state.friendsList;

   useEffect(() => {
      if (selectedFilter === 'all') {
         getUsersList();
      }

      if (selectedFilter === 'friends') {
         getFriendsList();
      }
      if (selectedFilter === 'suggestions') {
         getFriendsSugestionList();
      }
   }, [selectedFilter]);

   useEffect(() => {}, [data]);

   return (
      <div className={styles.container}>
         <div className={styles.containerWrapper}>
            <h3>Pessoas</h3>
            <p>Encontre amigos, envie solicitações e acompanhe quem está na sua rede.</p>
            <Card customStyle={styles.containerWrapperHeader}>
               <div className={styles.containerWrapperHeaderButtons}>
                  <ChipButton
                     label="Todos"
                     onClick={() => setSelectedFilter('all')}
                     customStyle={cn(styles.containerWrapperHeaderButtonsButton, {
                        [styles.containerWrapperHeaderButtonsSelected]: selectedFilter === 'all',
                     })}
                  />
                  <ChipButton
                     label="Meus amigos"
                     onClick={() => setSelectedFilter('friends')}
                     customStyle={cn(styles.containerWrapperHeaderButtonsButton, {
                        [styles.containerWrapperHeaderButtonsSelected]:
                           selectedFilter === 'friends',
                     })}
                  />
                  <ChipButton
                     label="Sugestões"
                     onClick={() => setSelectedFilter('suggestions')}
                     customStyle={cn(styles.containerWrapperHeaderButtonsButton, {
                        [styles.containerWrapperHeaderButtonsSelected]:
                           selectedFilter === 'suggestions',
                     })}
                  />
               </div>
            </Card>
            <div className={styles.containerWrapperGrid}>
               {data.map((user) => {
                  return (
                     <UserCard
                        key={user.id}
                        user={user}
                        activeTab={selectedFilter}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Friends;
