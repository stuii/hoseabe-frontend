import { MessageResponse, PlyActions } from '@/interfaces/message';
import { LoginMessage } from '@/interfaces/ply-message';
import { useCurrentUserStore } from '@/stores/current-user';

export function handlePlyMessage(message: MessageResponse<PlyActions>){
  switch (message.action){
    case 'login':
      loginService(message as MessageResponse<PlyActions, LoginMessage>)
      break;
  }
}

function loginService(message: MessageResponse<PlyActions, LoginMessage>){
  const currentUserStore = useCurrentUserStore();
  currentUserStore.login(message.data);
}
