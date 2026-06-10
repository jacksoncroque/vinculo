import { Outlet } from 'react-router';

import styles from './AppLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.containerWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
