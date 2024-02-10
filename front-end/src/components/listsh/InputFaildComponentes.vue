<template>
<div class="md:w-1/4 w-full my-[12px]">
    <label for="countries" class="block mb-[30px] text-[22px] font-medium text-dark-blue font-Poppins dark:text-white">{{ labale }}</label>
<select id="countries" class="bg-white-color/30 rounded-full border-2 border-black ring-2 ring-offset-0 ring-dark-blue text-[#6192BF]/30 text-[18px] font-Poppins font-medium block w-full p-4">
<option selected>{{ text }}</option>
<option value="US">United States</option>
</select>
</div>

</template>
<script setup>
const props = defineProps({
    labale:{
        type: String,
        defualt:'',
    },
    text:{
        type: String,
        defualt:'',
    },
    option:{
        type: Array,
        defualt:[],
    }
})
</script>