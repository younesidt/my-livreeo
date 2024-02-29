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
            <div class="w-[90%] border-[3px] px-8 pt-8 pb-5 rounded-[60px] border-dark-blue border-opacity-40">
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
                <div class="w-full flex"> 
                    <div class="w-[70%] mt-6">
                        <div class="w-full flex items-center justify-end pr-16">
                            <button class="font-semibold text-dark-blue text-base bg-[#F0F9FF] py-1.5 px-8 rounded-full">Selectionez Tous</button>
                        </div>   
                        <div class="max-h-[450px] overflow-y-auto space-y-6">
                            <div class="w-full flex flex-col items-start">
                            <h3 class="text-base font-semibold text-dark-blue pl-1">Français</h3>
                            <div class="w-full flex items-center pt-2">
                                <div class="w-1/2 flex items-center space-x-4 pl-10">
                                    <div class="w-12">
                                        <img src="../assets/livre.svg" alt="livre">
                                    </div>
                                    <p class="text-dark-blue text-sm font-medium">Fleurs d'encre Fleurs d'encre Fleurs d'encre</p>
                                </div>
                                <div class="w-1/2 flex items-center space-x-10">
                                    <div class="h-7 rounded-full text-[15px] font-normal flex items-center px-6 space-x-4 bg-dark-blue text-white-color">
                                        <div>
                                            -
                                        </div>
                                        <div>
                                            1
                                        </div>
                                        <div>
                                            +
                                        </div>
                                    </div>
                                    <p class="text-dark-blue text-[15px] font-medium">360.00 MAD</p>
                                    <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3098_3904)">
                                        <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3098_3904">
                                            <rect width="34" height="33" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                            </div>
                            </div>
                            <div class="w-full flex flex-col items-start">
                                <h3 class="text-base font-semibold text-dark-blue pl-1">Sciences Physiques</h3>
                                <div class="w-full flex items-center pt-2">
                                    <div class="w-1/2 flex items-center space-x-4 pl-10">
                                        <div class="w-12">
                                            <img src="../assets/livre.svg" alt="livre">
                                        </div>
                                        <p class="text-dark-blue text-sm font-medium">Microméga Cycle 4</p>
                                    </div>
                                    <div class="w-1/2 flex items-center space-x-10">
                                        <div class="h-7 rounded-full text-[15px] font-normal flex items-center px-6 space-x-4 bg-dark-blue text-white-color">
                                            <div>
                                                -
                                            </div>
                                            <div>
                                                1
                                            </div>
                                            <div>
                                                +
                                            </div>
                                        </div>
                                        <p class="text-dark-blue text-[15px] font-medium">360.00 MAD</p>
                                        <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3098_3904)">
                                            <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_3904">
                                                <rect width="34" height="33" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full flex items-center pt-6">
                                    <div class="w-1/2 flex items-center space-x-4 pl-10">
                                        <div class="w-12">
                                            <img src="../assets/livre.svg" alt="livre">
                                        </div>
                                        <p class="text-dark-blue text-sm font-medium">Microméga Cycle 4</p>
                                    </div>
                                    <div class="w-1/2 flex items-center space-x-10">
                                        <div class="h-7 rounded-full text-[15px] font-normal flex items-center px-6 space-x-4 bg-dark-blue text-white-color">
                                            <div>
                                                -
                                            </div>
                                            <div>
                                                1
                                            </div>
                                            <div>
                                                +
                                            </div>
                                        </div>
                                        <p class="text-dark-blue text-[15px] font-medium">360.00 MAD</p>
                                        <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3098_3904)">
                                            <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_3904">
                                                <rect width="34" height="33" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex flex-col items-start">
                                <h3 class="text-base font-semibold text-dark-blue pl-1">Sciences Physiques</h3>
                                <div class="w-full flex items-center pt-2">
                                    <div class="w-1/2 flex items-center space-x-4 pl-10">
                                        <div class="w-12">
                                            <img src="../assets/livre.svg" alt="livre">
                                        </div>
                                        <p class="text-dark-blue text-sm font-medium">Microméga Cycle 4</p>
                                    </div>
                                    <div class="w-1/2 flex items-center space-x-10">
                                        <div class="h-7 rounded-full text-[15px] font-normal flex items-center px-6 space-x-4 bg-dark-blue text-white-color">
                                            <div>
                                                -
                                            </div>
                                            <div>
                                                1
                                            </div>
                                            <div>
                                                +
                                            </div>
                                        </div>
                                        <p class="text-dark-blue text-[15px] font-medium">360.00 MAD</p>
                                        <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3098_3904)">
                                            <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_3904">
                                                <rect width="34" height="33" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full flex items-center pt-6">
                                    <div class="w-1/2 flex items-center space-x-4 pl-10">
                                        <div class="w-12">
                                            <img src="../assets/livre.svg" alt="livre">
                                        </div>
                                        <p class="text-dark-blue text-sm font-medium">Microméga Cycle 4</p>
                                    </div>
                                    <div class="w-1/2 flex items-center space-x-10">
                                        <div class="h-7 rounded-full text-[15px] font-normal flex items-center px-6 space-x-4 bg-dark-blue text-white-color">
                                            <div>
                                                -
                                            </div>
                                            <div>
                                                1
                                            </div>
                                            <div>
                                                +
                                            </div>
                                        </div>
                                        <p class="text-dark-blue text-[15px] font-medium">360.00 MAD</p>
                                        <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3098_3904)">
                                            <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_3904">
                                                <rect width="34" height="33" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[30%] flex items-center justify-center mt-6">
                        <div class="w-60 flex flex-col items-center">
                            <img src="../assets/livre.svg" alt="livre">
                            <div class="w-full flex flex-col text-[#5A7BA0] items-start">
                                <h2 class="text-lg font-medium pb-4">Français 5ÉME</h2>
                                <p class="text-xs font-light">ISBN : 978-2013953115</p>
                                <p class="text-xs font-light">Année : 2016</p>
                                <p class="text-xs font-light">Edition : Hachette</p>
                                <p class="text-xs font-light">Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca</p>
                            </div>
                        </div> 
                    </div>
                </div>    
                <div class="w-full flex items-center justify-between pt-8 pl-10 pr-52">
                    <div>
                        <h3 class="text-base font-semibold text-dark-blue">TOTAL = 1 080.00 DHS</h3>
                    </div>
                    <div>
                        <button class="bg-dark-blue text-white-color text-base font-semibold rounded-full py-3 px-5">Ajouter au panier (4 articles)</button>
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

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
}
 
/* Track */
::-webkit-scrollbar-track {
    background: #F1F0F0;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #6192BF;
    border-radius: 5px;
}
 
</style>