import { getParams } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParams('product');
productDetails(productId);