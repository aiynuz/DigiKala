import BASE_URL from "./api";

export async function getHeader() {
  const response = await fetch(`${BASE_URL}/api/header`);

  if (!response.ok) {
    throw new Error("Header API Error");
  }

  const data = await response.json();

  console.log(data);

  return data;
}