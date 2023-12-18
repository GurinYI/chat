import Block from '../../utils/Block';
import template from './form-input-error.hbs';

interface FormInputErrorProps {
  error: string;
}

export class FormInputError extends Block {
  constructor(props: FormInputErrorProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
