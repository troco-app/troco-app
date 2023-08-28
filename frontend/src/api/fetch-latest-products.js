const apiHost = import.meta.env.VITE_API_HOST;

export async function fetchLatestProduct() {
  const response = await fetch(apiHost + `/items/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
