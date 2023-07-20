import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendLogin } from "../api/send-login";
import { AuthContext, LoginContext } from "../contexts/auth-context.jsx";
import "../assets/css/Login.css";

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
    <div className="login-page">
      <form onSubmit={onSubmit} className="login-form">
        <h1>Troco</h1>
        <h2>Log into your account</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(evt) =>
              setPayload({ ...payload, username: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(evt) =>
              setPayload({ ...payload, email: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(evt) =>
              setPayload({ ...payload, password: evt.target.value })
            }
          />
        </div>
        <button>Login</button>
        <p>
          Don&apos;t have an account? <Link to="/Register">Register</Link>
        </p>
      </form>
    </div>
  );
}
