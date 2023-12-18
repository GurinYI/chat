import Block from '../../utils/Block';
import template from './profile-input-container.hbs';

interface ProfileInputContainerProps {
  type: string;
  name: string;
  placeholder: string;
  error: string;
}

export class ProfileInputContainer extends Block {
  constructor(props: ProfileInputContainerProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
