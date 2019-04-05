import { UserInfoMessage } from './user-info-message';

export class SessionMessage {
  authenticated: boolean;
  token: string;
  issuedAt: Date;
  expiresAt: Date;
  userInfo: UserInfoMessage;
}
