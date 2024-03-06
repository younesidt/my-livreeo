<template>
    <div class="bg-[#F1F1F1] w-full flex items-end h-[40vh] md:h-[60vh] 2xl:h-[80vh]">
        <!-- <div class="w-full flex items-center justify-center -space-x-28 2xl:-space-x-40">
            <img src="../assets/fie.png" class="h-[450px] 2xl:h-full z-10" alt="fille">
            <img src="../assets/popover.svg" class="h-[250px] 2xl:h-full" alt="">
        </div> -->
        <div class="w-full flex items-center justify-center -space-x-16 xl:-space-x-24 2xl:-space-x-32">
            <div class="z-10">
                <img src="../assets/fie.png" class="h-[300px] xl:h-[450px] 2xl:h-[550px]" alt="fille">
            </div>
            <div>
                <div class="relative bg-white-color w-[300px] xl:w-[450px] p-4 xl:p-6 flex flex-col rounded-[28px] space-y-3 xl:space-y-6 text-dark-blue">
                    <h1 class="text-base xl:text-xl font-semibold">Ma liste de fournitures </h1>
                    <p class="text-[10px] xl:text-sm font-normal leading-tight">
                        Préparer la rentrée n'a jamais été aussi simple ! Chez Livréeo, nous avons décomposé vos achats de rentrée en <span class="font-semibold">Trois étapes ultra-simples</span> pour vous garantir une expérience sans stress. Suivez notre guide pour vous équiper de tous les produits indispensables de la rentrée pour la classe de <span class="font-semibold">5ème du Lycée lyautey </span>
                    </p>
                    <div class="triangle-down"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto max-w-7xl pt-6 md:pt-12 pb-5 md:pb-8">
        <!-- 3 Card -->
        <div class="w-full flex items-center justify-center space-x-10 md:space-x-28 pb-10">
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
.triangle-down {
  position: absolute;
  bottom: -30px;
  left: 15%;
  width: 0; 
  height: 0; 
  border-left: 0px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid white;
  border-bottom-left-radius: 20px;
}
</style>