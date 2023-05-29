import { Input, Password } from "./input";

// assets
import "../assets/styles/index.scss";


const input = new Input(".lsn-form", { classList: "lsn-form__input", placeholder: "Custom placeholder" });
const inputPassword = new Password(".lsn-form", { classList: "lsn-form__input", placeholder: "Enter password" });

input.onchange(e => {
  if (e.target.value === "delete") {
    input.remove();
  } else if (e.target.value === "red") {
    input.update("classList", "lsn-form__input lsn-form__input_red");
  }
});

inputPassword.onchange(e => {
  console.log(e.target.value);
});
