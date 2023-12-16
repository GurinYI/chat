import Block from '../../utils/Block';
import template from './home.hbs';
import { render } from '../../utils/render';

export class HomePage extends Block {
  constructor() {
    super({
      links: [
        {
          label: '404',
          onClick: () => {
            render('404');
          },
        },
        {
          label: '500',
          onClick: () => {
            render('500');
          },
        },
        {
          label: 'chat',
          onClick: () => {
            render('chat');
          },
        },
        {
          label: 'login',
          onClick: () => {
            render('login');
          },
        },
        {
          label: 'modals',
          onClick: () => {
            render('modals');
          },
        },
        {
          label: 'profile',
          onClick: () => {
            render('profile');
          },
        },
        {
          label: 'signin',
          onClick: () => {
            render('signin');
          },
        },
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
