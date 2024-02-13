<template>
<div class="flex flex-col space-y-4">
    <label for="countries" class="text-base font-medium dark:text-white">{{ labale }}</label>
    <select id="countries" class="rounded-full ring-2 ring-dark-blue focus:ring-4 focus:ring-dark-blue focus:outline-none text-[#6192BF] text-sm font-medium w-44 py-3">
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