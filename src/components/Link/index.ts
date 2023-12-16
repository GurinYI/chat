import Block from "../../utils/Block";
import template from "./link.hbs";

interface LinkProps {
  label: string;
  danger?: boolean;
  class: string;
  onClick?: () => void;
  events: { click: () => void };
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: props.onClick
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
