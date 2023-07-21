const apiHost = import.meta.env.VITE_API_HOST;
const LOGIN_PATH = apiHost + "/users/validate-code";

export async function sendValidation(payload) {
  const response = await fetch(LOGIN_PATH, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
}
