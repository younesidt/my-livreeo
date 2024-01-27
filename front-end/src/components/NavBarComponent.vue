<template>
    <div class="w-full md:h-[115px] shadow-lg shadow-black/50 sticky z-40 top-0 bg-white-color opacity-70 ">
        <div class="md:h-[115px]  w-full container flex flex-row flex-wrap m-auto md:justify-between items-end pb-[24px]">
            <div class="w-1/5">
                <img src="../assets/navLogo.svg" alt="Logo">
            </div>
            <div class="w-3/5 hidden md:flex justify-between flex-wrap">
                <ul class="w-full flex flex-row flex-wrap justify-between items-center pb-[12px] ">
                    <li v-for="link in navlinks" :key="link.id" class="font-poppins text-[16px] text-dark-blue  hover:border-b border-accent-color"><router-link :to="link.path">{{ link.title }}</router-link></li>
                </ul>
            </div>
            <div class="w-1/5 flex flex-row md:justify-between items-center sm:pb[24px] ">
                <img src="../assets/sack.svg" alt="" srcset="" class="md:ml-[100px] m-0">
                <img src="../assets/birgrbar.svg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>
<script setup>
const navlinks = [
    {
        id : 1,
        title: 'Pack',
        path: ''
    },
    {
        id : 2,
        title: 'Accessoires Scolaires',
        path: ''
    },
    {
        id : 3,
        title: 'Listes Scolaires',
        path: ''
    },
    {
        id : 4,
        title: 'Partenariats Associatifs',
        path: ''
    },
    {
        id : 5,
        title: 'Suivre Ma Commande',
        path: ''
    }
]

</script>