<template>
    <div class="w-[536px] h-screen bg-[#E1EEF8] fixed top-0 right-0 z-40 overflow-y-scroll no-scrollbar">
        <div class="w-full px-10 py-16 flex flex-col items-end space-y-[32px]">
            <div @click.prevent="callClose"
                class="w-[42px] h-[42px] flex items-center justify-center rounded-full border-4 border-dark-blue cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                    <g clip-path="url(#clip0_2358_4948)">
                        <path d="M5 14L19 14" stroke="#5A7BA0" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M9 9.33333L5 14" stroke="#5A7BA0" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M9 18.666L5 13.9993" stroke="#5A7BA0" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2358_4948">
                            <rect width="28" height="24" fill="white" transform="translate(0 28) rotate(-90)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="bg-white-color h-[417px] text-dark-blue w-full rounded-3xl py-6 px-8">
                <h1 class="text-dark-blue text-xl font-bold leading-relaxed">Panier</h1>
            </div>
            <div class="w-full text-dark-blue bg-gradient-to-b from-white-color to-[#E5EBFF00] rounded-3xl py-6 px-4">
                <h1 class="text-xl font-bold leading-relaxed">Récapitulatif</h1>
                <div class="space-y-2 px-2">
                    <div class="flex items-center justify-between pt-4">
                        <p class="text-[16px] font-light leading-relaxed">Sous-total</p>
                        <p class="text-center text-sky-900 text-[15px] font-bold leading-relaxed">3027,00 MAD</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-[16px] font-light leading-relaxed">Livraison</p>
                        <p class="text-center text-sky-900 text-[15px] font-semibold leading-relaxed">Calculé à l'étape suivante</p>
                    </div>
                    <div class="px-1 pt-3">
                        <hr>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-start">
                            <h1 class="text-[23px] font-bold leading-relaxed">Total</h1>
                            <p class="text-[12px] leading-[13px] font-light">TVA incluse</p>
                        </div>
                        <div>
                            <h3 class="text-center text-[18px] font-extrabold leading-relaxed">3027,00 MAD</h3>
                        </div>
                    </div>
                    <div class="w-full flex flex-col items-center justify-center pt-5">
                        <button class="bg-dark-blue rounded-full text-white-color leading-normal py-1 px-16 text-[16px] font-light">Choisir un autre pack</button>
                        <h3 class="text-base font-bold leading-relaxed">où</h3>
                        <button class="bg-dark-blue rounded-full text-white-color leading-normal py-1 px-24 text-[20px] font-semibold">Valider mon panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const emit = defineEmits(['closeC'])

const callClose = () => {
    emit('closeC')
}

</script>