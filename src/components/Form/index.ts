import Block from '../../utils/Block';
import template from './form.hbs';
import { validate } from '../../utils/validate';

interface FormProps {
  class: string;
  events: { submit: () => void };
}

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData: FormData = new FormData(form);

  const formObject = Object.fromEntries(formData);
  let validFormData: boolean | void = true;
  for (const formField in formObject) {
    if (validFormData) {
      validFormData = validate(formField, String(formObject[formField]));
    }
  }

  if (validFormData) {
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
