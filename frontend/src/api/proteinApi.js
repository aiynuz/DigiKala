import BASE_URL from "./api";

export async function getProteinProducts() {
  const response = await fetch(`${BASE_URL}/api/protein`);

  if (!response.ok) {
    throw new Error("Protein Products API Error");
  }

  const data = await response.json();

  return data.products;
}