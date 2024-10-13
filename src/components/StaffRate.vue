<script setup>
import { ref } from 'vue';

import { rateList } from '../data/rate.ts';

</script>
<template>
  <div class="q-pa-md stuff-rate">
    <q-card class="my-card" bordered>
      <q-item>

        <q-item-section>
          <q-item-label style="font-size: 22px">Расход</q-item-label>
          <q-item-label caption>
            12 октября 2024 г.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section>
        <div class="row rate-wrapper">
          <div v-for="rate of rateList" class="col-lg-12 row rate-list-wrapper">
            <div class="col-12 col-lg-8 ">{{ rate.title }}</div>
            <div class="rate-num col-12 col-lg-4 ">....</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped>
.rate-title {
  text-align: right;
}

.stuff-rate {
  width: 280px;
}

.rate-wrapper {
  justify-content: space-between;
}

.rate-num {
  text-align: right;
}

.rate-list-wrapper {
  font-size: 18px;
  justify-content: space-between;
}

@media (max-width: 1440px) {
  .rate-list-wrapper {
    font-size: 14px;
    text-align: center;
  }

  .stuff-rate {
    width: 100%;
    min-width: 660px;
  }

  .rate-num {
    text-align: center;
  }
}
</style>
