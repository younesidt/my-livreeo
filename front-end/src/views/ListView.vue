<template>
    <div class="w-full h-full">
        <div class="container m-auto flex items-center justify-between flex-col md:flex-row md:pt-[80px] pt-[32px]">
            <div class="flex  flex-col justify-between items-center md:items-start">
                <p class="font-Poppins font-bold text-dark-blue text-[25px] md:pb-[100px] pb-[32px]">Liste de fourniutres scolaires : 5 ème - Lycée lyautey </p>
                <div class="flex flex-row items-center w-full">
                    <p class="font-Poppins text-[21px] mr-[12px] mb-[30px]">Télécharger vôtre liste format PDF</p>
                    <img src="../assets/icon-dow.svg">
                </div>
                <p class="font-Poppins text-[21px] mb-[80px]">Nous avons la liste officielle de votre enfant, <br> Faite vous livrée à un prix imbattable en <span class=" underline decoration-2 underline-offset-2 font-bold text-dark-blue text-[25px] "> cliquant ici</span></p>
                <button class="bg-dark-blue rounded-full px-15 py-4 text-xl font-semibold leading-normal text-white-color mt-[35px] b-0"><router-link to="/packs">Faire Son Shopping</router-link></button>
            </div>
            <div class="w-1/2 flex justify-end items-end">
                <img src="">
                <img src="../assets/pdf-img.png" class="h-[639px]">
            </div>
        </div>
    </div>
</template>
<script setup>

</script>