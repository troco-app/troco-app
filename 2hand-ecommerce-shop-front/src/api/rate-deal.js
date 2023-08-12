const apiHost = import.meta.env.VITE_API_HOST;

export async function rateDeal(payload, token, dealId) {
  const response = await fetch(apiHost + `/deals/${dealId}/rate`, {
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
