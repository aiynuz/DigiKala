import BASE_URL from "./api";

export async function getSlider() {
  const response = await fetch(`${BASE_URL}/api/slider`);

  if (!response.ok) {
    throw new Error("Slider API Error");
  }

  return await response.json();
}