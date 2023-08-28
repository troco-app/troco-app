const apiHost = import.meta.env.VITE_API_HOST;

export async function RemoveFromWishlist(token, itemId) {
  const response = await fetch(apiHost + `/users/wishlist/${itemId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `${token}`,
    },
  });
  const result = await response.json();
  return result;
}
