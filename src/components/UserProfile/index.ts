import Block from "../../utils/Block";
import template from "./user-profile.hbs";
import { render } from "../../utils/render";
import { validate } from "../../utils/validate";

const handleFormSubmit = () => {
  const form: HTMLFormElement | null = document.querySelector(".user_profile");

  if (form) {
    const formData: FormData = new FormData(form);

    const formObject = Object.fromEntries(formData);
    let invalidDataCount: number = 0;
    const inputContainers = Array.from(
      form.querySelectorAll(".profile_input_container"),
    );

    inputContainers.forEach((inputContainer) => {
      if (!validate(inputContainer)) {
        invalidDataCount++;
      }
    });

    if (!invalidDataCount) {
      console.log(formObject);
    }
  }
};

export class UserProfile extends Block {
  constructor() {
    super({
      back: () => {
        render("home");
      },
      submit: handleFormSubmit,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
