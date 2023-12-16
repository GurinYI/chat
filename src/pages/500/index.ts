import Block from "../../utils/Block";
import template from "../500/500.hbs";
import { render } from "../../utils/render"
export class Page500 extends Block {
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
