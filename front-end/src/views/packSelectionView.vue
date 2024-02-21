<template>
    <div class="w-full md:my-[112px] my-[45px]">
        <div class="container mx-auto max-w-7xl py-4 px-4 md:px-0">
            <div class="w-3/4 flex items-center justify-center m-auto">
                <p class="w-full text-center text-[15px] md:text-[25px] font-normal text-dark-blue">
                    Pour génèrer les élément de <span class="underline text-soft-dark-blue font-semibold italic"> la liste scolaire officielle </span> de votre enfant, nous allons avoir besoin de quelques informations ! 
                </p>
            </div>
            <DropDownCity/>
            <DropDownShoole/>
            <GridMenuClass/>
            <NextMove/>
        </div>
    </div>
    <SiteMapComponentVue />
</template>
<script setup>
import DropDownCity from '../components/shopping/DropDownCity.vue'
import DropDownShoole from '../components/shopping/DropDownShoole.vue'
import GridMenuClass from '../components/shopping/GridMenuClass.vue'
import NextMove from '../components/shopping/NextMoveComponent.vue'
import SiteMapComponentVue from '../components/SiteMapComponent.vue'
</script>