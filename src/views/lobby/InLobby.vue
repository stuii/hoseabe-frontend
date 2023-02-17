<template>
  <v-row>
    <v-spacer />
    <v-col>
      <p>Name: {{ name }}</p>
      <p>Invite: {{ inviteCode }}</p>
      <v-list>
        <v-list-item v-for="member in members" :key="member.username">
          {{ member.username }} [{{ member.role }}]
        </v-list-item>
      </v-list>
    </v-col>
    <v-spacer />
  </v-row>
</template>
<script lang="ts" setup>
import { useLobbyStore } from '@/stores/lobby';
import { storeToRefs } from 'pinia';

// const currentUserStore = useCurrentUserStore();
const lobbyStore = useLobbyStore();
const { inviteCode, members, name } = storeToRefs(lobbyStore);

</script>
