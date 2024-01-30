<template>
<div>
    <TaglineComponent/>
    <StepComponentVue text="2. Dans quelle école votre enfant est scolarisé ?"/>
    <DropDownComponent :Data="shooles" :keyword="shoole" :eventHundler="event"/>
    <NextMoveComponent StepNum="2" AllSteps="4" NextStep="/" PrivusStep="/packs"/>
</div>
</template>
<script setup>
import TaglineComponent from '../components/shopping/TaglineComponent.vue';
import StepComponentVue from '../components/shopping/StepComponent.vue';
import NextMoveComponent from '../components/shopping/NextMoveComponent.vue';
import DropDownComponent from '../components/shopping/DropDownComponent.vue';
import { useCurentShoole } from '../stors/curentShooleSotre';
import { onMounted, computed } from "vue";

const store = useCurentShoole();
const shooles = computed(() => {
  return store.shooles;
});
onMounted(() => {
  store.fetchCitys();
});
const shoole = store.selectedShoole;
const event = (item, index)=>{
  store.selectCity(item, index)
}
</script>