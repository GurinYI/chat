import Block from "../../utils/Block";
import template from "../Chat/chat.hbs";
export class ChatPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
