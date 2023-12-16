import Block from '../../utils/Block';
import template from './chat-message.hbs';

interface ChatMessageProps {
  outgoing: boolean,
  text: string,
  time: string
}

export class ChatMessage extends Block {
  constructor(props: ChatMessageProps) {
    super({
      ...props,
    });
  }

  render() {
    console.log(this.props);
    return this.compile(template, this.props);
  }
}