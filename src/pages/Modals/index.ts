import Block from '../../utils/Block';
import template from './modal.hbs';

export class ModalsPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
