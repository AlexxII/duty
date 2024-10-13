<script setup>
import { ref } from 'vue';
import { directives } from '../data/directives.ts';
import { useRouter } from 'vue-router';

const router = useRouter();

function goTo(url) {
  if (router.hasRoute(url))
    router.push({ name: url });
}

</script>
<template>
  <div class="q-pa-md row q-gutter-xl home-view">
    <div v-ripple v-for="drct of directives" :key="drct.id" @click="goTo(drct.url)" class="box row direct-card">
      <q-card-section>
        {{ drct.title }}
      </q-card-section>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  justify-content: space-evenly;
}

.box {
  background-color: #f4f4f6;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.box::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.box:hover {
  -webkit-transform: scale(1.10, 1.10);
  transform: scale(1.10, 1.10);
  cursor: pointer;
}

.box:hover::after {
  opacity: 1;
}

.direct-card {
  width: 200px;
  height: 200px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
