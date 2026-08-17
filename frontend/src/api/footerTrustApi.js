export async function getFooterTrust() {

  const response = await fetch(
    "http://localhost:3000/api/footer-trust"
  );

  if (!response.ok) {
    throw new Error("Footer Trust API Error");
  }

  return await response.json();

}