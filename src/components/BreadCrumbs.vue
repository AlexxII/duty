<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const homeRoute = {
  label: "Главная",
  to: "/",
  icon: "home"
}

// label: routeItem.meta.breadcrumb,
// to: getRoutePath(route, routeItem),
// icon: routeItem.meta.icon
const breadcrumbs = computed(() => {
  const matchedRoutes = route.matched;

  const q = matchedRoutes.reduce((ac, routeItem) => {
    if (routeItem.meta.show) {
      ac.push(homeRoute)
    }
    return ac;
  }, []);
  return q;
})

function getRoutePath(route, routeItem) {
  const matchedSegments = route.matched.slice(0, route.matched.indexOf(routeItem) + 1);
  return matchedSegments.map((segment) => segment.path).join('/');
}

</script>
<template>
  <div class="q-pl-md">
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el v-for="crumb of breadcrumbs" :label=crumb.label :to=crumb.to :icon="crumb.icon" />
    </q-breadcrumbs>
  </div>
</template>
