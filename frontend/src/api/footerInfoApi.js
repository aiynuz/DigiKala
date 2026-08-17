import BASE_URL from "./api";


export async function getFooterInfo(){

    const response = await fetch(
        `${BASE_URL}/api/footer/info`
    );


    if(!response.ok){

        throw new Error("Footer Info API Error");

    }


    return await response.json();

}