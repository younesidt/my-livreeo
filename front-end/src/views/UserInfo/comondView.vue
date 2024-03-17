<template>
    <div class=" bg-white-blue">
        <div class="container mx-auto max-w-7xl">
            <div class="w-full flex flex-col items-center justify-center">
                <div class="w-[86%] flex flex-col items-center justify-center pt-12 2xl:pt-8">
                    <div class="w-full flex items-center justify-center"><p class="md:text-[40px] text-[20px] text-center font-bold leading-loose pb-4  text-dark-blue">Merci pour votre commande !</p></div>
                    <div class=" p-1 w-[319px] border border-dark-blue rounded-full flex flex-row justify-between items-center my-[73px]">
                        <img src="../../assets/done.svg">
                        <div class="w-2/3 font-bold text-[15px]  text-dark-blue">Payement validé</div>
                    </div>
                    <div class="w-full flex flex-row justify-center py-4 border border-dark-blue rounded-full px-4">
                        <div class="flex flex-col justify-center items-center w-1/4">
                            <p class="font-bold text-[10px] md:text-[15px] text-center">Numéro de commande</p>
                            <p class=" text-soft-dark-blue mt-2 md:mt-4 text-[9px] md:text-sm">56785</p>
                        </div>
                        <div class="flex flex-col justify-center items-center border-x-2 border-dark-blue w-1/4">
                            <p class="font-bold text-[10px] md:text-[15px]">Date</p>
                            <p class=" text-soft-dark-blue mt-2 md:mt-4 text-[9px] md:text-sm">{{ today.toShortFormat() }}</p>
                        </div>
                        <div class="flex flex-col justify-center items-center border-x-2 border-dark-blue w-1/4">
                            <p class="font-bold text-[10px] md:text-[15px]">Total</p>
                            <p class=" text-soft-dark-blue mt-2 md:mt-4 text-[9px] md:text-sm">{{ total }} MAD</p>
                        </div>
                        <div class="flex flex-col justify-center items-center w-1/4">
                            <p class="font-bold text-[10px] md:text-[15px]">Payment Method</p>
                            <p class=" text-soft-dark-blue mt-2 md:mt-4 text-[9px] md:text-sm">{{ payment}}</p>
                        </div>
                    </div>
                    <div class="my-20 w-full flex flex-row justify-around">
                        <button class="p-1 md:p-2  border border-dark-blue rounded-full flex flex-row justify-between items-center">
                            <img src="../../assets/download-a.svg" class="md:h-auto h-9">
                            <spn class="font-semibold text-[10px] ml-2 md:text-[20px]  text-dark-blue">Téléchargez votre facture</spn>
                        </button>
                        <!-- <button class="p-1 md:p-2  border border-dark-blue rounded-full flex flex-row justify-between items-center bg-dark-blue text-white-color">
                            <img src="../../assets/start-over.svg" class="md:h-auto h-9">
                            <spn class="font-semibold text-[10px] md:text-[20px] ml-2 text-white-color">Choisir un autre PACK</spn>
                        </button> -->
                        <router-link to="/pack-selection">
                            <button class="p-1 md:p-2  border border-dark-blue rounded-full flex flex-row justify-between items-center bg-dark-blue text-white-color">
                            <img src="../../assets/start-over.svg" class="md:h-auto h-9">
                            <spn class="font-semibold text-[10px] md:text-[20px] ml-2 text-white-color">Choisir un autre PACK</spn>
                        </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useFuornitureStore } from "../../stors/fournitureStepStore";
import { useSecondStepStore } from '../../stors/SecondStepStore'
import { useEndPoint } from "../../stors/endpoint";
import { computed } from 'vue'

const liver = useSecondStepStore();
const fourniture = useFuornitureStore();
const user = useEndPoint();

const payment = user.type_paiement.type.desc;
Date.prototype.toShortFormat = function() {
const monthNames = ["Jan", "Feb", "Mar", "Apr",
                    "May", "Jun", "Jul", "Aug",
                    "Sep", "Oct", "Nov", "Dec"];
const day = this.getDate();
const monthIndex = this.getMonth();
const monthName = monthNames[monthIndex];
const year = this.getFullYear();
return `${monthName} ${day},${year}`;  
}
let today = new Date();


const total = computed(() => {
  return fourniture.total + liver.total + liver.plastificationTotal;
})

</script>
