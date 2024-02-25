<template>
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col items-center justify-center text-dark-blue">
            <div class="w-[86%] flex flex-col items-center pt-12 2xl:pt-16">
                <h1 class="w-full md:w-3/4 text-base md:text-xl text-center font-normal leading-loose pb-4">Pour génèrer les élément de <span class="text-soft-dark-blue font-semibold italic underline">la liste scolaire officielle</span> de votre enfant, nous allons avoir besoin de quelques informations ! </h1>
                <div class="w-full flex flex-col items-start justify-start space-y-6 pt-10">
                    <h3 class="text-sm md:text-lg font-bold pl-4">1. Dans quelle ville habitez vous ?</h3>
                    <!-- DropDown (HeadlesUi) -->
                    <SelectOption
                    placeholder="Select Ville"
                    v-model="city_id" 
                    :options="mystore.getCitys"
                    namechamp="ville"
                    />
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-6 pt-10">
                    <h3 class="text-sm md:text-lg font-bold pl-4">2. Dans quelle école votre enfant est scolarisé ?</h3>
                    <SelectOption 
                    placeholder="Select école"
                    v-model="school_id"
                    :options="mystore.getSchools"
                    namechamp="ecole"
                    />
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-6 pt-10 pb-44">
                    <h3 class="text-sm md:text-lg font-bold pl-4">3. Quelle est la classe de votre enfant ?</h3>
                    <SelectClass />
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <SiteMapComponentVue />
</template>
<script setup>
import { ref,watch } from 'vue'
import { useFirstStepStore } from '../stors/FirstStepStore'
import SiteMapComponentVue from '../components/SiteMapComponent.vue'
import SelectOption from '../components/SelectOption.vue'
import SelectClass from '../components/SelectClass.vue'

const mystore = useFirstStepStore();

const city_id = ref(null)
const school_id = ref(null)

mystore.fetchCitys();

watch(city_id, (newValue, oldValue) => {
  if (newValue !== null) {
    mystore.SelectedCity = city_id.value;
    mystore.fetchSchools();
  }
});

watch(school_id, (newValue, oldValue) => {
  if (newValue !== null) {
    mystore.SelectedSchool = school_id.value;
    console.log(school_id.value);
    //mystore.fetchClasses();
  }
});


</script>