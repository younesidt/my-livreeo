<template>
    <div class="container flex flex-col items-center justify-between">
            <div class="w-full md:w-3/4 py-[28px] font-extrabold md:text-[23px] text-[12px">{{ articl }} </div>
            <div class="md:w-3/4 w-full md:text-[23px] text-[12px font-light">
                {{ content }}
            </div>
        </div>
</template>
<script setup>
const props = defineProps({
    articl:{
        type:String,
        default:'',
    },
    content:{
        type:String,
        default:'',
    }
})
</script>