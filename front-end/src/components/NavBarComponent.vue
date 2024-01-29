<template>
    <div class="w-full py-4 shadow-lg shadow-black/50 sticky z-40 top-0 bg-white-color">
        <div class="w-full container flex items-center justify-between">
            <div class="flex items-center">
                <img src="../assets/logo-liv.svg" class="w-[194px] h-[64px]" alt="Logo">
            </div>
            <div class="hidden md:flex items-center mt-2">
                <ul class="w-full flex items-center space-x-12">
                    <li v-for="link in navlinks" :key="link.id" class="font-poppins text-[16px] font-normal text-dark-blue hover:border-b border-accent-color"><router-link :to="link.path">{{ link.title }}</router-link></li>
                </ul>
            </div>
            <div class="flex items-center space-x-10">
                <img src="../assets/sack.svg" class="cursor-pointer" alt="" srcset="">
                <div class="bg-[#004079] hover:bg-[#005082] w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center cursor-pointer transition duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_2353_3481)">
                            <path d="M10.5 7.5L24.75 7.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 15H25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.25 22.5H15" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2353_3481">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
const navlinks = [
    {
        id : 1,
        title: 'Pack',
        path: '/packs'
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