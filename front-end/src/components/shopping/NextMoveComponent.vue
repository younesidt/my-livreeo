<template>
    <div class="w-full flex items-center justify-evenly pt-20 pb-10 xl:pb-0">
        <div>
            <button class="border border-dark-blue rounded-full px-15 py-4 text-xl font-semibold leading-normal text-dark-blue"><router-link :to="PrivusStep" >Retour</router-link></button>
        </div>
        <div>
            <div class="flex items-center space-x-3">
                <div v-for="n in StepNum" class="bg-[#6FC2FF] w-[43px] h-2 rounded-full"></div>
                <div v-for="n in (AllSteps - StepNum)" class="bg-[#D9F4F3] w-[43px] h-2 rounded-full"></div>
                <p class="text-[21px] font-medium text-dark-blue">{{ StepNum + "/" + AllSteps }}</p>
            </div>
        </div>
        <div>
            <button class="bg-dark-blue rounded-full px-15 py-4 text-xl font-semibold leading-normal text-white-color"><router-link :to="NextStep">Suivant</router-link></button>
        </div>
    </div>



</template>
<script setup>

const props = defineProps({
    StepNum : {
        type: Number,
        defualt:1,
    },
    AllSteps : {
        type: Number,
        defualt:4,
    },
    NextStep : {
        type:String,
        defualt:'/',
    },
    PrivusStep : {
        type:String,
        defualt:'/',
    },
}
)
</script>