import moment from '../../config/moment';

import CommentList from '../CommentList/CommentList';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

import styles from './PostCard.module.scss';

// const data = [
//   {
//     id: 1,
//     authorId: 1,
//     content: 'Ola! Este e um post de exemplo.',
//     createdAt: '2026-06-08 22:10:08',
//     updatedAt: '2026-06-08 22:10:08',
//     author: {
//       id: 1,
//       name: 'Ana Souza',
//       email: 'ana@example.com',
//     },
//     comments: [
//       {
//         id: 1,
//         postId: 1,
//         authorId: 2,
//         content: 'Comentario de exemplo de um amigo.',
//         createdAt: '2026-06-08 22:10:08',
//         updatedAt: '2026-06-08 22:10:08',
//         author: {
//           id: 2,
//           name: 'Bruno Lima',
//           email: 'bruno@example.com',
//         },
//       },
//     ],
//   },
// ];

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
    </Card>
  );
};

export default PostCard;
