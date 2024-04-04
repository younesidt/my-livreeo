<template>
    <div class="w-full md:w-2/5 my-4 md:my-0">
                        <div class="w-full p-8 bg-white-color rounded-3xl">
                            <p class="text-dark-blue font-meduim text-[15px] md:text-[20px] border-b-2 border-[#EDEDED] py-4">Saisir un code promo </p>
                            <div class="w-full py-4 flex flex-row justify-between items-center">
                                <input type="text" placeholder="LIVR456HG" class="outline-none w-2/4 ">
                                <button class="px-4 py-1 bg-dark-blue text-white-color rounded-full" >Valider</button>
                            </div>
                        </div>
                        <div class="w-full p-8 bg-white-color rounded-3xl my-4">
                            <p class="text-dark-blue font-bold text-[15px] md:text-[20px] pb-4">Récapitulatif </p>
                            <div class="w-full py-4 flex flex-row justify-between items-center">
                                <p class=" font-light  text-[18px]">Sous-total</p>
                                <p class=" font-semibold  text-[16px]">{{ total }} MAD</p>
                            </div>
                            <div class="w-full py-4 flex flex-row justify-between items-center border-b-2 border-dark-blue">
                                <p class=" font-light  text-[18px]">Livraison</p>
                                <p class=" font-light  text-[14px]">Calculé à l’étape suivante</p>
                            </div>
                            <div class="w-full py-4 flex flex-row justify-between items-center">
                                <p class=" font-semibold  text-[20px]">Total <br> <span class="font-light  text-[14px]">TVA incluse</span></p>
                                <p class=" font-semibold  text-[20px]">{{ total }} MAD</p>
                            </div>
                            <div class="w-full flex flex-col justify-between items-center py-4">
                                <router-link to="/mode-livreson" class="w-full flex items-center justify-center">
                                <button class="w-2/3 py-3 px-4 md:px-8 text-white-color bg-dark-blue rounded-full text-[11px] md:text-[18px] font-semibold my-4">Valider mon panier</button></router-link>
                                <p>où </p>
                                <router-link to="/pack-selection" class="w-full flex items-center justify-center">
                                <button class="w-2/3 py-3 md:px-8 px-4 text-white-color bg-dark-blue rounded-full mt-4 font-light md:text-[16px] text-[10px]">Choisir un autre packr</button></router-link>
                            </div>
                        </div>
                    </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import { useSecondStepStore } from '../../stors/SecondStepStore'
const Liver = useSecondStepStore();

const total = computed(() => {
  return fourniture.total + Liver.total + Liver.plastificationTotal;
})

</script>