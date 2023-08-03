import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PrestationPage from "../pages/PrestationPage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prestations" element={<PrestationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default Router;