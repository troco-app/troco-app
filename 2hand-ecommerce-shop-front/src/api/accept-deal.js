const apiHost = import.meta.env.VITE_API_HOST;
const LOGIN_PATH = apiHost + "/deals";

export async function AcceptDeal(payload, token, dealId) {
  const response = await fetch(`${LOGIN_PATH}/${dealId}/accept`, {
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
