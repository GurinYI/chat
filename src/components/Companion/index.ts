import Block from '../../utils/Block';
import template from './companion.hbs';

interface CompanionProps {
  name: string
}

export class Companion extends Block {
  constructor(props: CompanionProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}