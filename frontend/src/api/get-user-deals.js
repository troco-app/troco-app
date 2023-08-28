const apiHost = import.meta.env.VITE_API_HOST;

export async function getUserDeals(token) {
  const response = await fetch(apiHost + `/users/deals`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `${token}`,
    },
  });
  const result = await response.json();
  return result;
}
