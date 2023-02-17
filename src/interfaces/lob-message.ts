import { MemberRole } from '@/enums/member-role';

interface Member {
  joinTime: string;
  role: MemberRole;
  username: string;
}

export interface Lobby {
  inviteCode: string;
  members: Member[];
  name: string;
  uuid: string;
}

export interface UpdateMessage {
  lobby: Lobby;
}
