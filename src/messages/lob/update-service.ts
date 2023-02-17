import { UpdateMessage } from '@/interfaces/lob-message';
import { LobActions, MessageResponse } from '@/interfaces/message';
import router from '@/router';
import { useLobbyStore } from '@/stores/lobby';

export function updateService(message: MessageResponse<LobActions, UpdateMessage>) {
  persistDataToStore(message.data);
  navigate();
}

function persistDataToStore(data: UpdateMessage) {
  const lobbyStore = useLobbyStore();
  lobbyStore.update(data);
}

function navigate() {
  router.push({ name: 'lobby-waiting' }).catch(() => {});
}
