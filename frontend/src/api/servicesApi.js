import BASE_URL from "./api";


export async function getServices() {

  const response = await fetch(
    `${BASE_URL}/api/services`
  );


  if (!response.ok) {

    throw new Error("Services API Error");

  }


  return await response.json();

}