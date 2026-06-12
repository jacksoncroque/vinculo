import FriendRequestItem from '../../components/FriendsRequestItem/FriendRequestItem';

import styles from './FriendsRequests.module.scss';

const Profile = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <h3>Solicitações de amizade</h3>
          <p>Pessoas que querem se conectar com você.</p>
          <div>
            <FriendRequestItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
