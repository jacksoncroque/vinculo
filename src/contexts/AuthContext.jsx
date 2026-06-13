import { Children, createContext, useContext, useState } from 'react';

import { login } from '../services/auth.service';
import { useGlobalContext } from './GlobalContext';
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
    handleLogin,
    register,
    logout,
    checkSession,
    updateAuthenticatedUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};
export { AuthContext, useAuthContext };
