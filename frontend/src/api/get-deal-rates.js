const apiHost = import.meta.env.VITE_API_HOST;

export async function getDealRates(dealId) {
  const response = await fetch(apiHost + `/deals/${dealId}/rates`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const responseData = await response.text();
  if (!responseData.trim()) {
    return {}; // or null, or throw an error, depending on how you want to handle it
  }

  try {
    const result = JSON.parse(responseData);
    return result;
  } catch (e) {
    console.error("Failed to parse JSON:", e);
    throw new Error("Invalid JSON response");
  }
}
