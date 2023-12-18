import Block from "../../utils/Block";
import template from "./profile-input.hbs";
import { validate } from "../../utils/validate";

interface ProfileInputProps {
  type: string;
  name: string;
  placeholder: string;
  events: { change: () => void };
}


function handleInputFocusOut(input: HTMLInputElement) {
  console.log(input)
  if (input.parentNode) {
    validate(input.parentNode);
  }
}

export class ProfileInput extends Block {
  constructor(props: ProfileInputProps) {
    super({
      ...props,
      events: {
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
