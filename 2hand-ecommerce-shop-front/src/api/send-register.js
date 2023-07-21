const apiHost = import.meta.env.VITE_API_HOST;
const LOGIN_PATH = apiHost + "/users/register";

export async function sendRegister(payload) {
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
