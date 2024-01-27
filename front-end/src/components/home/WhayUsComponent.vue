<template>
    <div class="w-full">
        <div class="mx-auto container flex flex-col justify-between items-center">
            <div class="flex justify-center flex-col items-center font-Poppins">
                <p class="font-semibold text-[41px] text-dark-blue uppercase">3 RAISONS</p>
                <p class=" font-light text-[18px] text-light-blue">D'utiliser Livreeo.ma</p>
            </div>
            <div class="w-full flex md:flex-row flex-col justify-between items-center my-[36px] font-Poppins">
                <div class="md:w-1/4 h-auto w-3/4 flex flex-col justify-between items-center my-[36px] " v-for="item in content" :key="item.id">
                    <img src="../../assets/simplicon.svg" alt="" srcset="" v-if="item.id == 1">
                    <img src="../../assets/lamp.svg" alt="" srcset="" v-if="item.id == 2">
                    <img src="../../assets/emojismiling.svg" alt="" srcset="" v-if="item.id == 3">
                    <p class="font-medium text-[31px] text-dark-blue my-[31px]">{{ item.title }}</p>
                    <p class="text-center w-full font-normal text-[18px] text-soft-dark-blue">{{ item.text }}</p>
                </div>
            </div>
            <div class="my-[100px]">
                <button class="bg-soft-dark-blue text-white-color font-Poppins font-semibold text-[22px] px-[48px] py-[12px] rounded-full">Je Commande</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const content = [
    {
        id:1,
        title:'Simple ',
        text:'Avant pour préparer la rentrée, c’était un temps fou perdu dans les rayons et une attente interminable en caisse ! Avec Livréeo.ma, les courses pour la rentrée des classes de votre enfant se font en quelques clics.',
    },
    {
        id:2,
        title:'Malin',
        text:'On a mis la main sur la liste des fournitures scolaires de votre enfant pour vous simplifier la vie à la rentrée. Dites-nous juste son école et sa classe, et on vous prépare le pack qui colle au plus près de sa liste. Vous nous remercierez plus tard !',
    },
    {
        id:3,
        title:'Économique',
        text:'Nos packs ne sont pas uniquement pratiques, ils vous permettent aussi de faire des économies. Avec Livréeo.ma, vous bénéficierez toujours d’une sélection de produits et de marques référencées au meilleur rapport qualité-prix.',
    }
]
</script>