import { Children, createContext, useContext, useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router';

import { useGlobalContext } from './GlobalContext';
import { login } from '../services/auth.service';
import { tokenName } from '../services/api';

const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isCheckingAuth: false,
};

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const { toggleLoading, showSucessMessage, showErrorMessage } = useGlobalContext();

  const handleLogin = async (email, password) => {
    try {
      toggleLoading(true);

      const res = await login(email, password);

      if (res.success) {
        localStorage.setItem(tokenName, res.data.token);

        setState((prevState) => ({
          ...prevState,
          user: res.data.user,
          isAuthenticated: true,
          token: res.data.token,
        }));
      } else {
        showErrorMessage(res.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoading(false);
    }
  };

  const register = (name, email, password) => {};
  const logout = () => {};
  const checkSession = () => {};
  const updateAuthenticatedUser = () => {};

  const values = {
    state,
    handleLogin,
    register,
    logout,
    checkSession,
    updateAuthenticatedUser,
  };

  useEffect(() => {
    if (state.isAuthenticated === true) {
      navigate('/feed');
    }
  }, [state.isAuthenticated, navigate]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuthContext };
