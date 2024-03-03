<template>
    <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg rounded-3xl flex flex-col items-center cursor-pointer">
        <img :src="props.image" class="h-28 p-1.5" alt="card">
        <p class="text-dark-blue font-semibold pb-3 pt-2 text-lg">{{props.name}}</p>
        <div 
        :class="props.cart === 0 ? 'bg-[#CBCCCC]' : 'bg-dark-blue'"
        class="absolute -top-1 -right-3 w-10 h-10 rounded-full flex items-center justify-center">
            <img src="../../assets/panier.svg" class="h-6" alt="">
            <img v-if="props.cart !== 0" src="../../assets/panier2.png" class="absolute pt-2 w-2" alt="">
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    cart: Number,
    name: {
        Type: String,
        default: ""
    },
    image: {
        Type: File,
        default: "../../assets/manuels.svg"
    },
})

</script>