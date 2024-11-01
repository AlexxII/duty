<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(["telnum"]);
const dialog = defineModel();

</script>

<template>
  <div>
    <q-dialog persistent transition-show="scale" backdrop-filter="blur(4px)" transition-hide="scale" v-model="dialog">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 rounded-borders">Форма добавления</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="q-pa-md">
          <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-md-6">
              <q-input ref="first-focus" outlined label="ФИО" hint="Введите ФИО" />
            </div>
            <div class="col-xs-12 col-md-6">
              <q-input v-model="props.telnum" outlined label="Номер телефона" hint="Введите номер телефона" />
            </div>
          </div>
          <!-- <q-input v-model="phone" label="Phone" mask="+7 ### ###-##-##" hint="Mask: ### ###-##-##" /> -->
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" @click="handlerDialog(selected)" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
