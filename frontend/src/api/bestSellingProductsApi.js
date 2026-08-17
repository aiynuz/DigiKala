import BASE_URL from "./api";

export async function getBestSellingProducts() {
  const response = await fetch(
    `${BASE_URL}/api/best-selling-products`
  );

  if (!response.ok) {
    throw new Error("Best Selling Products API Error");
  }

  return await response.json();
}