import { useEffect } from 'react';
import { useFeedContext } from '../../contexts/FeedContext';
import Avatar from '../Avatar/Avatar';
import ChipButton from '../ChipButton/ChipButton';
import styles from './FriendSugestion.module.scss';

const FriendSugestion = () => {
  const { state, getFriendsSugestionList } = useFeedContext();

  const data = state.friendsSugestions
    .sort((a, b) => {
      return a.mutualFriendsCount - b.mutualFriendsCount;
    })
    .slice(0, 4);

  useEffect(() => {
    getFriendsSugestionList();
  }, []);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.containerWrapper}
        >
          <div className={styles.containerWrapperAvatar}>
            <Avatar label={item.name} />
          </div>
          <div className={styles.containerWrapperInfo}>
            <h5>{item.name}</h5>
            <p>{item.mutualFriendsCount} amigos em comum.</p>
          </div>
          <ChipButton label="Adicionar" />
        </div>
      ))}
    </div>
  );
};

export default FriendSugestion;
