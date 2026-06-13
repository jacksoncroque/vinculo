import Avatar from '../Avatar/Avatar';
import ChipButton from '../ChipButton/ChipButton';
import styles from './FriendSugestion.module.scss';

const FriendSugestion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperAvatar}>
          <Avatar label="PH" />
        </div>
        <div className={styles.containerWrapperInfo}>
          <h5>Pedro Henrique</h5>
          <p>3 amigos em comum</p>
        </div>
        <ChipButton label="Adicionar" />
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperAvatar}>
          <Avatar label="PH" />
        </div>
        <div className={styles.containerWrapperInfo}>
          <h5>Pedro Henrique</h5>
          <p>3 amigos em comum</p>
        </div>
        <ChipButton label="Adicionar" />
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperAvatar}>
          <Avatar label="PH" />
        </div>
        <div className={styles.containerWrapperInfo}>
          <h5>Pedro Henrique</h5>
          <p>3 amigos em comum</p>
        </div>
        <ChipButton label="Adicionar" />
      </div>
    </div>
  );
};

export default FriendSugestion;
