<template>
    <div :class="{ 'shadow-scroll': isScrolled }" class="w-full py-4 sticky z-40 top-0 bg-white-color backdrop-blur-xl">
        <div class="w-full container flex items-center justify-between">
            <router-link to="/">
                <div class="flex items-center">
                    <img src="../assets/logo-liv.svg" class="w-[194px] h-[64px]" alt="Logo">
                </div>
            </router-link>
            <div class="hidden xl:flex items-center mt-2">
                <ul class="w-full flex items-center space-x-12">
                    <li v-for="link in navlinks" :key="link.id" class="font-poppins text-[12px] xl:text-[13px] 2xl:text-[16px] font-normal text-dark-blue hover:border-b border-accent-color"><router-link :to="link.path">{{ link.title }}</router-link></li>
                </ul>
            </div>
            <div class="flex items-center space-x-10">
                <img @click="showCart" src="../assets/sack.svg" class="cursor-pointer" alt="" srcset="">
                <div @click="showApropoCard" class="bg-[#004079] hover:bg-[#005082] w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center cursor-pointer transition duration-200 ease-in-out">
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

    <ApropoCard v-if="ShowCard" @closeM="hideApropoCard" />

    <CartHomePage v-if="ShowCart" @closeC="hideCart" />
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ApropoCard from './home/ApropoCard.vue';
import CartHomePage from './home/CartHomePage.vue';

const ShowCard = ref(false);
const ShowCart = ref(false);

const showApropoCard = () => {
    ShowCard.value = true;
};

const hideApropoCard = (obj) => {
    ShowCard.value = false;
}


const showCart = () => {
    ShowCart.value = true;
};

const hideCart = (obj) => {
    ShowCart.value = false;
}

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

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>


.shadow-scroll {
    box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(7px);
}


</style>