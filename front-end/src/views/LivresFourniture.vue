<template>
    <div class="bg-[#F1F1F1] w-full flex items-end h-[50vh] xl:h-[80vh]">
        <div class="w-full flex items-center justify-center -space-x-28 2xl:-space-x-40">
            <img src="../assets/fille.svg" class="h-[450px] 2xl:h-full z-10" alt="fille">
            <img src="../assets/popover.svg" class="h-[250px] 2xl:h-full" alt="">
        </div>
    </div>
    <div class="container mx-auto max-w-7xl pt-12 pb-28">
        <div class="w-full flex items-center justify-center space-x-28 pb-10">
            <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg rounded-3xl flex flex-col items-center cursor-pointer">
                <img src="../assets/manuels.svg" class="h-28 p-1.5" alt="">
                <p class="text-dark-blue font-semibold pb-3 pt-2 text-lg">Manuels</p>
                <div class="absolute -top-1 -right-3 w-10 h-10 bg-dark-blue rounded-full flex items-center justify-center">
                    <img src="../assets/panier.svg" class="h-6" alt="">
                    <img src="../assets/panier2.png" class="absolute pt-2 w-2" alt="">
                </div>
            </div>
            <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg rounded-3xl flex flex-col items-center cursor-pointer">
                <img src="../assets/fourniture.svg" class="h-28 p-1.5" alt="">
                <p class="text-dark-blue font-semibold pb-3 pt-2 text-lg">Fournitures</p>
                <div class="absolute -top-1 -right-3 w-10 h-10 bg-dark-blue rounded-full flex items-center justify-center">
                    <img src="../assets/panier.svg" class="h-6" alt="">
                    <img src="../assets/panier2.png" class="absolute pt-2 w-2" alt="">
                </div>
            </div>
            <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg rounded-3xl flex flex-col items-center cursor-pointer">
                <img src="../assets/plastification.svg" class="h-28 p-1.5" alt="">
                <p class="text-dark-blue font-semibold pb-3 pt-2 text-lg">Plastification</p>
                <div class="absolute -top-1 -right-3 w-10 h-10 bg-dark-blue rounded-full flex items-center justify-center">
                    <img src="../assets/panier.svg" class="h-6" alt="">
                    <img src="../assets/panier2.png" class="absolute pt-2 w-2" alt="">
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <div class="w-[90%] border-[3px] px-8 py-8 rounded-[60px] border-dark-blue border-opacity-40 h-screen">
                <div class="w-full flex items-center justify-start rounded-[35px] bg-[#F0F9FF]">
                    <div class="w-[55%] flex flex-col py-6 pl-8 pr-4">
                        <div class="w-32 flex items-center justify-between px-4 py-1.5 bg-dark-blue rounded-full font-semibold text-base text-white-color">
                            Étape 1
                            <img src="../assets/top.svg" class="h-2" alt="top">
                        </div>
                        <h2 class="text-xl text-dark-blue font-semibold pt-3">Choisir ses Manuels Scolaires : </h2>
                        <p class="text-dark-blue text-sm font-normal">
                            Chaque manuel proposé par Livréeo est rigoureusement sélectionné pour s'aligner avec les listes officielles des établissements scolaires. Avec l'intégration systématique de l'ISBN, nous assurons une correspondance exacte entre les ouvrages recommandés par les enseignants et ceux que vous recevrez. Besoin d'ajuster votre panier ? Retirez en un clic ce que vous ne souhaitez pas acheter, pour une commande sur mesure.
                        </p>
                    </div>
                    <div class="w-[45%] flex">
                        <div class="w-full h-full flex items-start">
                            <img src="../assets/MyBooks.jpg" class="w-full h-[250px]" alt="books">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <SiteMapComponent />
</template>
<script setup>
import SiteMapComponent from '../components/SiteMapComponent.vue'





</script>