<template>
    <div class="flex items-center justify-center px-44">
       <!-- <select class="text-dark-blue cursor-pointer text-opacity-40 text-lg font-medium py-6 w-[70%] px-8 outline-0 bg-[#DEEFF9] rounded-full flex items-center justify-between">
            <option>Casablanca</option>
        </select> -->
    <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" class="py-6 w-[70%] px-8 outline-0 bg-[#DEEFF9] rounded-full flex items-center justify-between" type="button">
        <span class="text-dark-blue text-lg font-medium text-opacity-40">{{ city.selectedCity.length === 0 ? 'Ville' : city.selectedCity }}</span> 
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none"><path d="M1 1L11 11" stroke="#6192BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 1L11 11" stroke="#6192BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

    </button>

    <!-- Dropdown menu -->
    <div id="dropdownSearch" class="z-10 hidden bg-[#DEEFF9] rounded-xl shadow w-[45%]">
        <div class="p-3">
          <label for="input-group-search" class="sr-only">Trouver une ville</label>
          <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="input-group-search" class="block w-full p-2 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trouver une Ville">
          </div>
        </div>
        <ul class="h-48 px-3 pb-3 overflow-y-auto text-lg text-gray-700" aria-labelledby="dropdownSearchButton">
          <li v-for="ville in city.citys" :key="ville.id">
            <div class="flex items-center ps-2  rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label 
              for="checkbox-item-11" 
              class="w-full py-2 ms-2 text-lg font-medium text-dark-blue cursor-pointer rounded" 
              @click="selectCity(ville)">
              {{ ville.ville }}
              </label>
            </div>
          </li>
        </ul>
    </div>

    </div>
</template>
<script setup>

import { ref } from 'vue';
import { useCurentCity } from '../../stors/curntCityStor';
import { initFlowbite } from 'flowbite'


const city = useCurentCity();
const selectedCity = ref('');

const selectCity = (selectedCity) => {
    // Update the selectedCity value and close the dropdown or perform any other action
    selectedCity.value = selectedCity.ville;
    city.selectedCity = selectedCity.ville;
    console.log(city.selectedCity);
};


const props = defineProps({
    Data:{
        type: Array,
        default:[],
    },
    keyword:{
        type:String,
        default:'',
    },
    eventHundler:{
        type:Function,
    }
});

</script>

<style scoped>

</style>

