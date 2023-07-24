import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendLogin } from "../api/send-login";
import { AuthContext, LoginContext } from "../contexts/auth-context.jsx";
import "../assets/css/pagescss/Login.css";

//State to set the payload fo the form
export function Login() {
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Use Context to take the current user and the login. Navigate to send user to other page afetr Login.
  const { currentUser } = useContext(AuthContext);
  const login = useContext(LoginContext);
  const navigate = useNavigate();

  //Function to
  async function onSubmit(evt) {
    evt.preventDefault();
    try {
      const { token } = await sendLogin(payload);
      login(token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="loginPage">
      <form onSubmit={onSubmit} className="loginForm">
        <h1>TROCO</h1>
        <h2>Log into your account</h2>
        <div className="inputLogin">
          <label htmlFor="username"></label>
          <input
            className="inputLogin2"
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            required
            onChange={(evt) =>
              setPayload({ ...payload, username: evt.target.value })
            }
          />
        </div>
        <div className="inputLogin">
          <label htmlFor="email"></label>
          <input
          className="inputLogin2"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={(evt) =>
              setPayload({ ...payload, email: evt.target.value })
            }
          />
        </div >
        <div className="inputLogin">
          <label htmlFor="password"></label>
          <input
          className="inputLogin2"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(evt) =>
              setPayload({ ...payload, password: evt.target.value })
            }
          />
        </div>
        <button className="loginButton">Login</button>
        <p className="pLogin">
          Don&apos;t have an account? <Link to="/Register"  className="registerLogin">Register</Link>
        </p>
      </form>
    </div>
  );
}
