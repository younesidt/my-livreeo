<template>
    <div class="container mx-auto max-w-7xl pt-12">
        <div class="w-full flex items-center justify-center pb-12">
            <h1 class="text-xl md:text-3xl font-medium text-[#3273BA]">Comment ça marche ?</h1>
        </div>
        <div class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-16 lg:space-y-0">
            <div class="w-full lg:w-1/3 flex flex-col items-center space-y-4 lg:space-y-10">
                <h3 class="text-[#3273BA] text-sm md:text-base font-semibold">Étape 1 </h3>
                <div class="flex items-center h-[300px]">
                    <img src="../../assets/etape1.svg" class="h-[200px]" alt="">
                </div>
                <p class="text-[#3273BA] text-sm font-semibold text-center w-2/3 lg:w-3/5">Commander la Liste Personnalisée de Votre Enfant</p>
            </div>
            <img src="../../assets/etapeb.svg" class="hidden xl:block absolute w-[150px] left-[330px] xl:left-[380px]" alt="">
            <div class="w-full lg:w-1/3 flex flex-col items-center space-y-4 lg:space-y-10">
                <h3 class="text-[#3273BA] text-sm md:text-base font-semibold">Étape 2 </h3>
                <img src="../../assets/etape2.svg" class="h-[300px]" alt="">
                <p class="text-[#3273BA] text-sm font-semibold text-center w-2/3">Profiter de vos vacances l'esprit tranquille</p>
            </div>
            <img src="../../assets/etapeb.svg" class="hidden xl:block absolute w-[150px] right-[300px] xl:right-[350px]" alt="">
            <div class="w-full lg:w-1/3 flex flex-col items-center space-y-4 lg:space-y-10">
                <h3 class="text-[#3273BA] text-sm md:text-base font-semibold">Étape 3 </h3>
                <div class="flex items-center h-[300px]">
                    <img src="../../assets/etape3.svg" class="h-[200px]" alt="">
                </div>
                <p class="text-[#3273BA] text-sm font-semibold text-center w-1/2">Faites-vous livrer à votre Rythme</p>
            </div>
        </div>
    </div>
    <!-- <div class="w-full container pb-20">
        <div class="w-full flex justify-center items-center">
            <p class="font-Poppins text-dark-blue font-bold text-[41px] mb-16 md:mb-24">Comment ça marche ?</p>
        </div>
        <div class="flex md:flex-row flex-col justify-between items-center">
            <div v-for="item in data" :key="item.id" class="w-full flex flex-col items-center justify-center space-y-10">
                <div>
                    <p class="font-Poppins font-normal text-dark-blue text-[26px] leading-[24px]">{{ item.title }}</p>
                </div>
                <div>
                    <img v-if="item.id == 1" src="../../assets/comand.svg" class="h-64">
                </div>
                <div><img v-if="item.id == 2" src="../../assets/family.svg" class="h-64"></div>
                <div><img v-if="item.id == 3" src="../../assets/deliver.svg" class="h-64"></div>
                <div class="flex items-center justify-center">
                    <p class="font-Poppins font-normal text-dark-blue text-[24px] leading-[24px] w-3/4 text-center">{{ item.contant }}</p>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script setup>
    const data = [
        {
            id:1,
            title:'Etape 1',
            contant: 'Commander la Liste Personnalisée de Votre Enfant',
            imgpath:'../../assets/comand.svg',
        },
        {
            id:2,
            title:'Etape 2',
            contant: "Profiter de vos vacances l'esprit tranquille",
            imgpath:'../../assets/family.svg',
        },
        {
            id:3,
            title:'Etape 3',
            contant: 'Faites-vous livrer  à votre Rythme',
            imgpath:'../../assets/deliver.svg',
        }
    ];
</script>