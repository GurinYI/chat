import Block from '../../utils/Block';
import template from './chat-messages.hbs';
import { Message } from "../../types/types";

interface ChatMessagesProps {
  messages: Message[]
}

export class ChatMessages extends Block {
  constructor(props: ChatMessagesProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}