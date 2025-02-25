import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";
import ComponentShowcasePage from "@/pages/ComponentShowcase";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Redirect root path to home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/showcase" element={<ComponentShowcasePage />} />
        </Routes>
    );
};

export default AppRoutes;

