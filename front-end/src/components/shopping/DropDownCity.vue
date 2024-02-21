<template>
    <div class="py-[17px] md:py-[40px]">
            <p class="font-bold text-dark-blue md:text-[23px] text-[13px]">
                1. Dans quelle ville habitez vous ?
            </p>
            <div class="py-[11px] md:py-[18px]">
                <select @change="store.selectCity($event)" class="appearance-none p-[12px] md:p-[25px] font-medium text-soft-dark-blue text-[15px] md:text-[18px] bg-white-blue w-3/4 rounded-full border border-dark-blue peer-checked:ring-2 ring-dark-blue" :class=" 'border border-dark-blue hover:ring-2 ring-dark-blue text-dark-blue'&& clicked == true  " @click="clicked != clicked">
                    <option v-for="city in citys" :value="city.id" class="bg-none" @click="">{{ city.ville }}</option>
                </select>
            </div>
        </div>
</template>

<script setup>
let clicked = false;
import { ref, onMounted, computed } from "vue";
import { useCityStore } from "../../stors/cityStore";
const store = useCityStore();
const msg = ref("Welcome to my Vuex Store");
const getshoole = computed(()=>{
return shoole.getShools()
})

const getCitys = computed(() => {
return store.getCitys;
});
const citys = computed(() => {
return store.citys;
});

onMounted(() => {
store.fetchCitys();
});
</script>