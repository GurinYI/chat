import Block from '../../utils/Block';
import template from './search.hbs';

export class Search extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
