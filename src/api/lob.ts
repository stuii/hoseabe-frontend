import { Context } from '@/enums/context';
import { useWebSocketClient } from '@/services/web-socket-client';

const { connection } = useWebSocketClient();

function send(action: string, data: unknown) {
  connection.send(JSON.stringify({ cx: Context.LOB, action, data }));
}


export function joinLobby(invite: string) {
  const data = { invite };
  send('join', data);
}

export function createLobby(name: string) {
  const data = { name };
  send('create', data);
}
