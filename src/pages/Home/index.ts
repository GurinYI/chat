import Block from '../../utils/Block';
import template from './home.hbs';
import {render} from "../../utils/render";


export class HomePage extends Block {
  constructor() {
    super({
      type: 'button',

      links: [
        {
          label: '404',
          href: '/404'
        },
        {
          label: '500',
          href: '/500'
        },
        {
          label: 'chat',
          href: '/chat'
        },
        {
          label: 'login',
          href: '/login'
        },
        {
          label: 'modals',
          href: '/modals'
        },
        {
          label: 'profile',
          href: '/profile'
        },
        {
          label: 'signin',
          href: '/signin'
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}