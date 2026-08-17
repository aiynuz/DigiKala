import BASE_URL from "./api";

export async function getRecommendedProducts() {
  const response = await fetch(
    `${BASE_URL}/api/recommended-products`
  );

  if (!response.ok) {
    throw new Error("Recommended Products API Error");
  }

  const data = await response.json();

  return data.products;
}