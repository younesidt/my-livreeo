<template>
    <div class="container mx-auto max-w-7xl text-dark-blue">
        <div class="w-full flex items-center justify-center">
            <div class="w-full xl:w-5/6 flex flex-col items-center">
                <div class="w-full flex items-center justify-evenly pt-10 2xl:pt-16">
                    <router-link to="/Livres-Fourniture">
                        <div class="cursor-pointer">
                            <img src="../assets/back-arraw.svg" class="w-6 h-6 md:w-9 md:h-9" alt="">
                        </div>
                    </router-link>
                    <div>
                        <h3 class="text-sm md:text-xl font-semibold leading-6">Souhaitez-vous compléter votre commande ?</h3>
                    </div>
                    <div class="w-6 md:w-9 h-6 md:h-9 flex items-center justify-center rounded-full border-[2px] border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                        <img src="../assets/close.svg" class="h-3 md:h-5" alt="">
                    </div>
                </div> 
                <div class="w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly pt-10 md:pt-16 pb-4 space-y-6 md:space-y-0 md:space-x-16">
                    <div class="flex flex-col items-center justify-center space-y-5 md:space-y-10">
                        <img src="../assets/calculatrice.png" class="h-56 md:h-48" alt="calculatrice">
                        <button class="bg-white-blue hover:bg-[#e8f4fa] transition duration-200 ease-in-out text-xs md:text-base font-semibold py-2 md:py-3 min-w-40 rounded-full">Calculatrices</button>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-10">
                        <img src="../assets/trousse.png" class="h-56 md:h-48" alt="trousse">
                        <button class="bg-white-blue hover:bg-[#e8f4fa] transition duration-200 ease-in-out text-xs md:text-base font-semibold py-2 md:py-3 min-w-40 rounded-full">Trousses</button>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-10">
                        <img src="../assets/cartable.png" class="h-56 md:h-48" alt="cartable">
                        <button class="bg-white-blue hover:bg-[#e8f4fa] transition duration-200 ease-in-out text-xs md:text-base font-semibold py-2 md:py-3 min-w-40 rounded-full">Cartables</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>