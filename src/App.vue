<script setup lang="ts">
import { ref } from "vue"
import ToolBar from './components/ToolBar.vue';
import Contacts from './components/Contacts.vue';
import StaffRate from './components/StaffRate.vue';
import CommonInfo from './components/CommonInfo.vue';
import BreadCrumbs from './components/BreadCrumbs.vue';

const text = ref("");
</script>

<template>
  <div class="main-wrapper">
    <ToolBar class="main-toolbar" />
    <Contacts class="contacts" />
    <BreadCrumbs class="bread" />
    <CommonInfo class="common-info" />
    <StaffRate class="staff-rate" />

    <div class='main-route'>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: grid;
  grid-template-rows: 50px 100px 30px 320px auto;
  grid-template-columns: 1fr auto auto;
}

.main-toolbar {
  grid-row: 1/2;
  grid-column: 1/4;
}

.contacts {
  grid-row: 2/3;
  grid-column: 1/2;
}

.bread {
  grid-row: 3/4;
  grid-column: 1/4;
}

.common-info {
  grid-row: 2/3;
  grid-column: 2/4;
}

.staff-rate {
  grid-row: 4/6;
  grid-column: 3/4;
}

.main-route {
  grid-row: 4/6;
  grid-column: 1/3;
}

@media (max-width: 1440px) {
  .main-wrapper {
    grid-template-rows: 50px 100px 20px 160px auto;
  }

  .staff-rate {
    grid-row: 4/5;
    grid-column: 1/4;
  }

  .main-route {
    grid-row: 5/6;
    grid-column: 1/4;
  }
}
</style>
