<template>
    <div class="bg-white-color w-full md:w-2/4 md:h-[590px] rounded-3xl p-8 flex flex-col items-start ">
        <div class="w-full text-dark-blue font-bold text-[25px] md:text-[55px] p-4">Panier </div>
        <div class="max-h-[300px] overflow-y-auto space-y-6 flex flex-col justify-between w-full">

            <div class="w-full flex flex-row justify-between items-center" v-for="prodact in liver.cartItems ">
                <img :src="liver.cartItems[0].image" width="62px">
                <div class="flex flex-col w-1/4 ">
                    <p class="font-semibold text-[13px] mb-2 w-full">Manuels</p>
                        <select class="px-2 py-1 rounded-full border w-full text-[11px] font-medium">
                            <option>{{ liver.cartItems.length }} produit </option>
                            <option>{{ prodact.nom }}</option>
                        </select>
                </div>
                <button class="text-[12px] font-medium" @click="removeLivres()">SUPPRIMIER</button>
                <div>
                    <p class="text-[13px] font-normal line-through"></p>
                    <p class="text-sm font-bold w-1/4"></p>
                </div>
            </div>

            <div class="w-full flex flex-row justify-between items-center" v-for="prodact in fourniture.cart ">
                <img :src="prodact.image" width="62px">
                <div class="flex flex-col w-1/4 ">
                    <p class="font-semibold text-[13px] mb-2 w-full">{{ prodact.produit }}</p>
                        <select class="px-2 py-1 rounded-full border w-full text-[11px] font-medium">
                            <option>{{ prodact.quantity }} produit</option>
                        </select>
                </div>
                <button class="text-[12px] font-medium" @click="removeProdact(prodact)">SUPPRIMIER</button>
                <div>
                    <p class="text-[13px] font-normal line-through"></p>
                    <p class="text-sm font-bold w-1/4">{{  prodact.quantity * prodact.prix  }} MAD</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { useFuornitureStore } from "../../stors/fournitureStepStore";
import { useSecondStepStore } from '../../stors/SecondStepStore'

const liver = useSecondStepStore();
const fourniture = useFuornitureStore();

function removeProdact(itemToRemove) {
  const index = fourniture.cart.indexOf(itemToRemove);
  if (index !== -1) {
    fourniture.cart.splice(index, 1);
    fourniture.total -= itemToRemove.quantity * itemToRemove.prix
  }
}

function removeLivres(){
    liver.cartItems.length = 0
    liver.total = 0

}
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