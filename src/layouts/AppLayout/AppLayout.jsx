import { Outlet } from 'react-router';

import styles from './AppLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { UserProvider } from '../../contexts/UserContext';

const AppLayout = () => {
  return (
    <UserProvider>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.containerWrapper}>
          <Outlet />
        </div>
      </div>
    </UserProvider>
  );
};

export default AppLayout;
