<script setup lang="ts">
import { ref } from 'vue'


</script>

<template>
  <div>
    <q-expansion-item dense icon="perm_identity" label="Account settings">
      <template v-slot:header>
        <div class="row items-center">
          <div class="text-h6">
            Режим-А
          </div>
        </div>
      </template>
      <div class="q-pa-md">
        Режим-А (Аметист) является повседневным.
      </div>
      <q-card>
        <q-card-section>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>
