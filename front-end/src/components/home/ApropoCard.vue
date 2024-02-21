<template>
    <div class="w-full xl:w-1/3 2xl:w-1/4 h-screen bg-[#E1EEF8] fixed top-0 right-0 z-40 overflow-y-scroll no-scrollbar px-4 py-6">
        <div class="w-full flex flex-col items-end lg:px-6 lg:py-4">
            <div @click.prevent="callClose" class="w-9 h-9 2xl:w-[42px] 2xl:h-[42px] mb-8 flex items-center justify-center rounded-full border-[3px] 2xl:border-4 border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                <img src="../../assets/close.svg" alt="close">
            </div>
            <div class="bg-white-color text-dark-blue w-full rounded-3xl px-5 py-8 space-y-8">
                <div class="flex flex-col space-y-5 lg:px-5">
                    <h1 class="text-base 2xl:text-lg font-bold uppercase">À PROPOS DE LIVRÉEO</h1>
                    <div class="space-y-3">
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/about/how-we-are">Livréeo recructe </router-link></p>
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/about/livero-criche">Résponsabilité des entreprises </router-link></p>
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/">Parrainer-un-ami</router-link></p>
                    </div>
                </div>
                <div class="flex flex-col space-y-5 lg:px-5">
                    <h1 class="text-base 2xl:text-lg font-bold uppercase">Service Client</h1>
                    <div class="space-y-3">
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/contactez-nous">Contactez-nous</router-link></p>
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/about/Livreson">Modalité de livraison  </router-link></p>
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/about/router-polic">Politique de retour</router-link></p>
                    </div>
                </div>
                <div class="flex flex-col space-y-5 lg:px-5">
                    <h1 class="text-base 2xl:text-lg font-bold uppercase">Informations</h1>
                    <div class="space-y-5">
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/about/condition-general">Conditions générales de ventes</router-link> </p>
                        <p class="text-base 2xl:text-lg font-light"><router-link to="/">confidentialité et les Cookies</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const emit = defineEmits(['closeM'])

const callClose = () => {
    emit('closeM')
}

</script>