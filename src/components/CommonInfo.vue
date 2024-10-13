<script setup lang="ts">
import { ref } from 'vue'
import DateAndTime from './DateAndTime.vue';

const assistantC = { name: "Христорождественский В.В.", ogvtel: "46-34" };
//const assistantC = { name: "Cоловьев В.В.", ogvtel: "46-34" };
const assistantU = { name: "Орехов В.Р.", ogvtel: "34-89" };

</script>

<template>
  <div class="q-pt-md common-info">
    <DateAndTime class="date-time" />
    <div class="assisatant-wrapper">
      <div>ДПНЦ: {{ assistantC.name }} (АТС-ОГВ: {{ assistantC.ogvtel }})</div>
      <div>ДПНУ: {{ assistantU.name }} (АТС-ОГВ: {{ assistantU.ogvtel }})</div>
    </div>
  </div>
</template>
<style scoped>
.assisatant-wrapper {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}

.date-time {
  font-size: 24px;
  text-align: center;
}

.common-info {
  min-width: 260px;
  padding: 15px 20px 0 20px;
}

@media (max-width: 1440px) {
  .assisatant-wrapper {
    font-size: 16px;
  }

  .date-time {
    font-size: 16px;
  }
}
</style>
