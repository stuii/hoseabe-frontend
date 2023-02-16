<template>
  <v-row>
    <v-spacer />
    <v-col>
      <v-form @submit.prevent="onSubmit">
        <v-text-field name="username" v-model="form.username"/>
        <v-btn type="submit">Login</v-btn>
      </v-form>
    </v-col>
    <v-spacer />
  </v-row>
</template>
<script lang="ts" setup>

import { login } from '@/api/ply';
import { reactive } from 'vue';

const form = reactive({
  username: '',
})

function onSubmit(){
  login(form.username);
}
</script>
