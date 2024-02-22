<template>
    <TransitionRoot appear :show="props.isOpenCart" as="template">
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
                <div class="w-full xl:w-1/3 2xl:w-1/4 h-screen bg-[#E1EEF8] fixed top-0 right-0 z-40 overflow-y-scroll no-scrollbar text-dark-blue pr-4 pl-4 py-4">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel class="w-full lg:pr-6 lg:pl-6 lg:py-6 flex flex-col items-end"><!--pr-10 pl-16 py-10-->
                            <div @click="setIsOpened(false)" class="w-9 h-9 2xl:w-[42px] 2xl:h-[42px] mb-4 flex items-center justify-center rounded-full border-[3px] 2xl:border-4 border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                                <img src="../../assets/close.svg" alt="close">
                            </div>
                            <div class="bg-white-color h-64 w-full rounded-2xl px-5 py-5">
                                <div class="flex flex-col">
                                    <h1 class="text-base 2xl:text-lg font-bold leading-relaxed">Panier</h1>
                                </div>
                            </div>
                            <div class="w-full bg-[#FFFFFF] rounded-2xl px-3 py-4 mt-5">
                                <div class="flex flex-col space-y-1">
                                    <h1 class="text-base 2xl:text-lg font-bold leading-relaxed">Récapitulatif</h1>
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
                                        <button class="text-sm font-semibold leading-relaxed bg-dark-blue rounded-xl text-white-color w-full py-2 hover:bg-[#004179e5] transition duration-200 ease-in-out">Valider mon panier</button>
                                        <p class="text-sm font-semibold">où</p>
                                        <button class="text-sm font-semibold leading-relaxed ring-2 ring-dark-blue rounded-xl text-dark-blue hover:bg-dark-blue hover:text-white-blue w-full py-2 transition duration-500 ease-in-out">Choisir un autre pack</button>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
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
  
  const isOpenCart = ref(true)

  const props = defineProps({
    isOpenCart: Boolean
  });
  const emit = defineEmits(['toggle']);

  function setIsOpened(value){
    emit('toggle', value);
  }
  

</script>