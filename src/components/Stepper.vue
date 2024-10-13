<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import { fireProcedure } from '../data/index.ts';
import { uuidv4 } from '../utils/index.ts';

const props = defineProps(['steps'])

const step = ref(1);
const max_step = computed(() => {
  return fireProcedure.length;
});

function setFireProcedureEx() {
  return fireProcedure.map((item) => {
    return {
      id: uuidv4(),
      ...item,
      done: false
    }
  })
}

const fireProcedureEx = ref(setFireProcedureEx());

function go_next() {
  if (step == max_step) {
    return;
  } else {
    step.value += 1;
  }
};

function go_back() {
  if (step.value > 1) {
    step.value -= 1;
  }
}

function doneThis(id) {
  fireProcedureEx.value = fireProcedureEx.value.map(item => {
    if (item.id == id) {
      return {
        ...item,
        done: true
      }
    }
    return item;
  })
  step.value += 1;
}

function abortThis(id) {
  fireProcedureEx.value = fireProcedureEx.value.map(item => {
    if (item.id == id) {
      return {
        ...item,
        done: false
      }
    }
    return item;
  })
}

</script>

<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" header-nav animated>
      <q-step v-for="fireStep of fireProcedureEx" :key="fireStep.id" :prefix="fireStep.name" :title="fireStep.title"
        :name="fireStep.name" :done="fireStep.done" class="big-text">
        {{ fireStep.text }}
        <q-expansion-item v-if="fireStep.extra" dense label="Подробнее" style="font-size: 14px; color: #666">
          <q-card>
            <q-card-section>
              <div v-html="fireStep.extra"></div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-stepper-navigation class="q-gutter-sm">
          <q-btn v-if="!fireStep.done" @click="doneThis(fireStep.id)" color="secondary" label="Сделано" />
          <q-btn v-else @click="abortThis(fireStep.id)" color="negative" label="Отмена" />

          <q-btn v-if="step < max_step" @click="go_next" color="primary" label="Далее" />

          <q-btn v-if="step == max_step" @click="step = 0" color="positive" label="Закончить" class="q-ml-sm" />
          <q-btn v-if="step > 1" flat @click="go_back" color="primary" label="Назад" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    </q-stepper>
  </div>
</template>

<style scoped>
.big-text {
  font-size: 18px;
}
</style>
