import BASE_URL from "./api";

export async function getProductsBasedOnPreference() {
  const response = await fetch(
    `${BASE_URL}/api/products-based-on-preference`
  );

  if (!response.ok) {
    throw new Error("Products Based On Preference API Error");
  }

  const data = await response.json();

  return data.products;
}