<template>
    <div class="mx-auto ">
        <div class="m-auto container flex flex-col justify-center items-center">
            <div class="w-full flex flex-row justify-between items-center py-[30px] border-b border-dark-blue" v-for="item in QandA" :key="item.id">
                <div class="w-3/4">
                    <p class="font-Poppins font-normal text-dark-blue md:text-[32px] text-[16px]">{{ item.qa }}</p>
                    <p v-if="showAn">{{ item.an }}</p>
                </div>
                <img src="../../assets/arrow.svg" @click="toggaleAn()" class="md:w-[50px] w-[50px] cursor-pointer">
            </div>
        </div>
    </div>
</template>
<script setup>
const QandA =[
    {
        id:1,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:'hhhhhhhhhh'
    },
    {
        id:2,
        qa:'Qu’elle est le délais de livraison ?',
        an:''
    },
    {
        id:3,
        qa:'Par quel moyen obtenons nous les listes scolaires ',
        an:''
    },
    {
        id:4,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:''
    },
    {
        id:5,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:''
    },
    {
        id:6,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:''
    }
]
let showAn = false;
function toggaleAn(){
    showAn = !showAn;
    return showAn;
    }
</script>