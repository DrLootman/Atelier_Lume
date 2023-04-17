import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PrestationPage from "../pages/PrestationPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prestations" element={<PrestationPage />} />
    </Routes>
  )
}

export default Router;