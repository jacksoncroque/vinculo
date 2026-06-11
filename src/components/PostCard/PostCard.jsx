import moment from '../../config/moment';

import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <div className={styles.containerHeaderAvatar}>
            <Avatar
              label="AS"
              customStyle={styles.containerHeaderAvatarIcon}
            />
          </div>

          <div className={styles.containerHeaderAuthor}>
            <h4>{post.author.name}</h4>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
      </div>

      <div className={styles.containerPost}>
        <div className={styles.containerPostContent}>
          <p>{post.content}</p>
        </div>
      </div>
      <div className={styles.containerComments}>
        {post.comments.map((comment) => (
          <CommentList
            key={comment.id}
            comment={comment}
          />
        ))}
        {!post.comments.length && (
          <>
            <span className={styles.containerCommentsSpan}>Seja o primeiro a comentar.</span>
          </>
        )}
      </div>
      <div>
        <CommentForm />
      </div>
    </Card>
  );
};

export default PostCard;
