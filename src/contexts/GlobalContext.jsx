import { useNavigate } from 'react-router';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { login, register } from '../services/auth.service';
import { tokenName } from '../services/api';

import useSessionStorage from '../hooks/sessionStorage';
import { getUsers } from '../services/users.service';

const GlobalContext = createContext();

const initialState = {
   isLoading: false,
   user: null,
   token: null,
   isAuthenticated: false,
   inputValue: '',
   usersList: [],
};

const GlobalProvider = ({ children }) => {
   const [state, setState] = useState(initialState);
   const { removeItem, setItem, getItem } = useSessionStorage(tokenName);
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

   const handleChangeInput = (e) => {
      setState((prev) => {
         return { ...prev, inputValue: e.target.value };
      });
   };

   const handleSearchUser = async (search) => {
      const res = await getUsers(search);

      setState((prev) => {
         return { ...prev, usersList: res.data };
      });
   };

   // Impede que uma função seja executada várias vezes em sequência.
   const debounce = (funcao, delay) => {
      // Guarda o timeout atualmente agendado.
      let timeoutId;

      // Função que será chamada sempre que o input mudar.
      const debouncedFunction = (...args) => {
         // Cancela a execução anterior.
         clearTimeout(timeoutId);

         // Cria uma nova execução para depois do delay.
         timeoutId = setTimeout(() => {
            funcao(...args);
         }, delay);
      };

      // Método usado para cancelar uma execução pendente
      // sem precisar agendar outra.
      debouncedFunction.cancel = () => {
         clearTimeout(timeoutId);
      };

      return debouncedFunction;
   };

   // Mantém a mesma função de debounce entre as renderizações.
   const debouncedSearch = useCallback(
      debounce((value) => {
         handleSearchUser(value);
      }, 500),
      [],
   );

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

   useEffect(() => {
      const search = state.inputValue.trim();

      if (search !== '') {
         debouncedSearch(search);
      } else {
         // O input ficou vazio, então a busca anterior não deve acontecer.
         debouncedSearch.cancel();

         // eslint-disable-next-line
         setState((prev) => ({
            ...prev,
            usersList: [],
         }));
      }

      return () => {
         debouncedSearch.cancel();
      };
   }, [state.inputValue, debouncedSearch]);

   useEffect(() => {
   }, [state.usersList]);

   useEffect(() => {
   }, [state.inputValue]);

   const values = {
      state,
      handleLogin,
      handleRegister,
      handleLogout,
      handleChangeInput,
      showSucessMessage,
      showErrorMessage,
      handleSearchUser,
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
            autoClose={1000}
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
