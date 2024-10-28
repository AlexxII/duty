<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import AmodeView from '../views/AmodeView.vue';
import BmodeView from '../views/BmodeView.vue';
import CmodeView from '../views/CmodeView.vue';

const route = useRoute();
const tab = ref('amode');

const id = route.params.id;

</script>

<template>
  <div class="q-pa-md">
    <q-tabs v-model="tab" align="justify" narrow-indicator dense class="bg-grey-2 text-grey-7" active-color="primary"
      indicator-color="purple">
      <q-tab name="amode" label="Режим-А" />
      <q-tab name="bmode" label="Режим-Б" />
      <q-tab name="cmode" label="Режим-В" />
      <q-separator />
    </q-tabs>
    <div>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="amode">
          <AmodeView />
        </q-tab-panel>

        <q-tab-panel name="bmode">
          <BmodeView />
        </q-tab-panel>

        <q-tab-panel name="cmode">
          <CmodeView />
        </q-tab-panel>
      </q-tab-panels>

    </div>
  </div>
</template>
