import Cookies from "js-cookie";

export async function logout() {
  // Delete the cookie named "session"
  Cookies.remove("session");

  // Perform any other logout-related tasks, like redirecting
  console.log("User logged out, session cookie removed.");
}
