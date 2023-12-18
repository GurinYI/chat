import Block from '../../utils/Block';
import template from './chat-main.hbs';
import { Chat } from '../../types/types';
import { activeChat } from '../../mocked-data/chats';

interface ChatMainProps {
  activeChat: Chat;
}
export class ChatMain extends Block {
  constructor(props: ChatMainProps) {
    super({
      ...props,
      activeChat,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
