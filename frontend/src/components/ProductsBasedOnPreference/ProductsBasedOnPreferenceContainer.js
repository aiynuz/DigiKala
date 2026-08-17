import { getProductsBasedOnPreference } from "../../api/productsBasedOnPreferenceApi";
import ProductsBasedOnPreference from "./ProductsBasedOnPreference";

export default async function ProductsBasedOnPreferenceContainer() {
  const products = await getProductsBasedOnPreference();

  return ProductsBasedOnPreference({
    products,
  });
}