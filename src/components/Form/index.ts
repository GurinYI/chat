import Block from "../../utils/Block";
import template from "./form.hbs";

interface FormProps {
  class: string;
  events: { submit: () => void; };
}

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData:FormData = new FormData(form);
  // @ts-ignore
  console.log(Object.fromEntries(formData))
  // const formIsValid = checkFormValidation(form);
  // if (formIsValid) {
  //   const formData = new FormData(form);
  //   console.log(Object.fromEntries(formData))
  //   render('chat');
  // } else {
  //   console.log('form is invalid');
  // }
};
export class Form extends Block {
  constructor(props: FormProps) {
    super({
      ...props,
      events: {
        submit: handleFormSubmit
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
