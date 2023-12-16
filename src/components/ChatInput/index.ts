import Block from "../../utils/Block";
import template from "../ChatInput/chat-input.hbs";

export class ChatInput extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
