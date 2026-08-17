import BASE_URL from "./api";


export async function getFooter(){

  const response = await fetch(
    `${BASE_URL}/api/footer`
  );


  if(!response.ok){
    throw new Error("Footer API Error");
  }


  return await response.json();

}