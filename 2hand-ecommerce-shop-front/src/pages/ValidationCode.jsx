import "../assets/css/pagescss/ValidationCode.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { sendValidation } from "../api/send-validation-code";

export function ValidationCode() {
  let location = useLocation();
  let email = location.state.email;
  const [payload, setPayload] = useState({
    email: email,
    code: "",
  });

  const navigate = useNavigate();

  async function onSubmit(evt) {
    evt.preventDefault();
    try {
      console.log("1");
      await sendValidation(payload);
      navigate("/Login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1 className="title">
        We have sent you an email with the code to {payload.email}
      </h1>
      <form onSubmit={onSubmit} className="form">
        <div className="input-field">
          <label htmlFor="code"></label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Code"
            className="input"
            onChange={(evt) =>
              setPayload({ ...payload, code: evt.target.value })
            }
          />
        </div>
        <button type="submit" className="btn">
          Send Validation Code
        </button>
      </form>
    </>
  );
}
