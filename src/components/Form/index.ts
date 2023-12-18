import Block from "../../utils/Block";
import template from "./form.hbs";
import { validate } from "../../utils/validate";

interface FormProps {
  class: string;
  events: { submit: () => void };
}

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData: FormData = new FormData(form);

  const formObject = Object.fromEntries(formData);
  let invalidDataCount: number = 0;
  const inputContainers = Array.from(
    form.querySelectorAll(".form_input_container"),
  );

  inputContainers.forEach((inputContainer) => {
    if (!validate(inputContainer)) {
      invalidDataCount++;
    }
  });

  if (!invalidDataCount) {
    console.log(formObject);
  }
};
export class Form extends Block {
  constructor(props: FormProps) {
    super({
      ...props,
      events: {
        submit: handleFormSubmit,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
