<template>
    <div class="w-full bg-[#F0F0F0] min-h-screen">
        <div class="container">
            <div class="w-full flex flex-col items-center justify-center space-y-12">
                <div class="flex justify-center items-center pt-16">
                    <p class="font-bold text-dark-blue text-[30px] md:text-[41px]">Choisir son pack</p>
                </div>
                <div class="w-full flex flex-col md:flex-row items-start justify-center space-y-10 md:space-y-0 xl:space-x-16">
                    <div v-for="pack in packs" :key="pack.id" class="w-full space-y-6 flex justify-center items-center flex-col">
                        <img src="../assets/Boxe.webp" class="" alt="">
                        <div class="w-full px-10">
                            <RouterLink to="/city">
                                <button :class="`bg-dark-blue text-[16px] xl:text-[26px] font-medium text-white-color w-full  rounded-full flex flex-col justify-center items-center ${pack.description == '' ? 'py-[22px]' :'py-3' }`" @click="selectPack(pack, pack.id)">
                                    {{ pack.title }} 
                                    <span class="font-light text-sm leading-normal">{{ pack.description }}</span>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
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