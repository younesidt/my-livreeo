<template>
  <div class="">
    <CoponComponent/>
    <NavBarComponent/>
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
