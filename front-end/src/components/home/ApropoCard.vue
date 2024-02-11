<template>
    <div class="w-[536px] h-screen bg-[#E1EEF8] fixed top-0 right-0 z-40 overflow-y-scroll no-scrollbar ">
        <div class="w-full px-10 py-16 flex flex-col items-end space-y-[52px]">
            <div @click.prevent="callClose" class="w-[42px] h-[42px] flex items-center justify-center rounded-full border-4 border-dark-blue cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                    <g clip-path="url(#clip0_2358_4948)">
                    <path d="M5 14L19 14" stroke="#5A7BA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 9.33333L5 14" stroke="#5A7BA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 18.666L5 13.9993" stroke="#5A7BA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2358_4948">
                    <rect width="28" height="24" fill="white" transform="translate(0 28) rotate(-90)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="bg-white-color text-dark-blue w-full rounded-3xl py-12 px-14 space-y-10">
                <div class="flex flex-col space-y-4">
                    <h1 class="text-[19px] font-bold">À PROPOS DE LIVRÉEO</h1>
                    <div class="space-y-3">
                        <p class="text-[19px] font-light"><router-link to="/about/how-we-are">Livréeo recructe </router-link></p>
                        <p class="text-[19px] font-light"><router-link to="/">Résponsabilité des entreprises </router-link></p>
                        <p class="text-[19px] font-light"><router-link to="/">Parrainer-un-ami</router-link></p>
                    </div>
                </div>

                <div class="flex flex-col space-y-4">
                    <h1 class="text-[19px] font-bold">Service Client</h1>
                    <div class="space-y-3">
                        <p class="text-[19px] font-light"><router-link to="/contactez-nous">Contactez-nous</router-link></p>
                        <p class="text-[19px] font-light"><router-link to="/">Modalité de livraison  </router-link></p>
                        <p class="text-[19px] font-light"><router-link to="/">Politique de retour</router-link></p>
                    </div>
                </div>

                <div class="flex flex-col space-y-4">
                        <h1 class="text-[19px] font-bold">Informations</h1>
                        <div class="space-y-5">
                            <p class="text-[19px] font-light"><router-link to="/about/condition-general">Conditions générales de ventes</router-link> </p>
                            <p class="text-[19px] font-light"><router-link to="/">confidentialité et les Cookies</router-link></p>
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