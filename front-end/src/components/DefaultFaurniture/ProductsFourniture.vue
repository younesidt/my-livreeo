<template>
    <div class="w-full flex flex-col items-center justify-center space-y-10 text-dark-blue">
      <div class="w-full border-2 px-2 sm:px-4 py-2 sm:py-4 rounded-[35px] sm:rounded-[40px] lg:rounded-[60px] border-dark-blue border-opacity-20">
        <div class="bg-[#F0F9FF] flex w-full pt-12 pb-10 items-start justify-start rounded-[40px] space-x-24">
          <div class="pt-5 pr-8 pl-16">
            <h1 class="font-medium text-3xl">Filtre</h1>
          </div>
          <!--meilleurs ventes-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Meilleurs ventes</h3>
            <div class="flex items-center">
              <input type="radio" name="checkbox" id="checkbox1" class="hidden" v-model="isChecked" value="Prix croissant">
              <label class="relative" for="checkbox1">
                <img v-if="isChecked !== 'Prix croissant'" src="../../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked === 'Prix croissant'" src="../../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked === 'Prix croissant'" src="../../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Prix croissant</p>
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox" id="checkbox2" class="hidden" v-model="isChecked" value="Prix decroissant">
              <label class="relative" for="checkbox2">
                <img v-if="isChecked !== 'Prix decroissant'" src="../../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked === 'Prix decroissant'" src="../../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked === 'Prix decroissant'" src="../../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Prix decroissant</p>  
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox" id="checkbox3" class="hidden" v-model="isChecked" value="Note des clients">
              <label class="relative" for="checkbox3">
                <img v-if="isChecked !== 'Note des clients'" src="../../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked === 'Note des clients'" src="../../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked === 'Note des clients'" src="../../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Note des clients</p>
            </div>
          </div>
          <!--Categories-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Categories</h3>
            <div class="flex items-center">
              <input type="radio" name="checkbox-cat" id="checkbox4" class="hidden" v-model="isChecked2" value="Cartables">
              <label class="relative" for="checkbox4">
                <img v-if="isChecked2 !== 'Cartables'" src="../../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked2 === 'Cartables'" src="../../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked2 === 'Cartables'" src="../../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Cartables</p>
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox-cat" id="checkbox5" class="hidden" v-model="isChecked2" value="Trolley">
              <label class="relative" for="checkbox5">
                <img v-if="isChecked2 !== 'Trolley'" src="../../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked2 === 'Trolley'" src="../../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked2 === 'Trolley'" src="../../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Trolley</p>  
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox-cat" id="checkbox6" class="hidden" v-model="isChecked2" value="Sac-à-dos">
              <label class="relative" for="checkbox6">
                <img v-if="isChecked2 !== 'Sac-à-dos'" src="../../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked2 === 'Sac-à-dos'" src="../../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked2 === 'Sac-à-dos'" src="../../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Sac-à-dos</p>
            </div>
          </div>
          <!--couleurs-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Couleurs</h3>
            <div class="grid grid-cols-5 gap-x-1.5 gap-y-1">
              <div class="flex items-center justify-center">
                <input type="radio" name="checkbox-col" id="checkbox7" class="hidden" v-model="isChecked3" value="blue">
                <label class="relative" for="checkbox7">
                  <div v-if="isChecked3 !== 'blue'" class="w-5 h-5 rounded-full bg-dark-blue"></div>
                  <div v-if="isChecked3 === 'blue'" class="flex items-center justify-center w-8 h-8 rounded-full bg-dark-blue">
                    <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 rounded-full">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.17143L4.14286 7L9 1" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-center">
                <input type="radio" name="checkbox-col" id="checkbox8" class="hidden" v-model="isChecked3" value="dark">
                <label class="relative" for="checkbox8">
                  <div v-if="isChecked3 !== 'dark'" class="w-5 h-5 rounded-full bg-[#000]"></div>
                  <div v-if="isChecked3 === 'dark'" class="flex items-center justify-center w-8 h-8 rounded-full bg-[#000]">
                    <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 rounded-full">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.17143L4.14286 7L9 1" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-center">
                <input type="radio" name="checkbox-col" id="checkbox9" class="hidden" v-model="isChecked3" value="red">
                <label class="relative" for="checkbox9">
                  <div v-if="isChecked3 !== 'red'" class="w-5 h-5 rounded-full bg-[#F35757]"></div>
                  <div v-if="isChecked3 === 'red'" class="flex items-center justify-center w-8 h-8 rounded-full bg-[#F35757]">
                    <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 rounded-full">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.17143L4.14286 7L9 1" stroke="#F35757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-center">
                <input type="radio" name="checkbox-col" id="checkbox10" class="hidden" v-model="isChecked3" value="green">
                <label class="relative" for="checkbox10">
                  <div v-if="isChecked3 !== 'green'" class="w-5 h-5 rounded-full bg-[#51E04E]"></div>
                  <div v-if="isChecked3 === 'green'" class="flex items-center justify-center w-8 h-8 rounded-full bg-[#51E04E]">
                    <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 rounded-full">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.17143L4.14286 7L9 1" stroke="#51E04E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-center">
                <input type="radio" name="checkbox-col" id="checkbox11" class="hidden" v-model="isChecked3" value="pink">
                <label class="relative" for="checkbox11">
                  <div v-if="isChecked3 !== 'pink'" class="w-5 h-5 rounded-full bg-[#AD19E1]"></div>
                  <div v-if="isChecked3 === 'pink'" class="flex items-center justify-center w-8 h-8 rounded-full bg-[#AD19E1]">
                    <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 rounded-full">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.17143L4.14286 7L9 1" stroke="#AD19E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-center">
                <input type="radio" name="checkbox-col" id="checkbox12" class="hidden" v-model="isChecked3" value="yellow">
                <label class="relative" for="checkbox12">
                  <div v-if="isChecked3 !== 'yellow'" class="w-5 h-5 rounded-full bg-[#e1d719]"></div>
                  <div v-if="isChecked3 === 'yellow'" class="flex items-center justify-center w-8 h-8 rounded-full bg-[#e1d719]">
                    <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 rounded-full">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.17143L4.14286 7L9 1" stroke="#e1d719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <!--prix-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Prix</h3>
          </div>
        </div>

        <div class="flex flex-col">
            <div class="w-full flex flex-col-reverse md:flex-row"> 
                <div class="w-full md:w-[70%] mt-6">  
                    <div class="h-[300px] md:h-[450px] overflow-y-auto space-y-4 md:space-y-6">
                        <div class="w-full flex flex-col items-start">
                            <div 
                                v-for="product in props.products"
                                :key="product.id" 
                                class="w-full flex items-center pt-4"
                            >
                                <div class="w-1/2 flex items-center space-x-1 md:space-x-3 md:pl-4 lg:pl-10">
                                    <div @click="selectedProduct = product" class="cursor-pointer">
                                        <div class="w-8 md:w-24">
                                            <img :src="product.image" alt="product">
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-dark-blue text-[10px] md:text-sm font-medium">{{ product.name }}</p>
                                    </div>
                                </div>
                                <div class="w-1/2 flex items-center justify-start">
                                    <div class="w-full flex items-center justify-center">
                                        <div class="w-1/3 flex items-center justify-end">
                                            <div class="w-28 h-5 md:h-7 rounded-full text-xs md:text-[15px] font-normal flex items-center justify-evenly bg-dark-blue text-white-color">
                                                <div class="cursor-pointer"><!--@click="decreaseQuantity(livre)"-->
                                                    -
                                                </div>
                                                <div>
                                                    1
                                                </div>
                                                <div class="cursor-pointer"><!--@click="increaseQuantity(livre)"-->
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-1/3 flex items-center justify-end">
                                            <p class="text-dark-blue text-[10px] md:text-[15px] font-medium">{{ product.prix }} MAD</p>
                                        </div>
                                        <div class="w-1/3 flex items-center justify-center">                                                        
                                            <input type="checkbox" :id="product.id" :value="product" class="h-3 md:h-4 w-3 md:w-4"><!--v-model="checkedLivre"-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="w-full md:w-[30%] flex items-center justify-center">
                    <productInfo 
                    :options="selectedProduct"
                    />
                </div>
            </div>    
            <div class="w-full flex items-center justify-between px-3 lg:px-0 pt-4 lg:pt-8 lg:pl-10 lg:pr-52">
                <div>
                    <h3 class="text-xs md:text-base font-semibold text-dark-blue">TOTAL = 1000 DHS</h3>
                </div>
                <div>
                    <button
                    class="bg-dark-blue text-white-color text-xs md:text-base font-semibold rounded-full py-1.5 md:py-3 px-3 md:px-5">
                        Ajouter au panier (2 articles)
                    </button>
                </div>
            </div> 
        </div> 

      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import productInfo from './productInfo.vue'

const props = defineProps({
    products: Array,
})
const selectedProduct = ref(props.products[0])

const isChecked = ref('')
const isChecked2 = ref('')
const isChecked3 = ref('')


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
