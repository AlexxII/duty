<script setup lang="ts">
import { ref, onBeforeUnmount, computed } from 'vue'
import { getDayOfWeek } from '../utils';

const date = ref(new Date());
const dateE = ref(new Date());

const currentDate = computed(() => {
  const year = dateE.value.getFullYear().toString().padStart(2, 0),
    month = (dateE.value.getMonth() + 1).toString().padStart(2, 0),
    day = dateE.value.getDate().toString().padStart(2, 0);
  const dayOfWeek = getDayOfWeek(dateE.value.getDay());
  return `${dayOfWeek} ${day}.${month}.${year}`
})

const currentTime = computed(() => {
  const hour = date.value.getHours().toString().padStart(2, 0),
    minutes = date.value.getMinutes().toString().padStart(2, 0),
    seconds = date.value.getSeconds().toString().padStart(2, 0);
  return `${hour}:${minutes}:${seconds}`;
});

const intervalDate = setInterval(() => {
  dateE.value = new Date();
}, 60 * 1000);
const intervalTime = setInterval(() => {
  date.value = new Date();
}, 1000)

onBeforeUnmount(() => {
  clearInterval(intervalDate);
  clearInterval(intervalTime);
})

</script>

<template>
  <div class="main-clock">
    <span> {{ currentTime }} </span> <span> {{ currentDate }}</span>
  </div>
</template>

