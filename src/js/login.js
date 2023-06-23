import { login } from "./auth.mjs";
import { getParams, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const redirect = getParams("redirect");

document.querySelector("#loginButton").addEventListener("click", (e) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  login({ email, password }, redirect);
});