<template>
    <div class="container mx-auto max-w-7xl">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 mt-10 lg:mt-28 px-8 xl:px-14">
            <div class="flex flex-1 flex-col items-start text-dark-blue">
                <h1 class="text-3xl font-bold pb-10">Suivi Des Commandes</h1>
                <h4 class="text-base font-bold pb-6">Vous avez passé une commande auprès de Livréeo ? Merci !</h4>
                <p class="text-sm font-medium">
                    Vous trouverez ici toutes les informations importantes concernant votre commande.
                    Vous pouvez suivre l'état d'avancement de votre commande à tout moment, suivre facilement son statut.
                </p>
                <div class="space-y-6 pt-12">
                    <p class="text-xl font-medium">Numéro de commande</p>
                    <input type="text" class="h-12 ring-[3px] ring-dark-blue focus:ring-4 focus:ring-dark-blue focus:outline-none rounded-xl placeholder:text-[#EBEBEB] text-dark-blue" placeholder="N°">
                    <div type="button" class="flex w-fit pt-5">
                        <div class="flex items-center justify-between bg-dark-blue hover:bg-[#004179e5] font-light text-base md:text-lg text-white-color px-3 md:px-4 py-1.5 md:py-2 rounded-xl">
                            <span>Suivant</span>
                            <img src="../assets/right.svg" class="h-6 md:h-8" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center flex-1">
                <img src="../assets/suivi-img.svg" class="h-[300px] lg:h-[400px]" alt="track">
            </div>
        </div>
        <div class="w-full my-[67px] m-auto flex justify-center items-center" >
            <div class="border-[1px] border-dark-blue rounded-full w-[30px] h-[49px] flex justify-center items-center cursor-pointer">
                <img src="../assets/arraw.svg" class="animate-bounce" alt="" srcset="">
            </div>
        </div>
        <br>
        <br>
        <br>

    </div>
</template>
<script setup>

</script>