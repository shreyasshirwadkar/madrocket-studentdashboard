// DashboardPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/students");
  }, [navigate]);

  return null; // Since we're redirecting, nothing needs to be rendered here.
}
