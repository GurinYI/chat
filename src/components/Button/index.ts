import Block from "../../utils/Block";
import template from "./button.hbs";

interface LinkProps {
  label: string;
  href: string;
  danger?: boolean;
  class: string;
}

export class Button extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
