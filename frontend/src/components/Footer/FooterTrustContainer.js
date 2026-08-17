import { getFooterTrust } from "../../api/footerTrustApi.js";
import FooterTrust from "./FooterTrust.js";

export default async function FooterTrustContainer() {

  const data = await getFooterTrust();

  return FooterTrust(data);

}