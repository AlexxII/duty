<script setup lang="ts">
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h4">Rows Tests</div>
    <div class="q-pa-md hid gt-xs">Hide div</div>
    <div class="row container">
      <div class="first col-12 col-sm-6"> ccol-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6
        col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6
        col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6 col-6
        col-6 ol-6 col-6 </div>
      <div class="details col-12 col-sm-2">col-1</div>
      <div class="details col-12 col-sm-2">col-2</div>
      <div class="details col-12 col-sm-2">col-3</div>
    </div>


  </div>
  <div class="q-pa-xl container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>

</template>

<style scoped>
.first {
  background-color: red;
  color: white;
  border: 1px solid black;
}

.hid {
  background-color: blue;
  border: 1px solid green;
}

.details {
  background-color: lightblue;
  border: 1px solid black;
}

.container {
  display: flex;
}

.container .item {
  border-radius: 3px;
  background-color: #A2CBFA;
  border: 1px solid #4390E1;
  box-shadow:
    0 2px 2px rgba(0, 90, 250, 0.05),
    0 4px 4px rgba(0, 90, 250, 0.05),
    0 8px 8px rgba(0, 90, 250, 0.05),
    0 16px 16px rgba(0, 90, 250, 0.05);
}

.item {
  flex-grow: 1;
  height: 100px;
}

.item+.item {
  margin-left: 2%;
}
</style>
