import { getProteinProducts } from "../../api/proteinApi";
import Protein from "./Protein";

export default async function ProteinContainer() {
  const products = await getProteinProducts();

  return Protein({
    products,
  });
}