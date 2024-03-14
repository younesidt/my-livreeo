<template>
    <div class="flex flex-row md:flex-col items-start px-2 md:px-8 xl:px-12 space-x-3 md:space-x-0">
        <div class="w-full flex items-center justify-center pt-4 pb-2"><!--w-36 md:w-40 lg:w-64-->
            <img :src="props.options.image" class="h-44 xl:h-64" alt="product">
        </div>
        <div class="w-full flex flex-col text-[#5A7BA0] items-start">
            <div class="grid grid-cols-5 gap-x-3 gap-y-1 pb-2">
                <div class="flex items-center justify-center">
                    <input type="radio" name="checkbox-col" id="checkbox13" class="hidden" v-model="checkedColor" value="blue">
                    <label class="relative cursor-pointer" for="checkbox13">
                        <div v-if="checkedColor !== 'blue'" class="w-8 h-8 rounded-full bg-dark-blue"></div>
                        <div v-if="checkedColor === 'blue'" class="flex items-center justify-center w-10 h-10 rounded-full bg-dark-blue">
                            <div class="bg-[#FFFFFF] flex items-center justify-center w-8 h-8 rounded-full">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.17143L4.14286 7L9 1" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="flex items-center justify-center">
                    <input type="radio" name="checkbox-col" id="checkbox14" class="hidden" v-model="checkedColor" value="dark">
                    <label class="relative cursor-pointer" for="checkbox14">
                        <div v-if="checkedColor !== 'dark'" class="w-8 h-8 rounded-full bg-[#000]"></div>
                        <div v-if="checkedColor === 'dark'" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#000]">
                            <div class="bg-[#FFFFFF] flex items-center justify-center w-8 h-8 rounded-full">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.17143L4.14286 7L9 1" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <span class="text-sm md:text-lg font-medium pb-2">{{ props.options.name }}</span>
            <p class="text-[8px] md:text-xs font-light">ISBN : 978-2013953115</p>
            <p class="text-[8px] md:text-xs font-light">Année : 2016</p>
            <p class="text-[8px] md:text-xs font-light">Edition : Hachette</p>
            <p class="text-[8px] md:text-xs font-light">Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca</p>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue'



const props = defineProps({
    options: Array
})

const checkedColor = ref('')

</script>