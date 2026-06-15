import { createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router';

const UserContext = createContext();

const initialState = {};

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const { toggleLoading } = useGlobalContext();

  const handleLogout = async (user, token, isAuthenticated) => {
    toggleLoading(true);

    localStorage.removeItem('token');

    navigate('/login', { replace: true });
  };

  const values = {
    handleLogout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
