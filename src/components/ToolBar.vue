<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function hasRouteBack() {
  return window.history.state.back ? true : false
}

</script>
<template>
  <div>
    <q-toolbar class="bg-primary glossy text-white">
      <!--<q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <q-avatar>
        <img src="../../public/duty.png">
      </q-avatar>

      <q-toolbar-title>
        <router-link id="logo" to="/">Дежурная служба</router-link>
      </q-toolbar-title>

      <q-btn :to="{ name: 'docs' }" stretch flat label="Документация" />
      <q-separator dark vertical />
      <q-btn :to="{ name: 'todo' }" stretch flat label="TODO" />
      <q-btn :to="{ name: 'mainConfig' }" flat round icon="settings" />
      <q-btn flat round icon="notifications">
        <q-badge floating color="red">2</q-badge>
      </q-btn>
    </q-toolbar>
  </div>
</template>
<style scoped>
a#logo {
  text-decoration: none;
  color: #fff;
}
</style>
