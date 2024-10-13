<script setup lang="ts">
import { ref } from 'vue';
import { fireProcedure } from '../data/fireProcedure.ts';
import { uuidv4, getCurrentTime } from '../utils/index.ts';
import Stepper from '../components/Stepper.vue';
import TimeLine from '../components/TimeLine.vue';

const initEvent = {
  id: uuidv4(),
  time: getCurrentTime(new Date()),
  title: "Поступление сигнала"
}

const stepsData = ref(setPropsData());
const step = ref(1);
const eventsPool = ref([
  initEvent
]);

function setPropsData() {
  return fireProcedure.map((item) => {
    return {
      id: uuidv4(),
      ...item,
      done: false
    }
  })
};

function doneThis(id: string, flag: boolean): void {
  let title = "";
  stepsData.value = stepsData.value.map(item => {
    if (item.id == id) {
      title = item.logTitle;
      return {
        ...item,
        done: flag
      }
    }
    return item;
  })
  if (flag) {
    eventsPool.value.push({
      id,
      time: getCurrentTime(new Date),
      title
    })
  } else {
    eventsPool.value = eventsPool.value.filter(item => item.id != id)
  }
  step.value += 1;
};

function updateStep(flag: boolean) {
  if (flag) {
    step.value += 1;
  } else {
    step.value -= 1;
  }
}

</script>
<template>
  <div class="row">
    <div class="col-9">
      <Stepper @update-step="updateStep" @step-handler="doneThis" v-model="step" :steps="stepsData" />
    </div>
    <div class="col-3">
      <TimeLine :events='eventsPool' />
    </div>
  </div>
</template>
