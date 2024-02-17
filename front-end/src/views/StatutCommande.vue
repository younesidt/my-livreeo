<template>
    <div class="container mx-auto max-w-7xl text-dark-blue py-12 px-24">
        <h1 class="text-xl font-semibold leading-6">Commande Nº 78GH78LIV</h1>
        <div class="flex w-full items-center justify-between py-6">
            <div class="flex items-center space-x-3">
                <div class="flex items-center justify-center bg-[#E1EEF8] rounded-full w-10 h-10">
                    <div class="flex items-center justify-center bg-[#6192BF] w-7 h-7 rounded-full">
                        <div class="bg-[#004079] w-3 h-3 rounded-full">
                        </div>
                    </div>
                </div>
                <p class="text-lg font-semibold text-[#6192BF] leading-6">Statut :  <span class="font-medium">Encore - 2 jours Restant</span></p>
            </div>
            <div class="flex items-center space-x-3 hover:text-[#004179e4] cursor-pointer transition duration-200 ease-in-out">
                <p class="text-base font-normal">Télécharger le rapport format PDF</p>
                <div class="bg-[#004079] hover:bg-[#004179e4] transition duration-200 ease-in-out rounded-full px-4 py-1" type="button">
                    <img src="../assets/download.svg" class="w-6" alt="download">
                </div>
            </div>
        </div>
        <div class="flex items-end w-full justify-between">
            <div class="flex flex-col items-start space-y-4">
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-base font-semibold">Date de Commande :</h3>
                    <p class="text-sm font-normal">15/06/2023</p>
                </div>
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-base font-semibold">Date de Livraison :</h3>
                    <p class="text-sm font-normal">22/06/2023</p>
                </div>
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-base font-semibold">Modalité de livraison :</h3>
                    <p class="text-sm font-normal">Livraison Express</p>
                </div>
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-base font-semibold">Commande details :</h3>
                    <p class="text-sm font-normal">Pack Livres + Pack Fournitures</p>
                    <p class="text-sm font-normal">1 900 DHS</p>
                    <p class="text-sm font-normal">Livraison Gratuite</p>
                </div>
            </div>
            <div class="flex">
                <button class="bg-dark-blue rounded-full text-sm font-light hover:bg-[#004179e4] text-white-color transition duration-200 ease-in-out px-8 py-3">Faire une réclamation</button>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>