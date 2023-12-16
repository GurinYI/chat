import Block from '../../utils/Block';
import template from './form-button.hbs';

interface FormButtonProps {
  label: string;
}

export class FormButton extends Block {
  constructor(props: FormButtonProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
