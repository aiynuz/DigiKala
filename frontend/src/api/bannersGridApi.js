const BASE_URL = "http://localhost:3000";


export async function getBannersGrid() {

  const res = await fetch(
    `${BASE_URL}/api/bannersGrid`
  );


  return await res.json();

}