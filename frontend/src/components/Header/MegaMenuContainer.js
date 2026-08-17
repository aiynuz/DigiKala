import { getMegaMenu } from "../../api/megaMenuApi";
import MegaMenu from "./MegaMenu";

export default async function MegaMenuContainer() {
  const data = await getMegaMenu();

  return MegaMenu(data);
}