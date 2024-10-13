<script setup>
import { fireProcedure } from '../data/fireProcedure.ts';
import Stepper from '../components/Stepper.vue';
import TimeLine from '../components/TimeLine.vue';

</script>
<template>
  <div class="row">
    <div class="col-9">
      <Stepper />
    </div>
    <div class="col-3">
      <TimeLine />
    </div>
  </div>
</template>
