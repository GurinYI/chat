import { HomePage } from '../pages/Home';
import { Page404 } from '../pages/404';
import { Page500 } from '../pages/500';
import { ChatPage } from '../pages/Chat';
import { LoginPage } from '../pages/Login';
import { SigninPage } from '../pages/Signin';
import { ProfilePage } from '../pages/Profile';
import { ModalsPage } from '../pages/Modals';

const ROUTES = {
  home: HomePage,
  "404": Page404,
  "500": Page500,
  chat: ChatPage,
  login: LoginPage,
  modals: ModalsPage,
  profile: ProfilePage,
  signin: SigninPage,
};

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;
  root.innerHTML = '';
  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
