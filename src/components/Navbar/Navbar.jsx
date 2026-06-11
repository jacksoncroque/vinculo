import { Search } from 'lucide-react';
import { NavLink } from 'react-router';

import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperLogo}>
          <Logo />
        </div>
        <div className={styles.containerWrapperSearch}>
          <Search size={20} />
          <Input
            type="text"
            id="search"
            name="search"
            placeholder="Buscar usuários..."
            customStyles={styles.containerWrapperSearchInput}
          />
        </div>
        <div className={styles.containerWrapperSections}>
          <NavLink
            to="/feed"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Feed
          </NavLink>
          <NavLink to="/friends">Amigos</NavLink>
          <NavLink to="/friends-requests">Solicitações</NavLink>
          <NavLink to="/profile">Perfil</NavLink>
          <button>Sair</button>
          <Avatar label="MC" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
