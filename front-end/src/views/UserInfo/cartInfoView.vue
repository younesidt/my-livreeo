<template>
    <div class=" bg-white-blue">
        <div class="container mx-auto max-w-7xl">
            <div class="w-full flex flex-col items-center justify-cente">
                <div class="w-[90%] flex flex-col items-center justify-center pt-12 2xl:pt-8">
                    <div class="w-full md:w-[674px] flex flex-row items-center my-8">
                        <img src="../../assets/radioBox.svg">
                        <p class="text-black mx-4 font-medium text-xl">Carte Bancaire </p>
                    </div>
                    <form @submit.prevent="submitForm" class=" w-full md:w-[674px] flex flex-col justify-start items-atart" >
                        <label for="cardholderName" class="text-black font-medium text-sm md:text-xl">Nom <span class="text-dark-blue">*</span></label>
                        <span class="font-meduim text-sm">Vérifiez que vous indiquez le nom complet affiché sur la carte</span>
                        <input required ="formData.fullName" type="text" class="appearance-none py-4 px-8 mt-4 mb-[32px] rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0">
                        <label for="cardholderName" class="text-black font-medium text-sm md:text-xl">Numero de la carte <span class="text-dark-blue">*</span></label>
                        <input required v-model="formData.cardNum" type="text" class="appearance-none py-4 px-8 mt-4 mb-[32px] rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0">
                        <div class="w-full flex flex-row justify-between items-center">
                            <!-- date -->
                        <div class="w-1/2">
                            <label for="cardholderName" class="text-black font-medium text-sm md:text-xl">Date d’expiration <span class="text-dark-blue">*</span></label>
                            <div class="w-full flex flex-row">
                                <select required v-model="formData.EXPDate.mounth" type="text" class="appearance-none py-4 px-8 mt-4 mb-[32px] w-1/2 rounded-l-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0">
                                    <option  v-for="mounth in mounths">{{mounth}}</option>
                                </select>
                                <select required v-model="formData.EXPDate.year"  type="text" class="appearance-none py-4 px-8 mt-4 mb-[32px] w-1/2 rounded-r-full border border-[#D3D3D3] bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0">
                                    <option>2023</option>
                                    <option v-for="year in years">{{year}}</option>
                                </select>
                            </div>
                        </div>
                        <!-- cvv -->
                        <div class="w-1/3 flex flex-col justify-end itemes-end">
                            <label for="cardholderName" class="text-black font-medium text-sm md:text-xl">Code de sécurité  <span class="text-dark-blue">*</span></label>
                            <input required v-model="formData.cvv" value="cvv" class="appearance-none py-4 px-8 mt-4 mb-[32px] w-full rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0">
                        </div>

                        </div>
                    </form>
                    <div class="w-full my-16 flex flex-row justify-between items-center">
                        <router-link to="/payment-method"><img src="../../assets/back.svg" height=""></router-link>
                        <router-link to="/user-address">
                            <button class="py-3 px-8 text-white-color bg-dark-blue rounded-full mt-4 font-semibold md:text-[20px] text-[15px]" @click="submitForm()">Aller au paiement</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref } from 'vue'
    const mounths = [1,2,3,4,5,6,7,8,9,10,11,12];

    const today = new Date();
    const year = today.getUTCFullYear();
    let years = [year];
    function getYears(){
        for(let i = 0; i < 11; i++) {
            years.push(year+i);
        }
    }
    getYears();

    const formData = ref({
  fullName: '',
  cardNum: '',
  EXPDate: {
    mounth:0,
    year:null,
  },
  cvv:null,
});


const submitForm = () => {
  console.log('Form Data:', formData.value);
  // You can perform further actions with the form data here, such as sending it to a server
};
</script>