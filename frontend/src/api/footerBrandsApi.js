import BASE_URL from "./api";


export async function getFooterBrands(){

    const response = await fetch(
        `${BASE_URL}/api/footer/brands`
    );


    if(!response.ok){

        throw new Error("Footer Brands API Error");

    }


    return await response.json();

}