import { Context } from '@/enums/context';
import { PlyActions } from '@/interfaces/message';
import { useWebSocketClient } from '@/services/web-socket-client';

const { connection } = useWebSocketClient();

function send(action: PlyActions, data: Record<string, unknown>) {
  connection.send(JSON.stringify({ cx: Context.PLY, action, data }));
}

export function login(username: string) {
  const data = { username };

  send('login', data);
}

export function reconnect(reconnectToken: string) {
  const data = { reconnectToken };

  send('reconnect', data);
}
