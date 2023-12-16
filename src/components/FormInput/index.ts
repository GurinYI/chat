import Block from "../../utils/Block";
import template from "./form-input.hbs";

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  // events: { onBlur: () => void };
}

export class FormInput extends Block {
  constructor(props: FormInputProps) {
    super({
      ...props,
      // events: { onBlur: () => {console.log("123")} },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
