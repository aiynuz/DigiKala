const BASE_URL = "http://localhost:3000";


export async function getBanners(){

    const res = await fetch(
        `${BASE_URL}/api/banners`
    );


    return await res.json();

}