const BASE_URL = "http://localhost:3000";


export async function getFlashSale(){

    const res = await fetch(
        `${BASE_URL}/api/flash-sale`
    );


    return await res.json();

}