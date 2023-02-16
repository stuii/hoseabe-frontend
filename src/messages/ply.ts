import { MessageResponse, PlyActions } from '@/interfaces/message';


interface LoginMessage {
  username: string;
  reconnectionToken: string;
}

export function handlePlyMessage(message: MessageResponse<PlyActions>){
  switch (message.action){
    case 'login':
      break;
  }
}

function handleLogin(message: MessageResponse<LoginMessage>){

}
