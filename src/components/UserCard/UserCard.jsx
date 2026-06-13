import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';
import ChipButton from '../ChipButton/ChipButton';
import styles from './UserCard.module.scss';

const UserCard = () => {
  return (
    <Card customStyle={styles.container}>
      <div className={styles.containerUser}>
        <div className={styles.containerUserAvatar}>
          <Avatar label="PH" customStyle={styles.containerUserAvatarContainer}/>
        </div>
        <div className={styles.containerUserInfo}>
          <h5>Lucas Almeida</h5>
          <p>lucas@exemplo.com</p>
        </div>
      </div>
      <div className={styles.containerActions}>
        <ChipButton
          label="Amigos"
          hasIcon={true}
        />
        <button id='remove-button'>Remover</button>
      </div>
    </Card>
  );
};

export default UserCard;
