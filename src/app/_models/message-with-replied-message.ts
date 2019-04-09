import { MessageMessage } from './message-message';
import { PublicUserInfoMessage } from './public-user-info-message';

export class MessageWithRepliedMessage {
  messageId: number;
  author: PublicUserInfoMessage;
  content: string;
  timeCreated: Date;
  replyToMessage?: MessageMessage;

}
