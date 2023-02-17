import { MessageResponse, PlyActions } from '@/interfaces/message';
import { ReconnectionMessage } from '@/interfaces/ply-message';
import { loginService } from '@/messages/ply/login-service';

export function reconnectService(message: MessageResponse<PlyActions, ReconnectionMessage>) {
  loginService(message);
}
