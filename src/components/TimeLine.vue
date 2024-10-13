<script setup lang="ts">
import { ref } from 'vue'

const eventsPool = [
  { title: 'test', subtitle: "Получение сигнала", },
  { title: 'test', subtitle: "Направлен дежурный" },
  { title: 'test', subtitle: "Обнаружение возгорания" },
];

</script>

<template>
  <div style="">
    <q-timeline color="primary">
      <q-timeline-entry v-for="event of eventsPool">
        <template v-slot:default>
          {{ event.title }}
          {{ event.subtitle }}
        </template>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
