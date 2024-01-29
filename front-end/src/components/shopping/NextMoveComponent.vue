<template>
    <div claas="w-full h-auto ">
        <div class="container mx-auto flex flex-row justify-between items-center h-1/2 absolute b-0">
            <div class="w-1/4 flex justify-center  items-center">
                <!-- <button><router-link :to="PrivusStep" >Retour</router-link></button> -->
                <button class="md:py-[15px] md:px-[78px] py-[7px] px-[36px] text-center flex justify-center items-center border border-dark-blue rounded-full font-Poppins font-semibold text-[20px] text-dark-blue">
                    <router-link :to="PrivusStep">Retour</router-link>
                </button>
            </div>
            <div class="md:w-1/4 flex flex-row justify-between items-center">
                <div class="w-full flex flex-row justify-between items-center">
                    <div v-for="n in StepNum" class="md:w-[43px] w-[23px] md:h-[9px] h-[6px] bg-gradient-to-r from-[#6FC2FF] to-[#D9F4F3] rounded-full "></div>
                    <div v-for="n in (AllSteps - StepNum)" class="md:w-[43px] w-[23px] md:h-[9px] h-[6px] bg-gradient-to-r from-[#f0f0f0] to-[#fff] rounded-full "></div>
                </div>
                <div class="font-Poppins font-medium text-dark-blue text-[20px]">{{ StepNum + "/" + AllSteps }}</div>
            </div>
            <div class="w-1/4 flex justify-center items-center">
                <!-- <button><router-link :to="NextStep" >next</router-link></button> -->
                <button class="md:py-[15px] md:px-[78px] py-[7px] px-[36px] text-center flex justify-center items-center bg-dark-blue rounded-full font-Poppins font-semibold text-[20px] text-white-color ">
                    <router-link :to="NextStep" >next</router-link>
                </button>
            </div>
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