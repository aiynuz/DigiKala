import BASE_URL from "./api";

export async function getMegaMenu() {
  const response = await fetch(`${BASE_URL}/api/mega-menu`);

  if (!response.ok) {
    throw new Error("Mega Menu API Error");
  }

  return await response.json();
}