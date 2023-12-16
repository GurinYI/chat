import Block from "../../utils/Block";
import template from "./profile.hbs";
import { render } from "../../utils/render"
export class ProfilePage extends Block {
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
