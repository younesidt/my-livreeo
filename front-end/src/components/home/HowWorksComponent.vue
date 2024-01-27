<template>
    <div class="w-full container m-auto">
        <div class="w-full flex justify-center items-center">
            <p class="font-Poppins text-dark-blue font-bold text-[41px] md:mb-[100px]">Comment ça marche ?</p>
        </div>
        <div class=" flex md:flex-row flex-col justify-between items-center">
            <div v-for="item in data" :key="item.id" class="w-full flex flex-col items-center justify-center my-[24px]">
                <p class="font-Poppins font-normal text-dark-blue text[26px] mb-[80px]">{{ item.title }}</p>
                <img v-if="item.id == 1" src="../../assets/comand.svg" class="md:h-[255px] h-[155px]">
                <img v-if="item.id == 2" src="../../assets/family.svg" class="md:h-[255px] h-[155px]">
                <img v-if="item.id == 3" src="../../assets/deliver.svg" class="md:h-[255px] h-[155px]">
                <p class="font-Poppins font-normal text-dark-blue text[24px] w-3/5 text-center mt-[96px]">{{ item.contant }}</p>
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