<script setup lang="ts">
import { ref, onUpdated, onMounted, watch, useTemplateRef } from 'vue'
import { uuidv4, getMonths } from '../utils/index.ts';
import { docs } from '../data/documents.ts';

const selected = ref(null);

const treeItems = ref(addHandler(docs));
const filter = ref('')
const filterRef = ref(null)
const months = ref(setAllMonths());
const addDisable = ref(true);
const dialog = ref(false);
const branch = ref('');

function handlerDialog() {
  const parentBrId = selected.value;
  const newBranchStr = branch.value;
  treeItems.value = addBranch(parentBrId, newBranchStr, treeItems.value);
}

function addBranch(parentBranchId, newBranchStr, items) {
  return items.map(item => {
    if (item.id == parentBranchId) {
      return {
        ...item,
        children: item.children ? item.children.push({ id: uuidv4(), label: newBranchStr }) : [{ id: uuidv4(), label: newBranchStr }]
      }
    } else if (item.children) {
      return {
        ...item,
        children: addBranch(parentBranchId, newBranchStr, item.children)
      }
    } else {
      return {
        ...item
      }
    }
  })
}

function addHandler(items) {
  return items.map(item => {
    if (item.children) {
      return {
        ...item,
        children: addHandler(item.children),
        handler: () => handleNodeClick(item)
      }
    }
    return {
      ...item,
      handler: () => handleNodeClick(item)
    }
  })
}

function setAllMonths() {
  let poolOfMonth = [];
  for (let i = 0; i < 12; i++) {
    poolOfMonth.push(getMonths(i));
  }
  return poolOfMonth;
}

function handleNodeClick(node) {
  if (node.root) {
    console.log('root node');
  } else {
    if (selected.value) {
      addDisable.value = false;
    } else {
      addDisable.value = true;
    }
  }
}

function handleSelection() {
  console.log(selected.value);
}

function resetFilter() {
  filter.value = '';
  filterRef.value.focus();
}

</script>

<template>
  <div class="q-pa-md">
    <div class="text-h6">
      Документация
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-5 col-sm-6 col-xs-12">
        <q-card class="q-py-md">
          <div class="q-px-md q-pb-sm row q-gutter-sm" style="justify-content: right">
            <q-btn round outline color="green-4" @click="dialog = true" :disabled="addDisable" size="sm" icon="add" />
            <q-btn round outline color="deep-orange" @click="" :disabled="addDisable" size="sm" icon="delete" />
          </div>
          <!-- <q-input class="q-px-sm" color="brown-8" ref="filterRef" v-model="filter" label="Фильтр">
            <template v-slot:append>
              <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter" />
            </template>
</q-input> -->
          <q-tree class="document-tree" default-expand-all v-model:selected="selected" :filter="filter"
            @update:selected="handleSelection" selected-color="secondary" :nodes="treeItems" node-key="id" />
        </q-card>
      </div>
      <div class="col-lg-9 col-md-7 col-sm-6 col-xs-12">

        <div class="q-px-md docs-filter">
          <ul class="row docs-years q-col-gutter-sm">
            <li>2019</li>
            <li>2020</li>
          </ul>
          <q-separator />
          <ul class="row docs-months q-col-gutter-sm">
            <li v-for="month of months">{{ month }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
            <q-input ref="first-focus" outlined v-model="branch" label="Название" hint="Введите название ветки" />
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="s/n" hint="Введите заводской номер" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="Название" hint="Введите название ветки" />
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="s/n" hint="Введите заводской номер" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="Название" hint="Введите название ветки" />
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="s/n" hint="Введите заводской номер" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="Название" hint="Введите название ветки" />
          </div>
          <div class="col-xs-12 col-md-6">
            <q-input outlined v-model="branch" label="s/n" hint="Введите заводской номер" />
          </div>
        </div>
        <!-- <q-input v-model="phone" label="Phone" mask="+7 ### ###-##-##" hint="Mask: ### ###-##-##" /> -->
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" @click="handlerDialog(selected)" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<style scoped>
.document-tree {
  font-size: 18px;
}

.docs-filter li {
  list-style: none;
}

.docs-filter ul {
  padding: 0;
}

.docs-years li {
  font-size: 16px;
}

.docs-months {
  font-size: 16px;
}
</style>
