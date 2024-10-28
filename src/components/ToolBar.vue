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
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title>Дежурная служба</q-toolbar-title>

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
