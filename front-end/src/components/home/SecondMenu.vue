<template>
    <TransitionRoot appear :show="props.isOpen" as="template">
      <Dialog as="div" class="inset-0 relative z-50">
        <TransitionChild
          as="template"
          enter="transition duration-200 ease-in-out transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition duration-200 ease-in-out transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="fixed inset-0" />
        </TransitionChild>

        <div class="w-full h-screen fixed inset-0 top-0 overflow-y-scroll no-scrollbar font-Poppins backdrop-blur-sm"><!--bg-[rgb(188,188,188)]  bg-opacity-50-->
            <div class="w-full min-h-screen absolute top-0 right-0 xl:w-1/3 2xl:w-1/4 bg-[rgb(225,238,248)] px-4 py-6">
                <TransitionChild
                  as="template"
                  enter="transition-opacity duration-300 ease-linear"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="transition-opacity duration-300 ease-linear"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                <DialogOverlay class="w-full flex flex-col items-end lg:px-6 lg:py-4">
                    <div @click="setIsOpened(false)" class="w-9 h-9 2xl:w-[42px] 2xl:h-[42px] mb-8 flex items-center justify-center rounded-full border-[3px] 2xl:border-4 border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                        <img src="../../assets/close.svg" alt="close">
                    </div>

                    <!-- First menu (links) -->
                    <div v-if="props.typeMod === 'menu'" class="bg-white-color text-dark-blue w-full rounded-3xl px-5 py-8 space-y-8">
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold uppercase">À PROPOS DE LIVRÉEO</DialogTitle>
                            <div class="space-y-3">
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/how-we-are">Livréeo recructe</router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/livero-criche">Résponsabilité des entreprises</router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/">Parrainer-un-ami</router-link></p>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold uppercase">Service Client</DialogTitle>
                            <div class="space-y-3">
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/contactez-nous">Contactez-nous</router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/Livreson">Modalité de livraison  </router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/router-polic">Politique de retour</router-link></p>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold uppercase">Informations</DialogTitle>
                            <div class="space-y-5">
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/condition-general">Conditions générales de ventes</router-link> </p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/">confidentialité et les Cookies</router-link></p>
                            </div>
                        </div>
                    </div>

                    <!-- Second menu (panier + facture)-->
                    <div v-if="props.typeMod === 'panier'" class="w-full">
                      <div class="bg-white-color h-64 w-full justify-start rounded-2xl px-5 py-5 text-dark-blue">
                        <div class="flex flex-col">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold leading-relaxed">Panier</DialogTitle>
                        </div>
                      </div>
                      <div class="w-full text-dark-blue bg-[#FFFFFF] rounded-2xl px-3 py-4 mt-5">
                        <div class="flex flex-col space-y-1">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold leading-relaxed">Récapitulatif</DialogTitle>
                            <div class="flex items-center justify-between">
                                <p class="text-xs font-light leading-relaxed">Sous-total</p>
                                <p class="text-xs font-semibold leading-relaxed">3027,00 MAD</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-xs font-light leading-relaxed">Livraison</p>
                                <p class="text-xs font-normal leading-relaxed">Calculé à l'étape suivante</p>
                            </div>
                            <div class="w-full h-[1px] bg-dark-blue rounded-xl px-3"></div>
                            <div class="flex items-start justify-between">
                                <p class="flex flex-col items-start text-base font-semibold leading-relaxed">
                                    Total
                                    <span class="font-light text-[8px]">TVA incluse</span>
                                </p>
                                <p class="text-sm font-bold leading-relaxed">3027,00 MAD</p>
                            </div>
                            <div class="flex flex-col items-center justify-center pt-2 px-4 space-y-1">
                                <button class="text-sm font-semibold leading-relaxed bg-dark-blue rounded-full text-white-color w-full py-2 hover:bg-[#004179e5] transition duration-200 ease-in-out">Valider mon panier</button>
                                <p class="text-sm font-semibold">où</p>
                                <div class="relative cursor-pointer flex items-center justify-center text-sm py-2 text-center font-semibold leading-relaxed ring-1 ring-dark-blue rounded-full text-dark-blue hover:bg-dark-blue hover:text-white-blue w-full transition duration-500 ease-in-out">
                                  <div class="absolute flex items-center justify-center left-1 bg-dark-blue w-8 h-8 rounded-full">
                                    <img src="../../assets/toleft.svg" alt="">
                                  </div>
                                  <span> Choisir un autre pack</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </DialogOverlay>
                </TransitionChild>
            </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  } from '@headlessui/vue';
  
  const isOpen = ref(true)
  const typeMod = ref('')


  const props = defineProps({
    isOpen: Boolean,
    typeMod: String
  });
  const emitt = defineEmits(['toggle']);

  function setIsOpened(value){
    emitt('toggle', value);
  }
  
</script>
  