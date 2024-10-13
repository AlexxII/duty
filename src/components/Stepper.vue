<script setup lang="ts">
import { ref, defineModel, reactive, computed, defineProps, defineEmits } from 'vue'
const props = defineProps(['steps', 'step'])
const emit = defineEmits(['stepHandler', 'updateStep'])
const anim = ref(true);

const stepp = defineModel();
const max_step = computed(() => {
  return props.steps.length;
});

function go_next() {
  if (stepp == max_step) {
    return;
  } else {
    emit('updateStep', true);
  }
};

function go_back() {
  if (stepp.value > 1) {
    emit('updateStep', false);
  }
}

function completeStepper(id) {
  emit('stepHandler', id, true);
}

function clickDone(id, flag) {
  emit('stepHandler', id, flag)
}
</script>

<template>
  <div class="q-pa-md">
    <q-stepper v-model="stepp" vertical color="primary" header-nav :animated=anim>
      <q-step :ripple="false" v-for="step of props.steps" :key="step.id" :prefix="step.name" :title="step.title"
        :name="step.name" :done="step.done" class="big-text">
        {{ step.text }}
        <q-expansion-item v-if="step.extra" dense label="Подробнее" style="font-size: 14px; color: #666">
          <q-card>
            <q-card-section>
              <div v-html="step.extra"></div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-stepper-navigation class="q-gutter-sm">
          <q-btn v-if="!step.done && stepp < max_step" @click="clickDone(step.id, true)" color="secondary"
            label="Сделано" />
          <q-btn v-else-if="stepp < max_step" @click="clickDone(step.id, false)" color="negative" label="Отмена" />

          <q-btn v-if="stepp < max_step" @click="go_next" color="primary" label="Далее" />

          <q-btn v-if="stepp == max_step" @click="completeStepper(step.id)" color="positive" label="Закончить"
            class="q-ml-sm" />
          <q-btn v-if="stepp > 1" flat @click="go_back" color="primary" label="Назад" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    </q-stepper>
  </div>
</template>

<style scoped>
.big-text {
  font-size: 16px;
}
</style>
