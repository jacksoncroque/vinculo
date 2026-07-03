import { Navigate, Outlet } from 'react-router';

import { useGlobalContext } from '../../contexts/GlobalContext';
import { tokenName } from '../../services/api';

import Logo from '../../components/Logo/Logo';
import useLocalStorage from '../../hooks/LocalStorage';

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  const { getItem } = useLocalStorage(tokenName);

  const session = getItem() ?? {};

  if (session.isAuthenticated) {
    return (
      <Navigate
        to={'/feed'}
        replace
      />
    );
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.containerWrapperLeft}>
            <div>
              <Logo customStyles={styles.containerWrapperLeftLogo} />
            </div>
            <div className={styles.containerWrapperLeftMain}>
              <h1>Conecte-se às pessoas que importam.</h1>
              <p>Uma rede social simples, leve e feita para conversas reais entre amigos.</p>
            </div>
            <div>&copy; vínculo · demo de design</div>
          </div>
          <div className={styles.containerWrapperRight}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
