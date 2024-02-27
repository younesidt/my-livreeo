<template>
    <div class="w-full p-4 flex flex-row justify-center items-center">
                <button class="text-dark-blue font-semibold text-[12px] md:text-[20px] px-8 py-2 rounded-full bg-[#F0F9FF]">Selectionez Tous</button>
            </div>
            <div class="w-full p-4 flex flex-row justify-between items-start ">
                <div class="w-3/4 h-full overflow-y-scroll">
                    <div class="w-full text-dark-blue font-semibold text-[12px] md:text-[20px] py-2"><p>Name of the book</p></div>
                    <div class="w-full px-4 flex flex-row justify-between items-center scrole">
                        <div class="w-1/3 flex flex-row justify-evenly items-center">
                            <img :src="item.path" height="75%">
                            <p class="font-medium text-dark-blue text-[8px] md:text-[16px]">{{ item.name }}</p>
                        </div>
                        <div class="w-2/3 flex flex-row justify-evenly items-center">
                            <div class="font-medium text-white-color text-[9px] md:text-[18px] px-2 md:px-4 py-1 rounded-full bg-dark-blue flex flex-row justify-between items-center pointer">
                                <span @click="item.cont--" >-</span>
                                <span class="mx-2 md:mx-4">{{ item.cont }}</span>
                                <span @click="item.cont++">+</span>
                            </div>
                            <p class="font-medium text-dark-blue text-[9px] md:text-[18px]">{{ item.prix }} MAD</p>
                            <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3098_3904)">
                                    <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3098_3904">
                                        <rect width="34" height="33" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        
                    </div>
                </div>
                <div class="w-1/4 md:p-8 p-1">
                    <img src="../../assets/imagebook.png" class="w-full mb-4">
                    <p class="text-[11px] md:text-[22px] font-medium text-dark-blue">{{ item.name }}</p>
                    <div class="font-light text-[9px] md:text-[17px] text-dark-blue">
                        <p>{{ item.desc }}</p>
                        <p>{{ item.anne }}</p>
                        <p>{{ item.edition }}</p>
                        <p>{{ item.auteur }}</p>
                    </div>
                </div>
            </div>
</template>
<script setup>
import { ref } from 'vue'
const item = {
    name:'Fleurs d’encre',
    path:"../assets/imagebook.png",
    cont:ref(0),
    prix:300.000,
    desc:"ISBN : 978-2013953115",
    anne : 2016,
    edition : "Hachette",
    auteur:"Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
}
</script>