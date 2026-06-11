import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './CommentForm.module.scss';

const CommentForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerAvatar}>
        <Avatar label="AS" />
      </div>
      <div className={styles.containerInput}>
        <Input
          id="input"
          name="input"
          key="input"
          placeholder="Escreva um comentário..."
        />
      </div>
      <div className={styles.containerButton}>
        <Button
          key="button"
          label="Enviar"
        />
      </div>
    </div>
  );
};

export default CommentForm;
