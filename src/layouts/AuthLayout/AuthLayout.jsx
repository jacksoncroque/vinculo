import { Outlet } from 'react-router';

import Logo from '../../components/Logo/Logo';

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.containerWrapperLeft}>
            <div>
              <Logo customStyles={styles.containerWrapperLeftLogo} />
            </div>
            <div>
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
