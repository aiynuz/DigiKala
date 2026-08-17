import { getAmazing } from "../../api/amazingApi";

import AmazingOffers from "./AmazingOffers";


export default async function AmazingOffersContainer() {

  const data = await getAmazing();


  return AmazingOffers(data);

}