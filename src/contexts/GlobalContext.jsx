import { ToastContainer, Bounce, toast } from 'react-toastify';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const initialState = {
  isLoading: false,
};

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

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
    showSucessMessage,
    showErrorMessage,
    dismissMessage,
    toggleLoading,
  };

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
