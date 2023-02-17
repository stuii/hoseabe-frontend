export interface LoginMessage {
  username: string;
  reconnectionToken: string;
}

export type ReconnectionMessage = LoginMessage;
