import Block from "../../utils/Block";
import template from "./user-profile.hbs";
import { render } from "../../utils/render"



export class UserProfile extends Block {
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
