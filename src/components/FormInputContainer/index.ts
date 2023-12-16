import Block from '../../utils/Block';
import template from './form-input-container.hbs';

interface FormInputContainerProps {
  type: string;
  name: string;
  placeholder: string;
  events: { change: () => void };
}

export class FormInputContainer extends Block {
  constructor(props: FormInputContainerProps) {
    super({
      ...props,

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
