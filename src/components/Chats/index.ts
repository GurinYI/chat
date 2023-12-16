import Block from '../../utils/Block';
import template from './chats.hbs';
import { Chat } from "../../types/types";
import { chats } from "../../mocked-data/chats";
import { render } from "../../utils/render"

interface ChatsProps {
  chats: Chat[]
}

export class Chats extends Block {
  constructor(props: ChatsProps) {
    super({
      ...props,
      back:() => {
        render('home');
      },
      chats: chats
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}