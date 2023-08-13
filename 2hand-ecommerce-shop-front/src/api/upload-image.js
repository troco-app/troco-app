const apiHost = import.meta.env.VITE_API_HOST;
const LOGIN_PATH = apiHost + "/items/";

export async function uploadImage(itemId, selectedFile, token) {
  const formData = new FormData();

  formData.append("image", selectedFile);

  const response = await fetch(LOGIN_PATH + itemId + "/images", {
    method: "POST",
    headers: {
      Authorization: `${token}`,
    },
    body: formData,
  });

  const result = await response.json();
  return result;
}
