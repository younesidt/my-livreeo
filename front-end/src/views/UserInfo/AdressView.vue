<template>
    <div class=" bg-white-blue">
        <div class="container mx-auto max-w-7xl flex justify-center items-center">
            <div class="w-[86%] flex flex-col items-center justify-center pt-12 2xl:pt-8">
                <div class="w-full flex flex-col items-center justify-bettwen text-dark-blue">
                    <div class="w-full flex flex-col md:flex-row justify-between items-center ">
                        <div class="w-full md:w-1/2">
                            <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email"><br><br>
      <label for="message">Message:</label><br>
      <textarea id="message" v-model="formData.message"></textarea><br><br>
      <input type="submit" value="Submit">
    </form>
                        </div>
                        <basket/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref } from 'vue'
import basket from '../../components/userInfo/basketComponent.vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form Data:', formData.value);
  // You can perform further actions with the form data here, such as sending it to a server
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f0f0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6192bf;
  border-radius: 5px;
}
</style>