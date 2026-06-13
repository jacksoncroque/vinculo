import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ChipButton from '../../components/ChipButton/ChipButton';
import PostCard from '../../components/PostCard/PostCard';

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

import styles from './Profile.module.scss';
const Profile = () => {
  return (
    <div className={styles.container}>
      <Card customStyle={styles.containerWrapper}>
        <div className={styles.containerWrapperCover} />
        <div className={styles.containerWrapperProfile}>
          <Avatar
            label="MC"
            customStyle={styles.containerWrapperProfileAvatar}
          />
          <div className={styles.containerWrapperProfileInfo}>
            <h2>Marina Costa</h2>
            <p>marina.costa@exemplo.com</p>
          </div>
          <div className={styles.containerWrapperProfileActions}>
            <ChipButton label="Editar perfil" />
            <Button
              label="Compartilhar"
              customStyle={styles.containerWrapperProfileActionsBtn}
            />
          </div>
        </div>
        <div className={styles.containerWrapperStats}>
          <div>
            <p>POSTS</p>
            <h2>1</h2>
          </div>
          <div>
            <p>AMIGOS</p>
            <h2>2</h2>
          </div>
          <div>
            <p>COMENTÁRIOS</p>
            <h2>0</h2>
          </div>
        </div>
      </Card>

      <div>
        {data.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
