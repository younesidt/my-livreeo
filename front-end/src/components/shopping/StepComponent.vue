<template>
    <div class="container w-full m-auto">
        <p class="w-full text-center font-Poppins font-bold text-dark-blue text-[23px]">{{ text }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        defualt: 'step description showed her'
    },
}
)
</script>