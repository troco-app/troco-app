const apiHost = import.meta.env.VITE_API_HOST;

export async function fetchItem(itemId) {
  const response = await fetch(apiHost + `/items/${itemId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
