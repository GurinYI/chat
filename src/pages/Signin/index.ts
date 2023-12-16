import Block from "../../utils/Block";
import template from "./signin.hbs";
import { render } from "../../utils/render"
export class SigninPage extends Block {
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
