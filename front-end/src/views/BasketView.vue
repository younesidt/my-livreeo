<template>
    <div class=" bg-white-blue">
        <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col items-center justify-center text-dark-blue">
            <div class="w-[86%] flex flex-col pt-6 2xl:pt-8">
                <div>
                    <router-link to="/Fourniture" class="w-full flex items-center md:justify-center">
                    <img src="../assets/back.svg">
                    </router-link>
                </div>
                <div class="w-full flex flex-col md:flex-row justify-between items-start my-8">
                    <leftColom/>
                    <rightColom/>
                </div>
            </div>
        </div>
    </div>
    </div>
    <SiteMapComponentVue/>
</template>
<script setup>
import rightColom from '../components/basket/rightColomComponent.vue'
import leftColom from '../components/basket/leftColomComponent.vue'
import SiteMapComponentVue from '../components/SiteMapComponent.vue'
</script>