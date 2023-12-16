import Block from "../../utils/Block";
import template from "../Login/login.hbs";
import { render } from "../../utils/render"
export class LoginPage extends Block {
  constructor() {
    super({
      back:() => {
        render('home');
      }
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
