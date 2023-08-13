const apiHost = import.meta.env.VITE_API_HOST;

export async function searchItems({
  search,
  category_name,
  item_condition,
  location,
  min_price,
  max_price,
}) {
  const url = new URL(apiHost + "/items/search");
  const params = {
    search: search || undefined,
    category_name: category_name || undefined,
    item_condition: item_condition || undefined,
    location: location || undefined,
    min_price: min_price || undefined,
    max_price: max_price || undefined,
  };
  Object.keys(params).forEach(
    (key) => params[key] && url.searchParams.append(key, params[key])
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
