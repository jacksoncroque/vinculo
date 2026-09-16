import { useEffect } from 'react';
import FriendRequestItem from '../../components/FriendsRequestItem/FriendRequestItem';
import { useFriendsContext } from '../../contexts/FriendsContext';

import styles from './FriendsRequests.module.scss';
import { User } from 'lucide-react';

const FriendsRequests = () => {
   const { state, friendsList, receivedRequests } = useFriendsContext();

   const data = state.friendsList;

   useEffect(() => {
      receivedRequests();
   }, []);

   return (
      <div>
         <div className={styles.container}>
            <div className={styles.containerWrapper}>
               <h3>Solicitações de amizade</h3>
               <p>Pessoas que querem se conectar com você.</p>
               {data.map((user) => (
                  <div key={user.id}>
                     <FriendRequestItem
                        userId={user.id}
                        name={user.requester?.name}
                        email={user.requester?.email}
                        label={user.requester?.name}
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default FriendsRequests;
