import BASE_URL from "./api";

export async function getEyelashEnhancers() {
  const response = await fetch(
    `${BASE_URL}/api/eyelash-enhancers`
  );

  if (!response.ok) {
    throw new Error("Eyelash Enhancers API Error");
  }

  const data = await response.json();

  return data.products;
}