import productList from "./productList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";

loadHeaderFooter();
// const cat = getParams("category");
productList(".product-list", "tents");