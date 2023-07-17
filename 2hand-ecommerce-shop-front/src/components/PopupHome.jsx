/* eslint-disable react/prop-types */
export function PopupHome({ isOpen, onClose }) {
    return (
        isOpen && (
            <div className="popup">
                <div className="popup-content">
                    <h2>TROCO</h2>
                    <h3>Create an account</h3>
                    <form>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                        />

                        <button type="submit" className="full-width">
                            CREATE ACCOUNT
                        </button>
                    </form>
                    <button onClick={onClose} className="full-width">
                        EXIT
                    </button>
                </div>
            </div>
        )
    );
}
