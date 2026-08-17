import { getBannersGrid } from "../../api/bannersGridApi";

import BannersGrid from "./BannersGrid";


export default async function BannersGridContainer(){

const data = await getBannersGrid();


return BannersGrid(data);

}