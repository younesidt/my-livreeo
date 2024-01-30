<template>
    <div class="flex items-center justify-center px-44">
       <select class="text-dark-blue cursor-pointer text-opacity-40 text-lg font-medium py-6 w-[70%] px-8 outline-0 bg-[#DEEFF9] rounded-full flex items-center justify-between">
            <option>Casablanca</option>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
                <path d="M1 1L11 11" stroke="#6192BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 1L11 11" stroke="#6192BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </select>
    </div>
</template>
<script setup>
const props = defineProps({
    Data:{
        type: Array,
        default:[],
    },
    keyword:{
        type:String,
        default:'',
    },
    eventHundler:{
        type:Function,
    }
});

</script>

<style scoped>

</style>

