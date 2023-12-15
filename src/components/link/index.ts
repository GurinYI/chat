import Block from "../../utils/Block";
import template from "./link.hbs";
interface LinkProps {
  danger?: boolean;
  class: string;
  href: string;
  label:string;
}
export default class Card extends Block {

  constructor(props: LinkProps) {
    console.log(props)
    super({
      ...props,
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
