<template>
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col items-center justify-center text-dark-blue">
            <div class="w-[86%] flex flex-col items-center pt-12 2xl:pt-16">
                <h1 class="w-full md:w-3/4 text-base md:text-xl text-center font-normal leading-loose pb-4">Pour génèrer les élément de <span class="text-soft-dark-blue font-semibold italic underline">la liste scolaire officielle</span> de votre enfant, nous allons avoir besoin de quelques informations ! </h1>
                <div class="w-full flex flex-col items-start justify-start space-y-5 pt-10">
                    <h3 class="text-sm md:text-lg font-bold pl-4">1. Dans quelle ville habitez vous ?</h3>
                    <!-- DropDown (HeadlesUi) -->
                    <SelectOption
                    placeholder="Select Ville"
                    v-model="city_id" 
                    :options="citys"/>
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-5 pt-10">
                    <h3 class="text-sm md:text-lg font-bold pl-4">2. Dans quelle école votre enfant est scolarisé ?</h3>
                    <SelectOption 
                    placeholder="Select école"
                    v-model="school_id"
                    :city="city_id"
                    :options="schools"/>
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-5 pt-10 pb-44">
                    <h3 class="text-sm md:text-lg font-bold pl-4">3. Quelle est la classe de votre enfant ?</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="w-full md:my-[112px] my-[45px]">
        <div class="container mx-auto max-w-7xl py-4 px-4 md:px-0">
            <div class="w-3/4 flex items-center justify-center m-auto">
                <p class="w-full text-center text-[15px] md:text-[25px] font-normal text-dark-blue">
                    Pour génèrer les élément de <span class="underline text-soft-dark-blue font-semibold italic"> la liste scolaire officielle </span> de votre enfant, nous allons avoir besoin de quelques informations ! 
                </p>
            </div>
            <DropDownCity/>
            <DropDownShoole/>
            <GridMenuClass/>
            <GridMenuLang/>
            <NextMove/>
        </div>
    </div> -->
    <br>
    <br>
    <br>
    <SiteMapComponentVue />
</template>
<script setup>
// import DropDownCity from '../components/shopping/DropDownCity.vue'
// import DropDownShoole from '../components/shopping/DropDownShoole.vue'
// import GridMenuClass from '../components/shopping/GridMenuClass.vue'
// import GridMenuLang from '../components/shopping/GridMenuLangs.vue'
// import NextMove from '../components/shopping/NextMoveComponent.vue'
import SiteMapComponentVue from '../components/SiteMapComponent.vue'
import SelectOption from '../components/SelectOption.vue'
import { ref } from 'vue'

const city_id = ref(null)
const school_id = ref(null)

const citys = [
  { value: 1, label: 'Marrakech' },
  { value: 2, label: 'Agadir' },
  { value: 3, label: 'Tanger' },
  { value: 4, label: 'Fes' },
  { value: 5, label: 'Tetouane' },
  { value: 6, label: 'Casablanca' },
]

const schools = [
  { value: 1, label: 'schoolMarrakech' },
  { value: 2, label: 'schoolAgadir' },
  { value: 3, label: 'schoolTanger' },
  { value: 4, label: 'schoolFes' },
  { value: 5, label: 'schoolTetouane' },
  { value: 6, label: 'schoolCasablanca' },
]



</script>