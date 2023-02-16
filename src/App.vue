<template>
  <router-view />
</template>

<script lang="ts" setup>

import { useWebSocketClient } from '@/services/web-socket-client';
import "@/messages";

const {connection} = useWebSocketClient();

connection.onopen = () => {
  console.log('open Connection');
}
</script>
