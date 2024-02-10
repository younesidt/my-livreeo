<template>
<div class="w-full flex items-center justify-center flex-col">
    <div class="flex items-center justify-center flex-col  py-[60px]">
        <div class="flex items-center justify-between flex-col">
            <p class="w-full text-center font-Poppins font-bold text-dark-blue text-[23px]">Listes Scolaires</p>
            <p class="w-full text-center font-Poppins text-dark-blue font-medium md:text-[25px] text-[18px] leading-[50px] py-[35px]">Trouvez la liste scolaire téléchargeable de votre enfant en 3 clics! </p>
        </div>
    </div>
    <div class="w-full flex flex-col md:flex-row justify-between items-center md:px-[60px] px-[12px]"> 
            <InputFaildComponentes labale="Ville :" text="Casablanca"/>
            <InputFaildComponentes labale="École :" text="Lycée lyautey "/>
            <InputFaildComponentes labale="Classe :" text="5 ème "/>
    </div>
    <button class="bg-dark-blue rounded-full px-15 py-4 text-xl font-semibold leading-normal text-white-color mt-[35px]"><router-link to="/list-view">Suivant</router-link></button>
</div>
</template>
<script setup>
import InputFaildComponentes from '../components/listsh/InputFaildComponentes.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
</script>