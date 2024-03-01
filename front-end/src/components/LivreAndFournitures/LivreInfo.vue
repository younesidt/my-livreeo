<template>
    <div class="w-52 flex flex-col items-center">
        <img :src="props.options.image" alt="livre">
        <div class="w-full flex flex-col text-[#5A7BA0] items-start">
            <h2 class="text-lg font-medium pb-4">{{ props.options.name }}</h2>
            <p class="text-xs font-light">ISBN : 978-2013953115</p>
            <p class="text-xs font-light">Année : 2016</p>
            <p class="text-xs font-light">Edition : Hachette</p>
            <p class="text-xs font-light">Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca</p>
        </div>
    </div> 
</template>
<script setup>

const props = defineProps({
    options: Array
})

</script>