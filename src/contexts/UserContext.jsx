import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialState = {};

const UserProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <UserContext.Provider>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(useUserContext);
};

export { UserContext, useUserContext };
