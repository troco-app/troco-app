import "../assets/css/pagescss/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext, LoginContext } from "../contexts/auth-context.jsx";

export function Register() {
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    city: "",
    profile_img: "",
    bio_summary: "",
  });

  console.log(payload);

  return (
    <>
      <form action="" className="form">
        <h2>Create Your Account</h2>
        <div className="input-field">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, username: evt.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, email: evt.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, password: evt.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="first_name"></label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Name"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, first_name: evt.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="last_name"></label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, last_name: evt.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="profile_img"></label>
          <input
            type="url"
            id="profile_img"
            name="profile_img"
            placeholder="Enter an url of your image"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, profile_img: evt.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="bio_summary"></label>
          <input
            type="text"
            id="bio_summary"
            name="bio_summary"
            placeholder="Tell us briefly why you here"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, bio_summary: evt.target.value })
            }
          />
        </div>
        <button>Register</button>
        <p>
          Already Registered? <Link to="/Login">Login</Link>
        </p>
      </form>
    </>
  );
}
