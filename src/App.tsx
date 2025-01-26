// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Students } from "./pages/Students";
import DashboardLayout from "./components/DashboardLayout";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* The Dashboard route that will render the DashboardLayout */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/students"
          element={
            <DashboardLayout>
              <Students />
            </DashboardLayout>
          }
        />

        {/* Optionally, you can have a redirect for /dashboard */}
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/students" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
