<template>
<div>
    <TaglineComponent/>
    <StepComponentVue text="2. Dans quelle école votre enfant est scolarisé ?"/>
    <DropDownComponent :Data="citys" :keyword="ville" :eventHundler="event"/>
    <NextMoveComponent StepNum="2" AllSteps="4" NextStep="/" PrivusStep="/packs"/>
</div>
</template>
<script setup>
import TaglineComponent from '../components/shopping/TaglineComponent.vue';
import StepComponentVue from '../components/shopping/StepComponent.vue';
import NextMoveComponent from '../components/shopping/NextMoveComponent.vue';
import DropDownComponent from '../components/shopping/DropDownComponent.vue';
import { useCurentCity } from '../stors/curntCityStor';
import { onMounted, computed } from "vue";
</script>