<template>
    <div>
        <HeroSection/>
        <etaps/>
    </div>
    <div class="w-full my-[50px] px-8 absolute">
        <div class="container m-auto  border rounded md:p-8 p-4">
            <etapDescription/>
        </div>
    </div>
</template>
<script setup>
import HeroSection from '../components/prodacts/heroSectionComponent.vue'
import etaps from '../components/prodacts/etaps.vue'
import etapDescription from '../components/prodacts/etapADescriptin.vue'
</script>