const apiHost = import.meta.env.VITE_API_HOST;

export async function getUserInfo(id) {
  const response = await fetch(apiHost + `/users/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
