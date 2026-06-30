import { Navigate, Outlet } from 'react-router';

import Navbar from '../../components/Navbar/Navbar';
import useLocalStorage from '../../hooks/LocalStorage';

import { useGlobalContext } from '../../contexts/GlobalContext';
import { tokenName } from '../../services/api';

import styles from './AppLayout.module.scss';
import { FeedProvider } from '../../contexts/FeedContext';

const AppLayout = () => {
  const { getItem } = useLocalStorage(tokenName);

  const session = getItem() ?? {};

  if (!session.isAuthenticated) {
    return (
      <Navigate
        to={'/login'}
        replace
      />
    );
  }

  return (
    <FeedProvider>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.containerWrapper}>
          <Outlet />
        </div>
      </div>
    </FeedProvider>
  );
};

export default AppLayout;
