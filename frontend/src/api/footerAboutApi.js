export async function getFooterAbout() {

  const response = await fetch(
    "http://localhost:3000/api/footer-about"
  );

  if (!response.ok) {
    throw new Error("Footer About API Error");
  }

  return await response.json();

}