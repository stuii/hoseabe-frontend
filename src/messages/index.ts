import { Context } from '@/enums/context';
import { MessageResponseStatus } from '@/enums/message-response-status';
import { MessageError, MessageResponse, PlyActions } from '@/interfaces/message';
import { handlePlyMessage } from '@/messages/ply';
import { useWebSocketClient } from '@/services/web-socket-client';

const { connection } = useWebSocketClient();

function handleMessage(message: MessageResponse){
  switch (message.cx){
    case Context.PLY:
      handlePlyMessage(message as MessageResponse<PlyActions>);
      break;
  }
}
function handleError(message: MessageError){
  console.error(message);
}

connection.onmessage = (message) => {
  const data: MessageResponse | MessageError = JSON.parse(message.data);
  switch (data.status){
    case MessageResponseStatus.OK:
      handleMessage(data);
      break;

    case MessageResponseStatus.ERROR:
    default:
      handleError(data);
      break;
  }
};
