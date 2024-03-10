<template>
    <div class="w-full md:w-1/2">
                          <div class="mb-8"><router-link to="/mode-livreson"><img src="../../assets/back.svg" height=""></router-link></div>
                          <div class="text-[26px] font-bold">Informations personnelles  </div>
                          <div class="w-full flex flex-col justify-start items-end pr-8">
                            <form @submit.prevent="submitForm" class="w-full flex flex-col justify-start items-start">
                              <input type="text" class="appearance-none w-full md:w-[375px] py-4 px-8 my-4 rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0" placeholder="Nom Complet" v-model="formData.name">
                              <input type="number" class="appearance-none w-full md:w-[375px] py-4 px-8 my-4 rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0" placeholder="Numéro de Télèphone" v-model="formData.phoneNum">
                              <input type="email" class="appearance-none w-full md:w-[375px] py-4 px-8 my-4 rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0" placeholder="E-mail" v-model="formData.email">
                              <input type="email" class="appearance-none w-full md:w-[375px] py-4 px-8 my-4 rounded-full bg-[#F0F9FF] placeholder:text-[#6192BF] md:text-[20px] text-sm focus:bg-[#E4F3FF] active:bg-[#E4F3FF] active:border active:border-[#1E94FD] focus:border focus:border-[#1E94FD] focus:outline focus:outline-0" placeholder="Confirmation E-mail " v-model="formData.confirmEmail">
                              <router-link to="/payment-method" class="w-full">
                              <input type="submit" value="Aller au paiement" class="my-16 p-4 bg-dark-blue text-white-color rounded-full md:w-[268px] w-full md:text-[20px] text-sm font-semibold cursor-pointer " @click="submitForm()">
                              </router-link>
                            </form>
                          </div>
                        </div>
</template>
<script setup>
import {ref } from 'vue'

const formData = ref({
  name: '',
  phoneNum: '',
  email: '',
  confirmEmail:''
});

const submitForm = () => {
  console.log('Form Data:', formData.value);
  // You can perform further actions with the form data here, such as sending it to a server
};
</script>