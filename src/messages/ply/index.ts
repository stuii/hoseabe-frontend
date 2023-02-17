import { MessageResponse, PlyActions } from '@/interfaces/message';
import { LoginMessage, ReconnectionMessage } from '@/interfaces/ply-message';
import { loginService } from '@/messages/ply/login-service';
import { reconnectService } from '@/messages/ply/reconnect-service';

export function handlePlyMessage(message: MessageResponse<PlyActions>) {
  switch (message.action) {
    case 'login':
      loginService(message as MessageResponse<PlyActions, LoginMessage>);
      break;
    case 'reconnect':
      reconnectService(message as MessageResponse<PlyActions, ReconnectionMessage>);
      break;
  }
}
