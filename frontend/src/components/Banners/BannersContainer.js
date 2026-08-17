import { getBanners } from "../../api/bannersApi";

import Banners from "./Banners";


export default async function BannersContainer(){

    const data = await getBanners();


    return Banners(data);

}