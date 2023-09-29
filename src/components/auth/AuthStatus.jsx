import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function AuthStatus() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <h1 className={`${loggedIn ? "text-green-500" : "text-red-500"} text-center text-4xl font-semibold`}>
      {loggedIn ? "Logged In" : "Logged Out"}
    </h1>
  );
}

export default AuthStatus;
