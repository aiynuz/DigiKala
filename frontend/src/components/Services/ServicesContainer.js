import { getServices } from "../../api/servicesApi";

import Services from "./Services";


export default async function ServicesContainer() {

  const data = await getServices();


  return Services(data);

}