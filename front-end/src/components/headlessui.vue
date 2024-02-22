<template>
    <TransitionRoot appear :show="props.isOpen" as="template">
      <Dialog as="div" @close="setIsOpened(false)" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="w-full h-screen fixed top-0 overflow-y-scroll no-scrollbar font-Poppins">
            <div class="w-full absolute top-0 right-0 xl:w-1/3 2xl:w-1/4 bg-[rgb(225,238,248)] px-4 py-6">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                <DialogPanel class="w-full flex flex-col items-end lg:px-6 lg:py-4">
                    <div class="w-9 h-9 2xl:w-[42px] 2xl:h-[42px] mb-8 flex items-center justify-center rounded-full border-[3px] 2xl:border-4 border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                        <img @click="setIsOpened(false)" src="../assets/close.svg" alt="close">
                    </div>
                    <div class="bg-white-color text-dark-blue w-full rounded-3xl px-5 py-8 space-y-8">
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <h1 class="text-base 2xl:text-lg font-bold uppercase">À PROPOS DE LIVRÉEO</h1>
                            <div class="space-y-3">
                                <p class="text-base 2xl:text-lg font-light"><router-link to="/about/how-we-are">Livréeo recructe</router-link></p>
                                <p class="text-base 2xl:text-lg font-light"><router-link to="/about/livero-criche">Résponsabilité des entreprises</router-link></p>
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
                </DialogPanel>
                </TransitionChild>
            </div>
        </div>

        <!-- <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We've sent you
                    an email with all of the details of your order.
                  </p>
                </div>
  
                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div> -->
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const isOpen = ref(true)

  const props = defineProps({
    isOpen: Boolean
  });
  const emitt = defineEmits(['toggle']);

  function setIsOpened(value){
    emitt('toggle', value);
  }
  
//   function closeModal() {
//     isOpen.value = false
//   }
//   function openModal() {
//     isOpen.value = true
//   }
  </script>
  