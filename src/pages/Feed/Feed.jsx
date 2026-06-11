import PostCard from '../../components/PostCard/PostCard';
import TextArea from '../../components/TextArea/TextArea';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import styles from './Feed.module.scss';

const data = [
  {
    id: 1,
    authorId: 1,
    content: 'Ola! Este e um post de exemplo.',
    createdAt: '2026-06-08 22:10:08',
    updatedAt: '2026-06-08 22:10:08',
    author: {
      id: 1,
      name: 'Ana Souza',
      email: 'ana@example.com',
    },
    comments: [
      {
        id: 1,
        postId: 1,
        authorId: 2,
        content: 'Comentario de exemplo de um amigo.',
        createdAt: '2026-06-08 22:10:08',
        updatedAt: '2026-06-08 22:10:08',
        author: {
          id: 2,
          name: 'Bruno Lima',
          email: 'bruno@example.com',
        },
      },
    ],
  },
];

const Feed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperMain}>
          <Card customStyle={styles.containerWrapperMainCard}>
            <div>
              <Avatar label="AS" />
            </div>
            <div>
              <TextArea placeholder={`No que você está pensando, ${data[0].author.name}`} />
              <Button label="Publicar" />
            </div>
          </Card>

          
          {data.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
        <div className={styles.containerWrapperAside}>
          <Card>Aside</Card>
        </div>
      </div>
    </div>
  );
};

export default Feed;
