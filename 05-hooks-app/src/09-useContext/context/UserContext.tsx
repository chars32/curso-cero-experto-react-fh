import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { users, type User } from "../data/user-mock.data";

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
    const user = users.find((user) => user.id === userId);

    if (!user) {
      console.log("User not found");
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAuthStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storaedUserId = localStorage.getItem("userId");

    if (storaedUserId) {
      handleLogin(Number(storaedUserId));
      return;
    }

    handleLogout();
  }, []);

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
