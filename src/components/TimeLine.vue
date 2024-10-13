<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps(['events']);
const evnetsPool = props.events;

</script>

<template>
  <div style="">
    <q-timeline color="primary">
      <q-timeline-entry v-for="event of props.events">
        <template v-slot:default>
          {{ event.time }} - {{ event.title }}
        </template>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
