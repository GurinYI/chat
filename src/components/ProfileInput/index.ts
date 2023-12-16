import Block from '../../utils/Block';
import template from './profile-input.hbs';

interface ProfileInputProps {
  type:string,
  name:string,
  placeholder:string,
  label:string
}

export class ProfileInput extends Block {
  constructor(props: ProfileInputProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
