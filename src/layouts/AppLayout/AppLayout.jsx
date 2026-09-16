import { Navigate, Outlet } from 'react-router';

import { FriendsProvider } from '../../contexts/FriendsContext';
import { ProfileProvider } from '../../contexts/ProfileContext';
import { FeedProvider } from '../../contexts/FeedContext';

import { useGlobalContext } from '../../contexts/GlobalContext';
import useSessionStorage from '../../hooks/SessionStorage';

import Navbar from '../../components/Navbar/Navbar';

import { tokenName } from '../../services/api';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
   const { getItem } = useSessionStorage(tokenName);

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
      <ProfileProvider>
         <FeedProvider>
            <FriendsProvider>
               <div className={styles.container}>
                  <Navbar />

                  <div className={styles.containerWrapper}>
                     <Outlet />
                  </div>
               </div>
            </FriendsProvider>
         </FeedProvider>
      </ProfileProvider>
   );
};

export default AppLayout;
