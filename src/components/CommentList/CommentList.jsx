import moment from '../../config/moment';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

import styles from './CommentList.module.scss';

const CommentList = ({ comment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerUser}>
        <Avatar label="BL" />
      </div>
      <Card customStyle={styles.containerComment}>
        <div className={styles.containerCommentAuthor}>
          <h5>{comment.author.name}</h5>
          <span>{moment(comment.createdAt).fromNow()}</span>
        </div>
        <div className={styles.containerCommentContent}>
          <p>{comment.content}</p>
        </div>
      </Card>
    </div>
  );
};

export default CommentList;
