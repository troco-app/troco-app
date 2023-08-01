const apiHost = import.meta.env.VITE_API_HOST;
const LOGIN_PATH = apiHost + "/items/";

export async function sendProduct(payload, token) {
  const response = await fetch(LOGIN_PATH, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
}
