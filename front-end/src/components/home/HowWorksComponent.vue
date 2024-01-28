<template>
    <div class="w-full container pb-20">
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
    </div>
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
            contant: 'Profiter de vos vacances l’esprit tranquille',
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