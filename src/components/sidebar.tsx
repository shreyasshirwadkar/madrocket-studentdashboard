import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Users } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase"; // Ensure this imports your Firebase auth instance
import { useEffect } from "react";

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Firebase sign-out
      await signOut(auth);
      // Navigate to the login page after successful logout
      navigate("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
      // You can show an error message here if needed
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user && location.pathname !== "/login") {
        // Redirect to login page if the user is logged out and is on a protected page
        navigate("/login", { replace: true });
      }
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, [location, navigate]);

  return (
    <div className="w-64 h-screen border-r bg-gray-50/40">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <nav className="p-2 space-y-1">
        <Link to="/dashboard/students">
          <span
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100",
              location.pathname === "/dashboard/students" ? "bg-gray-100" : ""
            )}
          >
            <Users className="w-5 h-5" />
            Students
          </span>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start px-3"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </nav>
    </div>
  );
}
