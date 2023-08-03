const apiHost = import.meta.env.VITE_API_HOST;

export async function AddToWishlist(token, itemId) {
  const response = await fetch(apiHost + `/users/wishlist/${itemId}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `${token}`,
    },
  });
  const result = await response.json();
  return result;
}
