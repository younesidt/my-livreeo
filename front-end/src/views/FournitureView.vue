<template>
  <div class="bg-[#F1F1F1] w-full"> 
    <div class="w-full flex flex-col items-center justify-center space-y-2 pt-4 md:pt-8 2xl:pt-10 text-dark-blue">
      <h1 class="w-2/3 md:w-1/3 2xl:w-1/4 text-xl md:text-4xl font-bold text-center">
        Qui dis achat, dis promotion.
      </h1>
      <p class="w-2/3 md:w-1/3 2xl:w-1/4 text-center font-medium text-xs md:text-sm">
        Pour tout achat d'une trousse et d'un sac Easpack*, profitez d'une réduction de 10 % !
      </p>
    </div>
    <div class="w-full flex items-center justify-center pr-6 md:pr-12">
      <img src="../assets/boy-backpack.png" class="h-[250px] md:h-[400px]" alt="boy">
    </div>
  </div>

  <div class="container mx-auto max-w-7xl pt-6 md:pt-12 pb-5 md:pb-8">
    <div class="w-full flex items-center justify-center space-x-5 sm:space-x-10 md:space-x-28 pb-10">
        <smallCardFournt name="Cartables" image="../../src/assets/cartabl.svg"/>
        <smallCardFournt name="Trousses" image="../../src/assets/trouse.svg"/>
        <smallCardFournt name="Calculatrices" image="../../src/assets/calculatrice.svg"/>
    </div>

    <div class="w-full flex flex-col items-center justify-center space-y-10 text-dark-blue">
      <div class="w-full h-[400px] border-2 px-2 sm:px-4 py-2 sm:py-4 rounded-[35px] sm:rounded-[40px] lg:rounded-[60px] border-dark-blue border-opacity-20">
        <div class="bg-[#F0F9FF] flex w-full pt-12 pb-10 items-start justify-start rounded-[40px] space-x-24">
          <div class="pt-5 pr-12 pl-16">
            <h1 class="font-medium text-3xl">Filtre</h1>
          </div>
          <!--meilleurs ventes-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Meilleurs ventes</h3>
            <div class="flex items-center">
              <input type="radio" name="checkbox" id="checkbox1" class="hidden" v-model="isChecked" value="Prix croissant">
              <label class="relative" for="checkbox1">
                <img v-if="isChecked !== 'Prix croissant'" src="../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked === 'Prix croissant'" src="../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked === 'Prix croissant'" src="../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Prix croissant</p>
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox" id="checkbox2" class="hidden" v-model="isChecked" value="Prix decroissant">
              <label class="relative" for="checkbox2">
                <img v-if="isChecked !== 'Prix decroissant'" src="../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked === 'Prix decroissant'" src="../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked === 'Prix decroissant'" src="../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Prix decroissant</p>  
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox" id="checkbox3" class="hidden" v-model="isChecked" value="Note des clients">
              <label class="relative" for="checkbox3">
                <img v-if="isChecked !== 'Note des clients'" src="../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked === 'Note des clients'" src="../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked === 'Note des clients'" src="../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
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
                <img v-if="isChecked2 !== 'Cartables'" src="../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked2 === 'Cartables'" src="../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked2 === 'Cartables'" src="../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Cartables</p>
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox-cat" id="checkbox5" class="hidden" v-model="isChecked2" value="Trolley">
              <label class="relative" for="checkbox5">
                <img v-if="isChecked2 !== 'Trolley'" src="../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked2 === 'Trolley'" src="../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked2 === 'Trolley'" src="../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Trolley</p>  
            </div>
            <div class="flex items-center">
              <input type="radio" name="checkbox-cat" id="checkbox6" class="hidden" v-model="isChecked2" value="Sac-à-dos">
              <label class="relative" for="checkbox6">
                <img v-if="isChecked2 !== 'Sac-à-dos'" src="../assets/checked2.svg" class="w-4 h-4" alt="">
                <img v-if="isChecked2 === 'Sac-à-dos'" src="../assets/check1.svg" class="w-4 h-4" alt="checked">  
                <img v-if="isChecked2 === 'Sac-à-dos'" src="../assets/inside.svg" class="w-3 h-3 absolute top-0 right-0" alt="">
              </label>
              <p class="pl-3 text-sm font-medium">Sac-à-dos</p>
            </div>
          </div>
          <!--couleurs-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Couleurs</h3>
            <div class="grid grid-cols-5 gap-x-2 gap-y-1">
              <div class="flex items-center">
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
              <div class="flex items-center">
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
              <div class="flex items-center">
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
              <div class="flex items-center">
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
              <div class="flex items-center">
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
            </div>
          </div>

          <!--prix-->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium pb-1">Prix</h3>
          </div>
        </div>

      </div>
    </div>
  </div>



  <br>
  <br>
  <br>
  <br>
  <br>



  <!-- <div class="bg-[#F1F1F1] w-full flex items-center justfy-center">
    <div
      class="mx-auto w-full flex flex-col items-center justify-center text-dark-blue"
    >
      <p class="w-1/2 font-bold text-center text-[27.5px] md:text-[55px]">
        Qui dis achat, dis promotion.
      </p>
      <p
        class="w-full md:w-1/2 text-center text-[11px] md:text-[22px] font-meduim"
      >
        Pour tout achat d'une tousse et d'un sac Easpack*, profitez d'une
        réduction de 10 % !
      </p>
      <img
        src="../assets/boy-backpack.svg"
        class="h-[450px] 2xl:h-full z-10"
        alt="fille"
      />
    </div>
  </div> -->

  <!-- <div class="container mx-auto max-w-7xl pt-12 pb-28">
    <div
      class="w-full flex items-center justify-center md:space-x-28 space-x-14 pb-10"
    >
      <div
        class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer"
      >
        <img src="../assets/cartabl.svg" class="md:h-28 h-14 p-1.5" alt="" />
        <p
          class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]"
        >
          Cartables
        </p>
        <div
          class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center"
        >
          <img src="../assets/panier.svg" class="md:h-6 h-3" alt="" />
          <img
            src="../assets/panier2.png"
            class="absolute md:pt-2 pt-1 md:w-2 w-1"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer"
      >
        <img src="../assets/trouse.svg" class="md:h-28 h-14 p-1.5" alt="" />
        <p
          class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]"
        >
          Trousses
        </p>
        <div
          class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center"
        >
          <img src="../assets/panier.svg" class="md:h-6 h-3" alt="" />
          <img
            src="../assets/panier2.png"
            class="absolute md:pt-2 pt-1 md:w-2 w-1"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer"
      >
        <img
          src="../assets/calculatrice.svg"
          class="md:h-28 h-14 p-1.5"
          alt=""
        />
        <p
          class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]"
        >
          Calculatrices
        </p>
        <div
          class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center"
        >
          <img src="../assets/panier.svg" class="md:h-6 h-3" alt="" />
          <img
            src="../assets/panier2.png"
            class="absolute md:pt-2 pt-1 md:w-2 w-1"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="md:space-x-28 space-x-14 p-10">
      <div
        class="w-full border-4 rounded-3xl border-dark-blue p-4 flex flex-col"
      >

      
      
        <Filter/>
        <fornitureProdacts/>



      </div>
    </div>
  </div> -->
</template>
<script setup>
import smallCardFournt from "../components/DefaultFaurniture/smallCardFournt.vue"
import { useDefaultFaurnitures } from "../stors/DefaultFaurnitures"
import {ref} from 'vue'

const isChecked = ref('')
const isChecked2 = ref('')
const isChecked3 = ref('')

// import { onMounted, ref } from "vue";
// import fornitureProdacts from "../components/DefaultFaurniture/fornitureLisstprodacts.vue"
// import Filter from "../components/DefaultFaurniture/Filter.vue"
// import { useFuornitureStore } from "../stors/fournitureStepStore";

// const store = useFuornitureStore();
// store.fetchProdacts();
// // onMounted(() => {
// //     store.fetchProdacts()
// // }),

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
