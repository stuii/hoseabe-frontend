import { Context } from '@/enums/context';
import HttpStatusCode from '@/enums/http-status-code';
import { MessageResponseStatus } from '@/enums/message-response-status';

export type PlyActions = 'login' | 'connect';

export interface MessageResponse<A = unknown, T = unknown> {
  status: MessageResponseStatus.OK;
  code: HttpStatusCode;
  cx: Context;
  action: A;
  message: string;
  data: T;
}

export interface MessageError {
  status: MessageResponseStatus.ERROR;
  code: HttpStatusCode;
  message: string;
}
