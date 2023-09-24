import { createContext, useState, ReactNode, useEffect } from "react";
import { TokenDecodedI, UserContextValue, UserDataI } from "../../utils/interfaces/interfaces";
import jwt_decode from "jwt-decode";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserDataI | undefined>(undefined);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decode: TokenDecodedI = jwt_decode(token);
      setUser(decode.payload)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}