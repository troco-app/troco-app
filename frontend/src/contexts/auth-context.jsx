/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getUser } from "../utils/get-user.js";
import { getToken } from "../utils/get-token.js";
import { deleteToken } from "../utils/delete-token.js";
import { saveToken } from "../utils/save-token.js";

export const AuthContext = createContext({
  currentUser: null,
  token: null,
});

export const LogoutContext = createContext(null);
export const LoginContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentContext, setCurrentContext] = useState({
    currentUser: null,
    token: null,
  });

  async function logout() {
    deleteToken();
    setCurrentContext({ currentUser: null, token: null });
  }

  async function login(token) {
    saveToken(token);
    const user = await getUser();
    setCurrentContext({
      token,
      currentUser: user,
    });
  }

  useEffect(() => {
    (async function initializeContext() {
      const token = await getToken();
      if (token) {
        const user = await getUser();
        setCurrentContext({
          token,
          currentUser: user,
        });
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={currentContext}>
      <LogoutContext.Provider value={logout}>
        <LoginContext.Provider value={login}>{children}</LoginContext.Provider>
      </LogoutContext.Provider>
    </AuthContext.Provider>
  );
}
