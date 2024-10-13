<script setup>
import { ref, computed, watch } from 'vue'
import people from '../data/index.ts';
import { getName, getPhone, getMobilePhone, isEmpty } from '../utils/index.ts';

const peoples = people.map(item => {
  return {
    id: item.id,
    name: getName(item.lastName, item.firstName, item.patronymic),
    ogvtel: getPhone(item.atsOgvPhone),
    ptstel: getPhone(item.ptsPhone),
    gtstel: getPhone(item.homePhone),
    mobile: getMobilePhone(item.mobilePhone)
  }
})

const model = ref(peoples);
const selectedContacts = ref([]);
const showDetails = ref(false);

function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLocaleLowerCase()
    model.value = peoples.filter(v => {
      const textOne = v.name.toLowerCase()
      const textTwo = v.ogvtel.join(" ").toLowerCase()
      const textThree = v.ptstel.join(" ").toLowerCase()
      const textFour = v.mobile.toLowerCase()
      const textFifth = v.gtstel.join(" ").toLowerCase()
      return textOne.indexOf(needle) > -1
        || textTwo.indexOf(needle) > -1
        || textThree.indexOf(needle) > -1
        || textFour.indexOf(needle) > -1
        || textFifth.indexOf(needle) > -1
    })
  })
}

function handleAdd(item, selected) {
  if (!selected) {
    showDetails.value = true;
    selectedContacts.value.push(item);
  } else {
    selectedContacts.value = selectedContacts.value.filter(v => v.id != item.id)
  }
}

// для отображения клавиши Подробно
watch(selectedContacts, () => {
  if (selectedContacts.value != undefined && !isEmpty(selectedContacts.value)) {
    showDetails.value = true;
  } else {
    showDetails.value = false;
  }
})

function clearAll() {
  selectedContacts.value = [];
}

function handleRemove(item) {
  selectedContacts.value = selectedContacts.value.filter(v => v.id != item.id)
}

</script>

<template>
  <div class="q-pa-md">
    <q-select outlined :clearable="false" v-model="selectedContacts" multiple use-input fill-input :options="model"
      use-chips label="Контакты" @filter="filterFn" hint="" input-debounce="0" @clear="clearAll">

      <template v-if="selectedContacts.length" v-slot:append>
        <q-icon name="cancel" @click.stop.prevent="clearAll" class="cursor-pointer" />
      </template>

      <template #before-options>
        <div class="q-pa-sm row gt-xs phones-header">
          <div class="col-12 col-sm-6"></div>
          <div class="col col-sm-2">АТС-ОГВ</div>
          <div class="col col-sm-2">ПТС</div>
          <div class="col col-sm-2">ГТС</div>
        </div>
      </template>

      <template #option="{ opt, selected }">
        <q-item :active="selected" active-class="bg-grey-3 text-grey-8" clickable @click="handleAdd(opt, selected)">
          <q-item-section>
            <div class="row" style="height: 80px">
              <div class="name-details col-12 col-sm-6">
                <div class="contact-name col-12">{{ opt.name }}</div>
                <div class="contact-mobile gt-xs col-12">мобильный: {{ opt.mobile }}</div>
              </div>
              <div class="details col-12 gt-xs col-sm-2">
                <div class="col-12" v-for="tel in opt.ogvtel">
                  {{ tel }}
                </div>
              </div>
              <div class="details col-12 gt-xs col-sm-2">
                <div class="col-12" v-for="tel in opt.ptstel">
                  {{ tel }}
                </div>
              </div>
              <div class="details col-12 gt-xs col-sm-2">
                <div class="col-12" v-for="tel in opt.gtstel">
                  {{ tel }}
                </div>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </template>

      <template #after>
        <q-btn color="primary" :disabled="!showDetails">Подробно</q-btn>
      </template>

      <template #selected-item="{ opt }">
        <q-chip removable @remove="handleRemove(opt)">
          {{ opt.name }}
        </q-chip>
      </template>

      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            Нет данных
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<style scoped>
.details {
  text-align: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
}

.phones-header {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid grey;
}

.name-details {
  align-items: center;
  font-size: 22px;
}

.contact-name {
  font-weight: 800;
}

.contact-mobile {
  color: gray;
}
</style>
