const apiHost = import.meta.env.VITE_API_HOST;

export async function fetchUserItems(ownerId) {
  const response = await fetch(apiHost + `/items/user/${ownerId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
