<template>
  <router-view />
</template>

<script lang="ts" setup>

import { reconnect } from '@/api/ply';
import '@/messages';
import { useWebSocketClient } from '@/services/web-socket-client';

const { connection } = useWebSocketClient();

connection.onopen = () => {
  const token = sessionStorage.getItem('reconnectionToken');
  if (token) {
    reconnect(token);
  }
};
</script>
