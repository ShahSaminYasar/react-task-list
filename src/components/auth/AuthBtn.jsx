import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

function AuthBtn() {
  const { setLoggedIn, loggedIn } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(false);
  const [password, setPassword] = useState("");

  const login = () => {
    if (password != "samin123%") {
      alert("Incorrect password");
    } else {
      setLoginForm(false);
      setLoggedIn(true);
      setPassword("");
    }
  };

  return (
    <>
      <button
        className={`w-[95px] text-center py-2 px-4 rounded-xl bg-indigo-800 text-white ${
          loggedIn ? "active:bg-red-800" : "active:bg-green-800"
        }`}
        onClick={() =>
          password === ""
            ? loggedIn
              ? setLoggedIn(false)
              : setLoginForm(true)
            : login()
        }
      >
        {loggedIn ? "Logout" : "Login"}
      </button>
      {loginForm && (
        <form
          className="w-full max-w-md bg-white-500 p-5 rounded-xl border-4 border-neutral-200"
          onSubmit={(e) => {e.preventDefault(); login()}}
        >
          <input
            type="text"
            placeholder="password"
            className="w-full max-w-md bg-white-500 py-2 px-3 rounded-xl border-4 border-neutral-200 text-xl text-neutral-900 outline-none focus:border-slate-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      )}
    </>
  );
}

export default AuthBtn;
