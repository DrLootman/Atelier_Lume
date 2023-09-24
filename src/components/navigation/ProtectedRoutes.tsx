import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoutes({ children }: ProtectedRouteProps) {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not properly initialized") 
  }

  const { user } = userContext;
  
  if (!user) return <Navigate to="/" />

  return <>{ children }</>
}