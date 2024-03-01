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
            <SmallCard name="Manuels" image="../../src/assets/manuels.svg"/>
            <SmallCard name="Fournitures" image="../../src/assets/fourniture.svg"/>
            <SmallCard name="Plastification" image="../../src/assets/plastification.svg"/>
        </div>
        <div class="w-full flex items-center justify-center">
            <MainCard 
            :livres="livres"
            v-model="livrePanier"
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
import { ref, watch } from 'vue'
//import components
import SiteMapComponent from '../components/SiteMapComponent.vue'
import SmallCard from '../components/LivreAndFournitures/SmallCard.vue'
import MainCard from '../components/LivreAndFournitures/MainCard.vue'


const livres = [
    {
        id:1,
        name:"Fleurs d'encre 5",
        prix: 190,
        image: "../../src/assets/livre.svg",
        categorie: "Français"
    },
    {
        id:2,
        name: "Mon carnet de labo collection microméga",
        prix: 1300,
        image: "../../src/assets/latin.png",
        categorie: "Français"
    },
    {
        id:3,
        name:"Livre 3",
        prix: 200,
        image: "../../src/assets/livre.svg",
        categorie: "Sciences Physiques"
    },
    {
        id:4,
        name:"Livre 4",
        prix: 100,
        image: "../../src/assets/livre.svg",
        categorie: "Sciences de La vie"

    },
    {
        id:5,
        name:"Livre 5",
        prix: 800,
        image: "../../src/assets/livre.svg",
        categorie: "Français"
    },
]
const livrePanier = ref([])

// watch(livrePanier, (newValue, oldValue) => {
//   if (newValue !== null) {
//     console.log(props.modalClass);
//   }
// });

</script>

<style scoped> 

 
</style>