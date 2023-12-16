import Block from '../../utils/Block';
import template from './404.hbs';
import { render } from '../../utils/render';

export class Page404 extends Block {
  constructor() {
    super({
      back: () => {
        render('home');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
