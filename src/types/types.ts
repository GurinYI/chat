export type Chat = {
  name: string,
  lastMessage: string,
  unread: number,
  time: string,
  yourMessageLast: boolean,
  isActive?: boolean,
  messages?: Message[]
}

export type Message = {
  text: string,
  time: string,
  outgoing: boolean
}