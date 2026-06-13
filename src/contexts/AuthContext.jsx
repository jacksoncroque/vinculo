import { Children, createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const initialState = {};

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};
export { AuthContext, useAuthContext };
