<template>
    <div class=" bg-white-blue">
        <div class="container mx-auto max-w-7xl">
            <div class="w-full flex flex-col items-center justify-center text-dark-blue">
                <div class="w-[86%] flex flex-col items-center justify-center pt-12 2xl:pt-8">
                    <div class="w-full flex items-center justify-center"><p class="md:text-[40px] text-[20px] text-center font-bold leading-loose pb-4">Choisir un moyen de payement  </p></div>
                    <div class="w-full flex flex-row justify-between items-center md:py-8 py-4 border-b-2 border-dark-blue" v-for="plan in plans" :key="plan.id">
                        <div class="w-full flex flex-row ">
                            <div @click="selectPlan(plan)"  class="h-[42px] w-[43px] mr-4">
                                <input type="radio" :id="plan.id" :value="plan" v-model="selectedPlan" class="w-full h-full caret-white-blue accent-dark-blue appearance-auto border border-dark-blue rounded-full ">
                            </div>
                            <div class="flex  w-full">
                                <p class="font-semibold text-[10px] md:text-[20px]">{{ plan.name }} </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full my-16 flex flex-row justify-between items-center">
                        <router-link to="/user-info"><img src="../../assets/back.svg" height=""></router-link>
                        <router-link to="/cart-info">
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
        name: 'Carte Bancaire (payement sécurisée) ',
    },
    {
        id: 2,
        name: 'Paiement en espèces chez Wafacash',
    },
    {
        id: 3,
        name: 'Paiement par virement bancaire ',
    },
    {
        id: 4,
        name: 'Paiement 2X et 3X sans frais ',
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
