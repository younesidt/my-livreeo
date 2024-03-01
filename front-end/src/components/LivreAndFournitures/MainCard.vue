<template>
    <Disclosure as="div" v-slot="{ open }" class="w-full flex items-center justify-center">
        <div class="w-[90%] border-[3px] px-8 py-8 rounded-[60px] border-dark-blue border-opacity-40">
            <!--Button-->
            <div class="w-full flex items-center justify-start rounded-[35px] bg-[#F0F9FF]">
                <div class="w-[55%] flex flex-col py-6 pl-8 pr-4">
                    <DisclosureButton class="w-32 flex items-center justify-between px-4 py-1.5 bg-dark-blue rounded-full font-semibold text-base text-white-color">
                        Étape 1
                        <img src="../../assets/top.svg" class="h-2" alt="top">
                    </DisclosureButton>
                    <h2 class="text-xl text-dark-blue font-semibold pt-3">Choisir ses Manuels Scolaires : </h2>
                    <p class="text-dark-blue text-sm font-normal">
                        Chaque manuel proposé par Livréeo est rigoureusement sélectionné pour s'aligner avec les listes officielles des établissements scolaires. Avec l'intégration systématique de l'ISBN, nous assurons une correspondance exacte entre les ouvrages recommandés par les enseignants et ceux que vous recevrez. Besoin d'ajuster votre panier ? Retirez en un clic ce que vous ne souhaitez pas acheter, pour une commande sur mesure.
                    </p>
                </div>
                <div class="w-[45%] flex">
                    <div class="w-full h-full flex items-start">
                        <img src="../../assets/MyBooks.jpg" class="w-full h-[250px]" alt="books">
                    </div>
                </div>
            </div>
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <DisclosurePanel class="flex flex-col">
                    <div class="w-full flex"> 
                        <div class="w-[70%] mt-6">
                            <div class="w-full flex items-center justify-end pr-12">
                                <button class="font-semibold text-dark-blue text-base bg-[#F0F9FF] py-1.5 px-8 rounded-full">Selectionez Tous</button>
                            </div>   
                                    <div class="max-h-[400px] overflow-y-auto space-y-6">
                                        <div v-for="(livres, category) in livresByCategory" :key="category">
                                            <Listbox :model-value="props.modalClass" multiple>
                                            <ListboxOptions static>
                                            <div class="w-full flex flex-col items-start">
                                                <h3 class="text-base font-semibold text-dark-blue pl-1">{{ category }}</h3>
                                                <!-- as="template"-->
                                                <ListboxOption 
                                                  v-for="livre in livres" 
                                                  :key="livre.id" 
                                                  :value="livre"
                                                  v-slot="{ selected }"
                                                  class="w-full flex items-center pt-2"
                                                >
                                                    <div class="w-1/2 flex items-center space-x-4 pl-10">
                                                        <div @click="selectedLivre = livre" class="w-12 cursor-pointer">
                                                            <img :src="livre.image" alt="livre">
                                                        </div>
                                                        <p class="text-dark-blue text-sm font-medium">{{ livre.name }}</p>
                                                    </div>
                                                    <div class="w-1/2 flex items-center justify-evenly">
                                                        <div class="h-7 rounded-full text-[15px] font-normal flex items-center px-6 space-x-4 bg-dark-blue text-white-color">
                                                            <div>
                                                                -
                                                            </div>
                                                            <div>
                                                                1
                                                            </div>
                                                            <div>
                                                                +
                                                            </div>
                                                        </div>
                                                        <p class="text-dark-blue text-[15px] font-medium">{{ livre.prix }} MAD</p>
                                                        <div
                                                        :class="{
                                                            'bg-dark-blue': selected,
                                                            '': !selected,
                                                        }"
                                                        >
                                                            <input type="checkbox" :name="livre.name">
                                                        </div>
                                                        <!-- <svg width="24" height="23" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_3098_3904)">
                                                                <path d="M12.75 15.1251L31.5 8.25L42.8333 -2.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M28.3346 16.5V24.75C28.3346 25.4793 28.0361 26.1788 27.5048 26.6945C26.9734 27.2103 26.2527 27.5 25.5013 27.5H8.5013C7.74986 27.5 7.02919 27.2103 6.49783 26.6945C5.96648 26.1788 5.66797 25.4793 5.66797 24.75V8.25C5.66797 7.52065 5.96648 6.82118 6.49783 6.30546C7.02919 5.78973 7.74986 5.5 8.5013 5.5H21.2513" stroke="#004079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_3098_3904">
                                                                    <rect width="34" height="33" fill="white"/>
                                                                </clipPath>
                                                            </defs>
                                                        </svg> -->
                                                    </div>
                                                </ListboxOption>
                                            </div>
                                        </ListboxOptions>
                                        </Listbox> 
                                        </div>
                                    </div>  
                        </div>
                        <div class="w-[30%] flex items-center justify-center mt-6">
                            <LivreInfo 
                            :options="selectedLivre"
                            />
                        </div>
                    </div>    
                    <div class="w-full flex items-center justify-between pt-8 pl-10 pr-52">
                        <div>
                            <h3 class="text-base font-semibold text-dark-blue">TOTAL = 1 080.00 DHS</h3>
                        </div>
                        <div>
                            <button class="bg-dark-blue text-white-color text-base font-semibold rounded-full py-3 px-5">Ajouter au panier (4 articles)</button>
                        </div>
                    </div> 
                </DisclosurePanel> 
            </transition>                 
        </div>
    </Disclosure>
</template>

<script setup>
//vue import
import { ref, watch } from 'vue'

//components
import LivreInfo from './LivreInfo.vue'

//HeadlessUI
import { Disclosure, DisclosureButton, DisclosurePanel, Listbox, ListboxOptions, ListboxOption, } from '@headlessui/vue'

const props = defineProps({
    modalClass: [Number],
    livres: Array,
})

// watch(props.modalClass, (newValue, oldValue) => {
//   if (newValue !== null) {
//     console.log(props.modalClass);
//   }
// });


const selectedLivre = ref(props.livres[0])

// Group books by category
const livresByCategory = props.livres.reduce((acc, livre) => {
    acc[livre.categorie] = acc[livre.categorie] || [];
    acc[livre.categorie].push(livre);
    return acc;
}, {});

</script>


<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
}
 
/* Track */
::-webkit-scrollbar-track {
    background: #F1F0F0;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #6192BF;
    border-radius: 5px;
}
 
</style>