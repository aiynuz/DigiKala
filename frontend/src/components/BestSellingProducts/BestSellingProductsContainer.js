import { getBestSellingProducts } from "../../api/bestSellingProductsApi";
import BestSellingProducts from "./BestSellingProducts";

export default async function BestSellingProductsContainer() {
  const products = await getBestSellingProducts();

  return BestSellingProducts({
    products,
  });
}