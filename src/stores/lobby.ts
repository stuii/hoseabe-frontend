import { Lobby, UpdateMessage } from '@/interfaces/lob-message';
import { defineStore } from 'pinia';

type State = Lobby;

export const useLobbyStore = defineStore('lobby', {
  state: (): State => ({
    inviteCode: '',
    members: [],
    name: '',
    uuid: '',
  }),

  actions: {
    update({ lobby }: UpdateMessage) {
      this.inviteCode = lobby.inviteCode;
      this.members = lobby.members;
      this.name = lobby.name;
      this.uuid = lobby.uuid;
    },
  },
});
