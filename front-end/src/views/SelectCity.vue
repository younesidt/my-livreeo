<template>
    <div class="w-full container space-y-16">
        <TaglineComponent/>
        <div class="space-y-8">
            <StepComponentVue text="1. Dans quelle ville habitez vous ?"/>
            <DropDownComponent/>
        </div>
        <NextMoveComponent StepNum="1" AllSteps="4" NextStep="/" PrivusStep="/packs"/>
    </div>
</template>
<script setup>
import TaglineComponent from '../components/shopping/TaglineComponent.vue';
import StepComponentVue from '../components/shopping/StepComponent.vue';
import NextMoveComponent from '../components/shopping/NextMoveComponent.vue';
import DropDownComponent from '../components/shopping/DropDownComponent.vue';
import { useCurentCity } from '../stors/curntCityStor';
import { onMounted, computed } from "vue";

const store = useCurentCity();
const citys = computed(() => {
  return store.citys;
});
onMounted(() => {
  store.fetchCitys();
});
const ville = 'ville';
const event = store.selectCity()
</script>