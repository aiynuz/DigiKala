import BASE_URL from "./api";


export async function getAmazing() {

  const response = await fetch(
    `${BASE_URL}/api/amazing`
  );


  if (!response.ok) {

    throw new Error("Amazing API Error");

  }


  return await response.json();

}