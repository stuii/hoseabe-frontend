import { LoginMessage } from '@/interfaces/ply-message';
import { defineStore } from 'pinia';
interface State {
  username: string | null;
  reconnectionToken: string | null;
}

export const useCurrentUserStore = defineStore('currentUser', {
  state: (): State => ({
    username: null,
    reconnectionToken: null,
  }),

  actions: {
    login(data: LoginMessage){
      this.username = data.username;
      this.reconnectionToken = data.reconnectionToken;
    }
  }
})
