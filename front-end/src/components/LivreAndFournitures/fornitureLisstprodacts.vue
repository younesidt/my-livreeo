<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex flex-row">
      <div class="w-3/4">
        <div
          class="md:max-h-[400px] max-h-[300px] overflow-y-auto space-y-6 flex flex-col justify-between"
        >
          <div
            v-for="prodact in store.sortedData"
            class="w-full flex flex-row justify-between items-center text-dark-blue"
            @click="selectedProdact = prodact"
          >
            <div class="w-1/5">
              <img
                :src="prodact.image"
                height="50px"
                class="md:w-[100px] w-[50px]"
              />
            </div>
            <p class="w-1/5 text-center font-medium text-[10px] md:text-[18px]">
              {{ prodact.produit }}
            </p>
            <div class="w-1/6">
              <div
                class="flex flex-row px-3 bg-dark-blue text-white-color rounded-full justify-between items-center md:h-[33px] h-[15px] md:w-[125px] w-[55px] text-[10px] md:text-[18px] font-normal"
              >
                <!-- incress  -->
                <button
                  @click="
                    () => {
                      if (prodact.stock > 0) {
                        prodact.cont++;
                        prodact.stock--;
                      }
                      return prodact.cont, prodact.stock;
                    }
                  "
                >
                  +
                </button>

                <p class="">{{ prodact.cont }}</p>
                <!-- decress -->
                <button
                  @click="
                    () => {
                      if (prodact.cont > 0) {
                        prodact.cont--;
                        prodact.stock++;
                      }
                      return prodact.cont, prodact.stock;
                    }
                  "
                >
                  -
                </button>
              </div>
            </div>
            <p class="w-1/5 text-center font-medium text-[10px] md:text-[18px]">
              {{ prodact.prix * prodact.cont }} MAD
            </p>
            <div class="px-4 w-1/7">
                <input
                @change="addToCard(prodact)"
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 w-1/4 flex flex-col items-start text-[#5A7BA0]">
        <img
          v-if="selectedProdact != null"
          :src="selectedProdact.image"
          class="w-full"
          alt=""
        />
        <p
          class="py-4 w-full font-medium md:text-[22px]"
          v-if="selectedProdact != null"
        >
          {{ selectedProdact.produit }}
        </p>
      </div>
    </div>
    <div
      class="w-full flex items-center justify-between pt-8 md:pl-10 pl-5 md:pr-52 pr-0"
    >
      <div>
        <h3 class="md:text-base text-sm font-semibold text-dark-blue">
          TOTAL = 1 080.00 DHS
        </h3>
      </div>
      <div>
        <button
          :class="
            checkedItems.length === 0
              ? 'cursor-default pointer-events-none opacity-50'
              : ''
          "
          class="bg-dark-blue text-white-color md:text-base text-sm font-semibold rounded-full py-3 md:px-5 px-4"
        >
          Ajouter au panier ({{ checkedItems.length }} articles)
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import { useFuornitureStore } from "../../stors/fournitureStepStore";

const store = useFuornitureStore();
store.fetchProdacts();
// onMounted(() => {
//     store.fetchProdacts()
// }),

const selectedProdact = null;
let prodactselected = [];
function addToCart(item) {
  prodactselected.push(item);
  return prodactselected;
}
const checkedItems = ref([]);

function addToCard(item) {
  const index = checkedItems.value.findIndex(i => i.id === item.id);
  if (index !== -1) {
    // Item already exists in the array, remove it
    checkedItems.value.splice(index, 1);
    store.cart = checkedItems;
  } else {
    // Item doesn't exist in the array, add it
    checkedItems.value.push(item);
    store.cart = checkedItems;
  }
}
// store.filterByCategory("Cartable");
// let dataShows  = store.prodactsByCatigory.store.selectedcatigory
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f0f0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6192bf;
  border-radius: 5px;
}
</style>
