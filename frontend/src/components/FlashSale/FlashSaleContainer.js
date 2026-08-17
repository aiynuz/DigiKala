import { getFlashSale } from "../../api/flashSaleApi";

import FlashSale from "./FlashSale";


export default async function FlashSaleContainer(){

    const data = await getFlashSale();


    return FlashSale(data);

}