import ChipButton from '../../components/ChipButton/ChipButton';
import Card from '../../components/Card/Card';
import styles from './Friends.module.scss';
import Input from '../../components/Input/Input';
import UserCard from '../../components/UserCard/UserCard';

const Friends = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <h3>Pessoas</h3>
        <p>Encontre amigos, envie solicitações e acompanhe quem está na sua rede.</p>
        <Card customStyle={styles.containerWrapperHeader}>
          <div className={styles.containerWrapperHeaderButtons}>
            <ChipButton label="Todos" />
            <ChipButton label="Meus amigos" />
            <ChipButton label="Sugestões" />
          </div>
          <div className={styles.containerWrapperHeaderInput}>
            <Input placeholder="Buscar por nome..." />
          </div>
        </Card>
        <div className={styles.containerWrapperGrid}>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Friends;
