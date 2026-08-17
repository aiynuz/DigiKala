import RecommendedProducts from "./RecommendedProducts";
import { getRecommendedProducts } from "../../api/recommendedProductsApi";

export default async function RecommendedProductsContainer() {
  const products = await getRecommendedProducts();

  return RecommendedProducts({
    products,
  });
}