<template>
    <div class="bg-[#F1F1F1] w-full flex items-end h-[50vh] xl:h-[80vh]">
        <div class="w-full flex items-center justify-center -space-x-28 2xl:-space-x-40">
            <img src="../assets/fille.svg" class="h-[450px] 2xl:h-full z-10" alt="fille">
            <img src="../assets/popover.svg" class="h-[250px] 2xl:h-full" alt="">
        </div>
    </div>
    <div class="container mx-auto max-w-7xl pt-12 pb-8">
        <!-- 3 Card -->
        <div class="w-full flex items-center justify-center space-x-28 pb-10">
            <SmallCard :cart="cartLivre" name="Manuels" image="../../src/assets/manuels.svg"/>
            <SmallCard :cart="cartFourn" name="Fournitures" image="../../src/assets/fourniture.svg"/>
            <SmallCard :cart="cartPlast" id="secondbtn" name="Plastification" image="../../src/assets/plastification.svg"/>
        </div>
        <div class="w-full flex flex-col items-center justify-center space-y-10">
            <LivresCard 
            :livres="livres"
            />
            <PlastificationCard 
            :selectedLiv="selectedLiv"
            />
            <div class="w-[90%] flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <router-link to="/pack-selection"><img src="../assets/back-home.svg" class="h-14" alt="back"></router-link>
                    <div class="relative cursor-pointer space-x-12 flex items-center pr-4 justify-center py-3 text-center font-normal leading-relaxed text-white-color text-sm rounded-full bg-dark-blue hover:bg-[#004179e5] w-full transition duration-200 ease-in-out">
                        <div class="absolute flex items-center justify-center left-1.5 bg-white-color w-8 h-8 rounded-full">
                            <img src="../assets/toright.svg" class="h-4" alt="">
                        </div>
                        <span> Choisir un autre pack</span>
                    </div>
                </div>
                <div>
                    <button class="text-sm font-normal leading-relaxed bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out rounded-full text-white-color px-8 py-4">
                        Aller au paiement
                    </button>
                </div>
            </div>
        </div>
    </div>
    <SiteMapComponent />
</template>
<script setup>
//import vue
import { computed, ref } from 'vue'

//import components
import SiteMapComponent from '../components/SiteMapComponent.vue'
import SmallCard from '../components/LivreAndFournitures/SmallCard.vue'
import LivresCard from '../components/LivreAndFournitures/LivresCard.vue'
import PlastificationCard from '../components/LivreAndFournitures/PlastificationCard.vue'
import { useSecondStepStore } from '../stors/SecondStepStore'

const data = useSecondStepStore();

const livres = data.getLivres;
const selectedLiv = computed(() => {
    return data.getSelectedLivres;
}) 

const cartLivre = computed(() => {
    return data.cartItems.length;
});

const cartPlast = computed(() => {
    return data.plastification.length;
});

const cartFourn = computed(() => {
    return data.cartFournt.length;
});


</script>

<style scoped> 

 
</style>../components/LivreAndFournitures/LivresCard.vue