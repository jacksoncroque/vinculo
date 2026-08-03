import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search } from 'lucide-react';
import { NavLink } from 'react-router';
import cn from 'classnames';

import { useEffect, useState } from 'react';

import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';

import styles from './Navbar.module.scss';
import { useGlobalContext } from '../../contexts/GlobalContext';
import FriendSugestion from '../FriendSugestion/FriendSugestion';
import ChipButton from '../ChipButton/ChipButton';
import { useFeedContext } from '../../contexts/FeedContext';

const Navbar = () => {
   const { state, handleLogout, handleChangeInput, handleSearchUser } = useGlobalContext();
   const { sendFriendRequest, getFriendsSugestionList } = useFeedContext();

   const [open, setOpen] = useState(false);

   const getNavLinkClass = ({ isActive }) =>
      cn(styles.containerWrapperSectionsLink, {
         [styles.containerWrapperSectionsActive]: isActive,
      });

   const handleSendFriendRequest = async (userId) => {
      await sendFriendRequest(userId);

      handleSearchUser(state.inputValue);

      await getFriendsSugestionList();
   };

   const data = state.usersList;

   console.log(data);

   useEffect(() => {}, [data]);

   return (
      <>
         <div className={styles.container}>
            <div className={styles.containerWrapper}>
               <div className={styles.containerWrapperLogo}>
                  <Logo />
               </div>
               <div className={styles.containerWrapperSearch}>
                  <Search
                     size={20}
                     className={styles.containerWrapperSearchIcon}
                  />

                  <Input
                     type="text"
                     id="search"
                     name="search"
                     placeholder="Buscar usuários..."
                     value={state.inputValue}
                     onChange={handleChangeInput}
                     customStyles={styles.containerWrapperSearchInput}
                  />

                  <AnimatePresence>
                     {state.usersList.length > 0 && (
                        <motion.div
                           className={styles.containerWrapperSearchDropdown}
                           initial={{ opacity: 0, y: -8 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -8 }}
                           transition={{ duration: 0.2 }}
                        >
                           <Card customStyle={styles.containerWrapperSearchResults}>
                              {data.map((user) => {
                                 let label = 'Adicionar';
                                 let disabled = false;

                                 if (user.friendship?.status === 'pending') {
                                    label = 'Solicitado';
                                    disabled = true;
                                 }

                                 return (
                                    <div
                                       key={user.id}
                                       className={styles.containerWrapperSearchResultsUser}
                                    >
                                       <Avatar label={user.name} />
                                       <h3>{user.name}</h3>

                                       <ChipButton
                                          label={label}
                                          onClick={() => {
                                             handleSendFriendRequest(user.id);
                                          }}
                                       />
                                    </div>
                                 );
                              })}
                           </Card>
                        </motion.div>
                     )}
                  </AnimatePresence>
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
                  <button onClick={handleLogout}>Sair</button>
                  <NavLink to="/profile">
                     <Avatar
                        label={state.user?.name}
                        customStyle={styles.containerWrapperSectionsAvatar}
                     />
                  </NavLink>
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
                                 <NavLink to="/friends-requests">Solicitações</NavLink>
                              </li>
                              <li>
                                 <NavLink to="/profile">Perfil</NavLink>
                              </li>
                           </ul>
                           <button onClick={handleLogout}>Sair</button>
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
