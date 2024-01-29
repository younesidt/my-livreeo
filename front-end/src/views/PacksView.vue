<template>
    <div class="w-full h-fit flex flex-col justify-center items-center bg-[#F0F0F0]">
        <div class="contianer flex-col h-full justify-center items-center pb-[40px]">
            <div class="my-[70px] flex justify-center items-center">
                <p class="font-Poppins font-bold text-dark-blue text-[41px]">Choisir son pack</p>
            </div>
            <div class="w-full flex md:flex-row flex-col  justify-between items-center">
                <div v-for="pack in packs" :key="pack.id" class="w-full md:w-1/4 flex justify-center items-center flex-col">
                    <img src="../assets/Boxe.svg" alt="" srcset="">
                    <RouterLink to="/city">
                        <button class="bg-dark-blue text-[17px] font-medium text-white-color h-[73px] py-3 rounded-full mt-7 flex flex-col justify-center items-center w-[260px]" @click="selectPack(pack, pack.id)">
                            {{ pack.title }} <span class="font-Poppins font-light text-[14px]">{{ pack.description }}</span>
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const packs = [
    {
        id:1,
        title:'Pack Rentrée',
        description:'Fournitures + Livres',
    },
    {
        id:2,
        title:'Pack Fournitures',
        description:'',
    },
    {
        id:3,
        title:'Pack Livres',
        description:'',
    }
]
let selectedPack = null;
let selectedPackID = 0;
function selectPack(item, index){
    selectPack = item;
    selectedPackID = index;
    console.log(selectedPackID);
    return(selectedPack, selectedPackID)
}
</script>