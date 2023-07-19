import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

export function TestContext() {
  const { currentUser, token } = useContext(AuthContext);

  return (
    <div>
      <h1>
        {currentUser
          ? `You are logged in. This is your email: ${currentUser.email} and your token: ${token}`
          : "No user logged in"}
      </h1>
    </div>
  );
}
