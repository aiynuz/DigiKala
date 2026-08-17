import { getFooterAbout } from "../../api/footerAboutApi.js";
import FooterAbout from "./FooterAbout.js";

export default async function FooterAboutContainer() {

  const data = await getFooterAbout();

  return FooterAbout(data);

}