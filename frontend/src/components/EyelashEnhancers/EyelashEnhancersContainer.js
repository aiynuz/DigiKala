import EyelashEnhancers from "./EyelashEnhancers";
import { getEyelashEnhancers } from "../../api/eyelashEnhancersApi";

export default async function EyelashEnhancersContainer() {
  const products = await getEyelashEnhancers();

  return EyelashEnhancers({
    products,
  });
}