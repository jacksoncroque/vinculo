import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search } from 'lucide-react';
import { NavLink } from 'react-router';
import cn from 'classnames';

import { useState } from 'react';

import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    cn(styles.containerWrapperSectionsLink, {
      [styles.containerWrapperSectionsActive]: isActive,
    });

  return (
    <>
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
              className={getNavLinkClass}
            >
              Feed
            </NavLink>
            <NavLink
              to="/friends"
              className={getNavLinkClass}
            >
              Amigos
            </NavLink>
            <NavLink
              to="/friends-requests"
              className={getNavLinkClass}
            >
              Solicitações
            </NavLink>
            <NavLink
              to="/profile"
              className={getNavLinkClass}
            >
              Perfil
            </NavLink>
            <button>Sair</button>
            <Avatar label="MC" />
          </div>
        </div>

        <button
          className=""
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.containerBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className={styles.containerMobile}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className={styles.containerMobileWrapper}>
                <div className={styles.containerMobileWrapperSearch}>
                  <Search size={20} />
                  <Input
                    placeholder="Buscar usuários..."
                    customStyles={styles.containerMobileWrapperSearchInput}
                  />
                </div>
                <div className={styles.containerMobileWrapperSections}>
                  <ul>
                    <li>
                      <NavLink to="/feed">Feed</NavLink>
                    </li>
                    <li>
                      <NavLink to="/friends">Amigos</NavLink>
                    </li>
                    <li>
                      <NavLink to="//friends-requests">Solicitações</NavLink>
                    </li>
                    <li>
                      <NavLink to="/profile">Perfil</NavLink>
                    </li>
                  </ul>
                  <button>Sair</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
