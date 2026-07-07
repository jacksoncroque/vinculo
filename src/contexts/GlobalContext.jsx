import { useNavigate } from 'react-router';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { createContext, useContext, useEffect, useState } from 'react';

import { login, register } from '../services/auth.service';
import { tokenName } from '../services/api';

import useLocalStorage from '../hooks/LocalStorage';

const GlobalContext = createContext();

const initialState = {
   isLoading: false,
   user: null,
   token: null,
   isAuthenticated: false,
};

const GlobalProvider = ({ children }) => {
   const [state, setState] = useState(initialState);
   const { removeItem, setItem, getItem } = useLocalStorage(tokenName);
   const navigate = useNavigate();

   const handleLogin = async (email, password) => {
      try {
         toggleLoading(true);

         const res = await login(email, password);

         if (res.success) {
            setState((prevState) => ({
               ...prevState,
               user: res.data.user,
               isAuthenticated: true,
               token: res.data.token,
            }));

            setItem({
               ...state,
               user: res.data.user,
               isAuthenticated: true,
               token: res.data.token,
            });

            navigate('/feed', { replace: true });
         } else {
            showErrorMessage(res.error);
         }
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   };

   const handleRegister = async (name, email, password) => {
      try {
         toggleLoading(true);

         const res = await register(name, email, password);

         if (res.success) {
            setState((prevState) => ({
               ...prevState,
               user: res.data.user,
               isAuthenticated: true,
               token: res.data.token,
            }));

            setItem({
               ...state,
               user: res.data.user,
               isAuthenticated: true,
               token: res.data.token,
            });

            navigate('/feed', { replace: true });
         } else {
            showErrorMessage(res.error);
         }

         return res;
      } catch (error) {
         console.log(error);

         return {
            success: false,
            error: 'Erro interno ao criar conta',
         };
      } finally {
         toggleLoading(false);
      }
   };

   const handleLogout = async (user, token, isAuthenticated) => {
      toggleLoading(true);

      removeItem();

      navigate('/login', { replace: true });
   };

   const showSucessMessage = (msg) => {
      toast.success(msg);
   };

   const showErrorMessage = (msg) => {
      toast.error(msg);
   };

   const dismissMessage = (msg) => {
      toast.dismiss(msg);
   };

   const toggleLoading = (isLoading = undefined) => {
      setState((prev) => ({
         ...prev,
         isLoading: isLoading ?? !prev.isLoading,
      }));
   };

   const values = {
      state,
      handleLogin,
      handleRegister,
      handleLogout,
      showSucessMessage,
      showErrorMessage,
      dismissMessage,
      toggleLoading,
   };

   useEffect(() => {
      const user = getItem()?.user ?? null;
      const token = getItem()?.token ?? null;

      if (state.user === null && state.token === null && user && token) {
         //eslint-disable-next-line
         setState((prev) => {
            return { ...prev, user, token, isAuthenticated: true };
         });
      }
   }, [state]);

   return (
      <GlobalContext.Provider value={values}>
         {children}{' '}
         <ToastContainer
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Bounce}
         />
      </GlobalContext.Provider>
   );
};

const useGlobalContext = () => {
   return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
