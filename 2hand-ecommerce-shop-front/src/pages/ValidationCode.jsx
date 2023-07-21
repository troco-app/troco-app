import "../assets/css/pagescss/ValidationCode.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendValidation } from "../api/send-validation-code";

export function ValidationCode() {
  const [payload, setPayload] = useState({
    email: "",
    code: "",
  });

  return (
    <>
      <h1 className="title">
        We have sent you an email with the code, enter here the code puto
      </h1>
      <form action="" className="form">
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
      </form>
      <button className="btn">Send Validation Code</button>
    </>
  );
}
