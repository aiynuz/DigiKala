import { getHottestProducts } from "../../api/hottestProductsApi";
import HottestProducts from "./HottestProducts";

export default async function HottestProductsContainer() {
  const data = await getHottestProducts();

  return HottestProducts(data);
}