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
            <div className="validationCode">
                <form action="" className="formValidationCode">
                    <h1 className="h1ValidationCode">
                    Enter the validation code
                    </h1>
                    <div className="inputField">
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            className="inputField2"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    email: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputField">
                        <label htmlFor="code"></label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            placeholder="Code"
                            className="inputField2"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    code: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <button className="validationCodeButton">
                        Send Validation Code
                    </button>
                </form>
            </div>
        </>
    );
}
