import BASE_URL from "./api";

export async function getHottestProducts() {
  const response = await fetch(`${BASE_URL}/api/hottest-products`);

  if (!response.ok) {
    throw new Error("Hottest Products API Error");
  }

  return await response.json();
}