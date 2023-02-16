import { useWebSocketClient } from '@/services/web-socket-client';

const cx = 'ply';
const {connection} = useWebSocketClient();

function send(object: Object){
  connection.send(JSON.stringify(object));
}

export function login(username: string){
  const data = { username };

  send({cx, action: 'login', data});
}

