<template>
    <div class=" bg-white-blue h-screen">
        <div class="container mx-auto max-w-7xl">
            <div class="w-full flex flex-col items-center justify-center text-dark-blue">
                <div class="w-[86%] flex flex-col items-center justify-center pt-12 2xl:pt-8">
                    <div class="w-full flex items-center justify-center"><p class="md:text-[40px] text-[20px] text-center font-bold leading-loose pb-4">Choisir le mode de livraison </p></div>
                    <div class="w-full flex flex-row justify-between items-center md:py-8 py-4 border-b-2 border-dark-blue" v-for="plan in plans" :key="plan.id">
                        <div class="w-1/3 flex flex-row ">
                            <div @click="selectPlan(plan)"  class="h-[42px] w-[43px] mr-4">
                                <input type="radio" :id="plan.id" :value="plan" v-model="selectedPlan" class="w-full h-full caret-white-blue accent-dark-blue appearance-auto border border-dark-blue rounded-full ">
                            </div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-[10px] md:text-[20px]">{{ plan.name }} </p>
                                <p class="font-medium text-[5px] md:text-[10px]">{{ plan.desc }} </p>
                            </div>
                        </div>
                        <div class="w-1/3 font-medium text-[10px] md:text-[20px] text-center">
                            {{ plan.date }}
                        </div>
                        <div class="w-1/3 font-semibold tex-[15px] md:text-[30px] flex justify-end items-end">
                            {{  plan.prix }}MAD
                        </div>
                    </div>
                    <div class="w-full my-16 flex flex-row justify-between items-center">
                        <router-link to="/bascket"><img src="../assets/back.svg" height=""></router-link>
                        <router-link to="/user-addres">
                            <button class="py-3 px-8 text-white-color bg-dark-blue rounded-full mt-4 font-semibold md:text-[20px] text-[15px]">Aller au paiement</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const plans = [
    {
        id: 1,
        name: 'Livraison standard',
        desc: '* Obligatoire pour le 3X sans frais',
        date: '2 semaines avant la rentrée ',
        prix: 19
    },
    {
        id: 2,
        name: 'Livraison Flash',
        desc: '* Uniquement pour les articles “fournitures',
        date: '4 jours    ',
        prix: 30
    },
    {
        id: 3,
        name: 'Livraison Express',
        desc: '',
        date: '1 semaine  ',
        prix: 76
    }
]

// Selected plan object
const selectedPlan = ref(null);

// Function to select a plan
const selectPlan = (plan) => {
    selectedPlan.value = plan;
}

// Watcher for changes in selectedPlan
watch(selectedPlan, (newValue, oldValue) => {
    console.log('Selected plan changed:', newValue);
});
</script>
