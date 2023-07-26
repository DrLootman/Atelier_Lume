import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ element: Component }: { element: React.ElementType }) {
  let isAuthenticated = null;

  if (!isAuthenticated) return <Navigate to="/" />

  return <Component />
}