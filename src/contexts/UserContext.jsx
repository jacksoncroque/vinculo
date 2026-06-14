import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialState = {};

const values = {};

const UserProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(useUserContext);
};

export { UserProvider, useUserContext };
