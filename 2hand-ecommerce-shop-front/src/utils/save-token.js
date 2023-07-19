import { getTokenInfo } from "./get-token-info";

export function saveToken(token) {
  const userData = getTokenInfo(token);
  localStorage.setItem("USER_TOKEN", token);
  localStorage.setItem("USER", JSON.stringify(userData));
}
