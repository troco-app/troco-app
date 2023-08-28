export function getTokenInfo(token) {
  const tokenParts = token.split(".");
  const payloadBase64 = tokenParts[1];
  const payloadToString = atob(payloadBase64);
  console.log(payloadToString);
  return JSON.parse(payloadToString);
}
