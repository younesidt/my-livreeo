<template>
  <div class="font-Poppins">
    <div class="sticky right-0 left-0 z-40 top-0">
      <CoponComponent/>
      <NavBarComponent/>
    </div>
    <router-view />
  </div>
</template>

<script setup>

import { RouterView } from 'vue-router';
import NavBarComponent from './components/NavBarComponent.vue';
import CoponComponent from './components/home/CoponComponent.vue';
</script>

<style scoped>

</style>
