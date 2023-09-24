import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/HomePage";
import PrestationPage from "../pages/PrestationPage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import PricesPage from "../pages/PricesPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/realisations" element={<PrestationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/tarifs" element={<PricesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoutes>
            <AdminPage />
          </ProtectedRoutes>
        } />
    </Routes>
  )
}

export default Router;