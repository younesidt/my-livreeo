<template>
    <div class="md:py-8 md:px-16 px-8 py-4 mb-4 rounded-3xl bg-[#F0F9FF] flex md:flex-row flex-col items-center">
        <div class="w-full md:w-1/4 text-dark-blue font-medium text-[35px] pb-4">
            Filtre
        </div>
      
        <div
          class="grid grid-cols-2 items-start md:grid-cols-4 gap-4 text-dark-blue w-full md:w-3/4"
        >
          <div>
            <p class="pb-2  mb-2 text-[22px] font-medium">Meilleurs ventes </p>
            <div
              class="flex items-center mb-4" 
              
            >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-dark-blue bg-none border-dark-blue rounded focus:ring-darke-blue focus:ring-2 dark:border-dark-blue"
                v-model="sortByPriceAsc"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-[17px] font-medium text-gray-900 dark:text-gray-300"
                >Prix croissant </label>
            </div>
            <div
              class="flex items-center mb-4" 
              
            >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-dark-blue bg-none border-dark-blue rounded focus:ring-darke-blue focus:ring-2 dark:border-dark-blue"
                v-model="sortByPriceDesc"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-[17px] font-medium text-gray-900 dark:text-gray-300"
                >Prix decroissant   </label>
            </div>
            <div
              class="flex items-center mb-4" 
              
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
                >Note des clients </label>
            </div>
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
import { ref, computed } from 'vue';

const sortByPriceAsc = ref(false);
const sortByPriceDesc = ref(false);

const store = useFuornitureStore();
store.fetchProdacts();

store.sortedData = computed(() => {
  let sortedArray = [...store.prodacts];
  if (sortByPriceAsc.value) {
    sortedArray = sortData(sortedArray, 'asc');
  }
  if (sortByPriceDesc.value) {
    sortedArray = sortData(sortedArray, 'desc');
  }
  return sortedArray;
});


function sortData(data, order) {
  return data.sort((a, b) => {
    const priceA = parseFloat(a.prix);
    const priceB = parseFloat(b.prix);
    return order === 'asc' ? priceA - priceB : priceB - priceA;
  });
}
</script>