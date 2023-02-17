import { MessageResponse, PlyActions } from '@/interfaces/message';
import { LoginMessage } from '@/interfaces/ply-message';
import router from '@/router';
import { useCurrentUserStore } from '@/stores/current-user';

function persistDataToStore(data: LoginMessage) {
  const currentUserStore = useCurrentUserStore();
  currentUserStore.login(data);
}

function setLocalStorage(data: LoginMessage) {
  sessionStorage.setItem('reconnectionToken', data.reconnectionToken);
}

function navigate() {
  router.push({ name: 'lobby' }).catch(() => {});
}


export function loginService(message: MessageResponse<PlyActions, LoginMessage>) {
  persistDataToStore(message.data);
  setLocalStorage(message.data);
  navigate();
}
