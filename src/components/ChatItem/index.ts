import Block from '../../utils/Block';
import template from './chat-item.hbs';
import { Chat } from '../../types/types';

interface ChatProps {
  chat: Chat;
}
export class ChatItem extends Block {
  constructor(props: ChatProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
