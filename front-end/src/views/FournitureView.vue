<template>
    <div class="bg-[#F1F1F1] w-full flex items-center justfy-center">
        <div class="mx-auto w-full flex flex-col items-center justify-center text-dark-blue">
            <p class="w-1/2 font-bold text-center text-[27.5px] md:text-[55px]">Qui dis achat, dis promotion.</p>
            <p class="w-full md:w-1/2 text-center text-[11px] md:text-[22px] font-meduim"> Pour tout achat d’une tousse et d’un sac Easpack*, profitez d'une réduction de 10 % !</p>
            <img src="../assets/boy-backpack.svg" class="h-[450px] 2xl:h-full z-10" alt="fille">
        </div>
    </div>
    <div  class="container mx-auto max-w-7xl pt-12 pb-28">
        <div  class="w-full flex items-center justify-center md:space-x-28 space-x-14 pb-10">
            <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer">
                <img src="../assets/cartabl.svg" class="md:h-28 h-14 p-1.5" alt="">
                <p class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]">Cartables</p>
                <div class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center">
                    <img src="../assets/panier.svg" class="md:h-6 h-3" alt="">
                    <img src="../assets/panier2.png" class="absolute md:pt-2 pt-1 md:w-2 w-1" alt="">
                </div>
            </div>
            <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer">
                <img src="../assets/trouse.svg" class="md:h-28 h-14 p-1.5" alt="">
                <p class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]">Trousses</p>
                <div class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center">
                    <img src="../assets/panier.svg" class="md:h-6 h-3" alt="">
                    <img src="../assets/panier2.png" class="absolute md:pt-2 pt-1 md:w-2 w-1" alt="">
                </div>
            </div>
            <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer">
                <img src="../assets/calculatrice.svg" class="md:h-28 h-14 p-1.5" alt="">
                <p class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]">Calculatrices</p>
                <div class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center">
                    <img src="../assets/panier.svg" class="md:h-6 h-3" alt="">
                    <img src="../assets/panier2.png" class="absolute md:pt-2 pt-1 md:w-2 w-1" alt="">
                </div>
            </div>
        </div>

        <div class="md:space-x-28 space-x-14 p-10">
        <div class="w-full border-4 rounded-3xl border-dark-blue p-4 flex flex-row">


            <div class="w-3/4">
                <div class="md:max-h-[400px] max-h-[300px] overflow-y-auto space-y-6 flex flex-col justify-between">
                    <div v-for="prodact in store.prodacts" class="w-full flex flex-row justify-between items-center text-dark-blue" @click="selectedProdact = prodact">
                        <div class="w-1/5">
                            <img :src="prodact.image" height="50px" class="md:w-[100px] w-[50px]">
                        </div>
                        <p class="w-1/5 text-center font-medium text-[10px] md:text-[18px]">{{ prodact.produit }}</p>
                        <div class="w-1/6">
                            <div class="flex flex-row  px-3 bg-dark-blue text-white-color rounded-full justify-between items-center h-[15px] md:w-[125px] w-[55px] text-[10px] md:text-[18px] font-normal">
                            <!-- incress  -->
                            <button @click="()=>{
                                if (prodact.stock > 0){
                                        prodact.cont++
                                        prodact.stock--
                                    }
                                    return prodact.cont, prodact.stock
                            }">+</button>

                            <p class="">{{ prodact.cont }}</p>
                            <!-- decress -->
                            <button @click="() => {
                                        if (prodact.cont > 0){
                                        prodact.cont--
                                        prodact.stock++
                                    }
                                    return prodact.cont, prodact.stock
                            }">-</button>
                        </div>
                        </div>
                        <p class="w-1/5 text-center font-medium text-[10px] md:text-[18px] ">{{ prodact.prix * prodact.cont }} MAD</p>
                        <div class="px-4 w-1/7">test</div>
                    </div>
                </div>
            </div>

            <div class="p-4 w-1/4 flex flex-col items-start text-[#5A7BA0]">
                <img v-if="selectedProdact != null" :src="selectedProdact.image" class="w-full" alt="">
                <p class="py-4 w-full font-medium md:text-[22px] ">{{ selectedProdact.produit }}</p>
            </div>
        </div>
        </div>
        
    </div>
    <!-- <div v-for="prodact in store.prodacts">
                <img :src="prodact.image">
                <p>{{ prodact.produit }}</p>
                <div>
                    <button @click="()=>{return prodact.cont++, prodact.stock--}">+</button>
                    <p>{{ prodact.cont }}</p>
                    <p>{{ prodact.stock }}</p>
                    <button @click="() => {
                        if (prodact.cont > 0){
                        prodact.cont--
                        prodact.stock++
                        }
                        return prodact.cont, prodact.stock
                    }">-</button>
                </div>
                <p>{{ prodact.prix }}</p>
            </div> -->
</template>
<script setup>
import { onMounted, ref } from 'vue';

import { Disclosure, DisclosureButton, DisclosurePanel, Listbox, ListboxOptions, ListboxOption, } from '@headlessui/vue'
import {  useFuornitureStore } from '../stors/fournitureStepStore';

const store = useFuornitureStore();
store.fetchProdacts()
// onMounted(() => {
//     store.fetchProdacts()
// }),

const selectedProdact = null
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
}
 
/* Track */
::-webkit-scrollbar-track {
    background: #F1F0F0;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #6192BF;
    border-radius: 5px;
}
 
</style>