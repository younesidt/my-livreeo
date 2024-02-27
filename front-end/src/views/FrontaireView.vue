<template>
    <div>
        <HeroSection/>
        <!-- <etaps/> -->
    </div>
    <div class="w-full my-[50px] px-8 absolute">
        <div class="container m-auto  border-2 border-[#004079]/20 md:rounded-[81px] rounded-3xl  md:p-8 p-4">
            <etapDescription/>
            <cart></cart>
            <div class="w-5/6 p-4 md:p-8 flex flex-row justify-between items-start ">
                <div class="text-[11px] md:text-[21px] font-semibold text-dark-blue ">total</div>
                <div><button class="text-white-color font-semibold text-[12px] md:text-[20px] px-8 py-2 rounded-full bg-dark-blue">Ajouter au panier (4 articles) </button></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeroSection from '../components/prodacts/heroSectionComponent.vue'
import etaps from '../components/prodacts/etaps.vue'
import etapDescription from '../components/prodacts/etapADescriptin.vue'
import cart from '../components/prodacts/CartComponent.vue'
import { useSecondStepStore } from '../stors/SecondStepStore'
import { useFirstStepStore } from '../stors/FirstStepStore'

import { onMounted } from 'vue'


const secstore = useSecondStepStore();
const mystore = useFirstStepStore();

console.log(mystore.getLivre);

// onMounted(() => {
//     console.log(secstore.getLivres);
// })
// secstore.fetchLivres();
// console.log(secstore.getLivres);


</script>