import "../assets/css/pagescss/Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendRegister } from "../api/send-register";
import logoblackregister from "../assets/img/trocoBlack.svg";
import locations from "../utils/locations-list";
import { LocationSelect } from "../components/LocationSelect";

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

    const [hasError, setHasError] = useState(false);

    const navigate = useNavigate();

    const onLocationSelected = (selectedCity) => {
        setPayload({
            ...payload,
            city: selectedCity,
        });
    };

    async function onSubmit(evt) {
        evt.preventDefault();
        if (
            !payload.username ||
            !payload.email ||
            !payload.password ||
            !payload.first_name ||
            !payload.last_name ||
            !payload.profile_img ||
            !payload.bio_summary
        ) {
            setHasError(true);
        } else {
            try {
                await sendRegister(payload);
                console.log(payload);
                navigate("/ValidationCode", {
                    state: { email: payload.email },
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <>
            <main className="formRegister">
                <form onSubmit={onSubmit} className="form">
                    <Link className="aLogin" to="/">
                        <button
                            className="loginButton1"
                            style={{
                                backgroundImage: `url(${logoblackregister})`,
                            }}
                        ></button>
                    </Link>
                    <h1 className="registerH1">Create your account</h1>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="User Name *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    username: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    email: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    password: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="Name *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    first_name: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Last Name *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    last_name: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputRegister">
                        <LocationSelect
                            locations={locations.map((loc) => loc.name)}
                            onLocationSelected={onLocationSelected}
                        />
                    </div>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="url"
                            id="profile_img"
                            name="profile_img"
                            placeholder="Enter a URL of your image *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    profile_img: evt.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="inputRegister">
                        <input
                            className="inputRegister2"
                            type="text"
                            id="bio_summary"
                            name="bio_summary"
                            placeholder="Bio *"
                            required
                            onChange={(evt) =>
                                setPayload({
                                    ...payload,
                                    bio_summary: evt.target.value,
                                })
                            }
                        />
                    </div>
                    {hasError && (
                        <div className="error-message">
                            Por favor, completa todos los campos obligatorios.
                        </div>
                    )}

                    <button className="registerButton">Register</button>
                    <p className="pRegister">
                        Already Registered?{" "}
                        <Link to="/Login" className="registerLink">
                            Login
                        </Link>
                    </p>
                </form>
            </main>
        </>
    );
}
