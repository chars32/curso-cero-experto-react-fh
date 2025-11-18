import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

// HOC - Higher Order Component
// Componente que envuelve a otros componentes y les provee contexto o funcionalidad adicional
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log(userId);
    return true;
  };
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
