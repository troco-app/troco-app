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
            <main className="validationCode">
                <h1 className="h1ValidationCode ">
                    We have sent you an Email with the code to:{" "}
                    <span className="span-validation blink">{payload.email}</span>
                </h1>
                <form onSubmit={onSubmit} className="formValidationCode">
                    <div className="input-Field">
                        <label htmlFor="code"></label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            placeholder="Code"
                            className="input-Field2"
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    code: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <button type="submit" className="validationCodeButton">
                        Send Validation Code
                    </button>
                </form>
            </main>
        </>
    );
}
