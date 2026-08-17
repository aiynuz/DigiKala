import { getFooter } from "../../api/footerApi";
import Footer from "./Footer";


export default async function FooterContainer(){

  const data = await getFooter();

  return Footer(data);

}