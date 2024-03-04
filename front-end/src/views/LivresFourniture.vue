<template>
    <div class="bg-[#F1F1F1] w-full flex items-end h-[50vh] xl:h-[80vh]">
        <div class="w-full flex items-center justify-center -space-x-28 2xl:-space-x-40">
            <img src="../assets/fille.svg" class="h-[450px] 2xl:h-full z-10" alt="fille">
            <img src="../assets/popover.svg" class="h-[250px] 2xl:h-full" alt="">
        </div>
    </div>
    <div class="container mx-auto max-w-7xl pt-12 pb-28">
        <!-- 3 Card -->
        <div class="w-full flex items-center justify-center space-x-28 pb-10">
            <SmallCard :cart="cartLivre" name="Manuels" image="../../src/assets/manuels.svg"/>
            <SmallCard :cart="cartPlast" name="Fournitures" image="../../src/assets/fourniture.svg"/>
            <SmallCard :cart="cartFourn" name="Plastification" image="../../src/assets/plastification.svg"/>
        </div>
        <div class="w-full flex flex-col items-center justify-center space-y-10">
            <MainCard 
            etape="first"
            :livres="livres"
            />
            <MainCard 
            etape="last"
            :livres="selectedLivre"
            />
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <SiteMapComponent />
</template>
<script setup>
//import vue
import { computed, ref } from 'vue'

//import components
import SiteMapComponent from '../components/SiteMapComponent.vue'
import SmallCard from '../components/LivreAndFournitures/SmallCard.vue'
import MainCard from '../components/LivreAndFournitures/MainCard.vue'
import { useSecondStepStore } from '../stors/SecondStepStore'

const data = useSecondStepStore();

const livres = data.getLivres;
const selectedLivre = data.getSelectedLivres;

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

 
</style>