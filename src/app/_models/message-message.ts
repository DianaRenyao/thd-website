import { PublicUserInfoMessage } from './public-user-info-message';

export class MessageMessage {
  messageId: number;
  author: PublicUserInfoMessage;
  content: string;
  timeCreated: Date;
  replyTo?: number;
}
