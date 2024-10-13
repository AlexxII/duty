<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;

</script>

<template>
  <div>
    {{ id }}
  </div>
</template>
