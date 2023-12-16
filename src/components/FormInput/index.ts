import Block from '../../utils/Block';
import template from './form-input.hbs';
import { validate } from '../../utils/validate';

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  events: { change: () => void };
}

function handleInputFocus(input: HTMLInputElement) {
  const sibling = input.nextElementSibling as HTMLElement;
  sibling.classList.add('form_input_container__placeholder_active');
}
function handleInputFocusOut(input: HTMLInputElement) {
  if (input.value.length === 0) {
    const sibling = input.nextElementSibling as HTMLElement;
    sibling.classList.remove('form_input_container__placeholder_active');
  }
  validate(input.name, input.value);
}
export class FormInput extends Block {
  constructor(props: FormInputProps) {
    super({
      ...props,
      events: {
        focus: (ev: Event) => handleInputFocus(ev.target as HTMLInputElement),
        focusout: (ev: Event) => {
          handleInputFocusOut(ev.target as HTMLInputElement);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
