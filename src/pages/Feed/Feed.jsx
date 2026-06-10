import TextArea from '../../components/TextArea/TextArea';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import styles from './Feed.module.scss';

const Feed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperMain}>
          <Card customStyle={styles.containerWrapperMainCard}>
            <div>
              <Avatar label="MC" />
            </div>
            <div>
              <TextArea placeholder="No que você está pensando, Marina?" />
              <Button label="Publicar" />
            </div>
          </Card>
        </div>
        <div className={styles.containerWrapperAside}>
          <Card>Aside</Card>
        </div>
      </div>
    </div>
  );
};

export default Feed;
