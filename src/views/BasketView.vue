<template>
    <div class="bg-[#E1EEF8]">
        <div class="container mx-auto max-w-7xl">
            <div class="w-full pl-40 pt-8 pb-5">
                <img src="../assets/back-arraw.svg" class="h-10 cursor-pointer" alt="back">
            </div>
            <div class="w-full flex items-start pb-16"> 
                <Panier />
                <div class="w-[40%] space-y-3">
                    <PromoCode />
                    <Recaptulatife />
                </div>
            </div>
            <!-- <div class="w-full flex items-start justify-evenly">
                    <div class="bg-white-color w-1/3 rounded-3xl px-8 pt-4 pb-10">
                        <h1 class="text-dark-blue font-bold text-[40px] pb-3">Panier</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel et quibusdam alias est, repellendus ex voluptate eum reprehenderit minima aut corporis incidunt numquam voluptates officiis quidem possimus laborum dicta?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel et quibusdam alias est, repellendus ex voluptate eum reprehenderit minima aut corporis incidunt numquam voluptates officiis quidem possimus laborum dicta?
                    </div>
                    <div class="w-1/4 bg-white-color rounded-3xl px-5 py-3 space-y-2">
                        <h3 class="text-dark-blue text-base font-medium">Saisir un code promo </h3>
                        <hr style="color: #EDEDED;">
                        <div class="flex items-center justify-between">
                            <div>
                                <input type="text" placeholder="LIVR456HG" class="placeholder:text-[#EDEDED] focus:outline-none text-base">
                            </div>
                            <div>
                                <button class="text-white-color bg-dark-blue hover:bg-[#004179e5] text-sm rounded-full font-light px-4 py-1">Valider</button>
                            </div>
                        </div>
                    </div>
                </div> -->
        </div>
    </div>    
    <SiteMapComponentVue/>
</template>
<script setup>
import Panier from '../components/basket/Panier.vue';
import PromoCode from '../components/basket/PromoCode.vue';
import Recaptulatife from '../components/basket/Recaptulatife.vue';

import SiteMapComponentVue from '../components/SiteMapComponent.vue'
</script>

