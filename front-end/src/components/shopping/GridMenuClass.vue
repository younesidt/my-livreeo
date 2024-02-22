<template>
    <div class="py-[17px] md:py-[40px]">
        <p class="font-bold text-dark-blue md:text-[23px] text-[13px]">
            3. Quelle est la classe de votre enfant ?
        </p>
        <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-[15px] md:text-[18px] py-[11px] md:py-[18px]">
            <div class="p-[6px]  text-soft-dark-blue  bg-white-blue  rounded-full border border-dark-blue flex items-center flex-col" v-for="item in clases">
                <span class="">{{ item.id }}</span>
                <span class="">{{ item.nom }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

import {  useClassStore } from "../../stors/classStore"
const store =   useClassStore();
const msg = ref("Welcome to my Vuex Store");
const getClases = computed(()=>{
return store.getClases()
})
const clases = computed(() => {
return store.clases;
});

onMounted(() => {
store.fetchClass();
});
</script>