import { UpdateMessage } from '@/interfaces/lob-message';
import { LobActions, MessageResponse } from '@/interfaces/message';
import { updateService } from '@/messages/lob/update-service';

export function handleLobMessage(message: MessageResponse<LobActions>) {
  switch (message.action) {
    case 'update':
      updateService(message as MessageResponse<LobActions, UpdateMessage>);
      break;
  }
}
