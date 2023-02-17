<template>
  <v-row>
    <v-spacer />
    <v-col>
      <p>Hello {{ username }}</p>
      <v-row align="center">
        <v-col>
          <v-text-field
            v-model="form.invite"
            density="comfortable"
            hide-details
            label="Lobbycode"
            persistent-placeholder
            variant="outlined"
          />
        </v-col>
        <v-col>
          <v-btn color="primary" variant="flat" @click="onJoinLobby">Join Lobby</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="secondary" variant="flat" @click="onCreateLobby">Create Lobby</v-btn>
        </v-col>
      </v-row>
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
