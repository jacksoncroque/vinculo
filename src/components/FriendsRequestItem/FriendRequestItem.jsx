import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Card from '../Card/Card';
import ChipButton from '../ChipButton/ChipButton';

import styles from './FriendRequestItem.module.scss';

const FriendRequestItem = () => {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.containerAvatar}>
          <Avatar label="JM" />
        </div>
        <div className={styles.containerInfo}>
          <h5>Júlia Mendes</h5>
          <p>julia.m@exemplo.com</p>
          <p>2 amigos em comum</p>
        </div>
        <div className={styles.containerActions}>
          <div>
            <Button
              label="Aceitar "
              customStyle={styles.containerActionsButton}
            />
            <ChipButton label="Recusar" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FriendRequestItem;
