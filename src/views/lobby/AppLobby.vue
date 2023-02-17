<template>
  <v-row>
    <v-spacer />
    <v-col>
      <p>Hello {{ username }}</p>
      <v-text-field v-model="form.invite" label="Lobbycode" />
      <v-btn @click="onJoinLobby">Join Lobby</v-btn>
      <v-btn @click="onCreateLobby">Create Lobby</v-btn>
    </v-col>
    <v-spacer />
  </v-row>
</template>
<script lang="ts" setup>
import { createLobby, joinLobby } from '@/api/lob';
import { useCurrentUserStore } from '@/stores/current-user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const currentUserStore = useCurrentUserStore();
const { username } = storeToRefs(currentUserStore);

const form = ref({
  invite: '',
});

function onJoinLobby() {
  joinLobby(form.value.invite);
}

function onCreateLobby() {
  createLobby('bluub');
}
</script>
