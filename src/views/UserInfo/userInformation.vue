<template>
    <div class=" bg-white-blue">
        <div class="container mx-auto max-w-7xl flex justify-center items-center">
            <div class="w-[86%] flex flex-col items-center justify-center pt-12 2xl:pt-8">
                <div class="w-full flex flex-col items-center justify-bettwen text-dark-blue">
                    <div class="w-full flex flex-col md:flex-row justify-between items-start ">
                        <userInfo/>
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
import userInfo from '../../components/userInfo/userInfo.vue'
const formData = ref({
  adress: '',
  ville: '',
  moreInfo: ''
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