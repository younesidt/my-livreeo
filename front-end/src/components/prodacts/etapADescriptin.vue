<template>
                <div class="w-full flex flex-row items-center md:rounded-[41px] rounded-3xl  md:p-8 p-4 bg-[#F0F9FF] justify-center">
                    <div class="w-2/3 text-dark-blue">
                        <button @click="toggaleAn()" class="px-8 py-2 text-white-color font-semibold md:text-[22px] text-[11px] my-4 rounded-full flex flex-row justify-between items-center bg-dark-blue">Étape 1 
                            <svg width="15%" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3361 10.2333L10.168 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 10.2333L10.1681 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <h1 class="text-[13px] md:text-[27px] font-medium">Choisir ses Manuels Scolaires : </h1>
                        <p v-if="showAn = true" class="md:text-[16px] text-[8px]">Chaque manuel proposé par Livréeo est rigoureusement sélectionné pour s'aligner avec les listes officielles des établissements scolaires. Avec l'intégration systématique de l'ISBN, nous assurons une correspondance exacte entre les ouvrages recommandés par les enseignants et ceux que vous recevrez. Besoin d'ajuster votre panier ? Retirez en un clic ce que vous ne souhaitez pas acheter, pour une commande sur mesure.</p>
                    </div>
                    <div class="w-1/3">
                        
                    </div>
                </div>
</template>
<script setup>
let showAn = false;
function toggaleAn(){
    showAn = !showAn;
    return showAn;
    }
</script>