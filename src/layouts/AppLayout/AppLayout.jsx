import { Outlet } from 'react-router';

import styles from './AppLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { UserContext } from '../../contexts/UserContext';

const AppLayout = () => {
  return (
    <UserContext>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.containerWrapper}>
          <Outlet />
        </div>
      </div>
    </UserContext>
  );
};

export default AppLayout;
