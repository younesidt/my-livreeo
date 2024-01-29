<template>
    <TaglineComponent/>
    <StepComponentVue text="1. Dans quelle ville habitez vous ?"/>
    <DropDownComponent/>
    <NextMoveComponent StepNum="1" AllSteps="4" NextStep="/" PrivusStep="/packs"/>
</template>
<script setup>
import TaglineComponent from '../components/shopping/TaglineComponent.vue';
import StepComponentVue from '../components/shopping/StepComponent.vue';
import NextMoveComponent from '../components/shopping/NextMoveComponent.vue';
import DropDownComponent from '../components/shopping/DropDownComponent.vue';
</script>