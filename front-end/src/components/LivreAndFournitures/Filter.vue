<template>
    <div class="md:py-8 md:px-16 px-8 py-4 mb-4 rounded-3xl bg-[#F0F9FF] flex md:flex-row flex-col items-center">
        <div class="w-full md:w-1/4 text-dark-blue font-medium text-[35px] pb-4">
            Filtre
        </div>
      
        <div
          class="grid grid-cols-2 items-start md:grid-cols-4 gap-4 text-dark-blue w-full md:w-3/4"
        >
          <div>
            <p class="pb-2  mb-2 text-[22px] font-medium">Categories</p>
            <div
              class="flex items-center mb-4" v-for="category in store.categorys"
              
            >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-dark-blue bg-none border-dark-blue rounded focus:ring-darke-blue focus:ring-2 dark:border-dark-blue"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-[17px] font-medium text-gray-900 dark:text-gray-300"
                >{{ category }}</label
              >
            </div>
            <button @click="store.sortByPrice(store.prodacts, 'asc')">click me </button>
          </div>
          <div>
            <p class="pb-2  mb-2 text-[22px] font-medium">Categories</p>
            <div
              class="flex items-center mb-4" v-for="category in store.categorys"
              
            >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-dark-blue bg-none border-dark-blue rounded focus:ring-darke-blue focus:ring-2 dark:border-dark-blue"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-[17px] font-medium text-gray-900 dark:text-gray-300"
                >{{ category }}</label
              >
            </div>
          </div>
          <div class="pb-2  mb-2 text-[22px] font-medium" >colors</div>
          <div>
            <label
              for="default-range"
              class="block mb-2 text-[22px] font-medium "
              >prix</label
            >
            <input
              id="default-range"
              type="range"
              value="50"
              class="w-full h-2 bg-dark-blue rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
        </div>
</template>
<script setup>
import { useFuornitureStore } from "../../stors/fournitureStepStore";
const store = useFuornitureStore();
store.fetchProdacts();
</script>