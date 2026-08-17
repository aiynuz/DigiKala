import { getHeader } from "../../api/headerApi";

import TopBanner from "./TopBanner";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

export default async function Header() {
  const data = await getHeader();

  return `
    ${TopBanner(data.topBanner)}

    ${TopHeader(data)}

   ${await BottomHeader(data)}
    
  `;
}