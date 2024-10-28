<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps(["fireTeam"]);

</script>

<template>
  <div class="q-pl-md text-h6 col-12">Нештатный пожарный расчет</div>
  <div class="q-pa-md row q-gutter-md fireman-card justify-between">
    <q-card v-for="fireman of props.fireTeam" class="col-xs-9 col-sm-4 col-md-3 col-lg-2 my-card">
      <q-card-section>
        <div class="fireman-header text-h6">{{ fireman.surname }} {{fireman.name}}</div>
        <div class="text-subtitle2">{{ fireman.unit }}</div>
        <div class="text">{{ fireman.workPhone }}</div>
        <div class="text">{{ fireman.mobilePhone }}</div>
      </q-card-section>

    </q-card>
  </div>
</template>
<style scoped>
.fireman-card {}

.my-card {
  white-space: nowrap;
}

.fireman-header {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: clamp(12px, 2.5vw, 1.2rem);
}
</style>
