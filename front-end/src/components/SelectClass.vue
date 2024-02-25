<template>
    <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
        <div class="flex space-y-2">
          <RadioGroupOption
            as="template"
            v-for="classe in classes"
            :key="classe.nom"
            :value="classe.id"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                  : '',
                checked ? 'bg-sky-900/75 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      {{ getFirstLettersUppercase(classe.nom) }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-sky-100' : 'text-gray-500'"
                      class="inline"
                    >
                      
                      <span>{{ classe.nom }}</span>
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
</template>
<script setup>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const classes = [
  {
    id: 1,
    nom: '1ère Année primaire',
  },
  {
    id: 2,
    nom: '2ème année primaire',
  },
  {
    id: 3,
    nom: '3ème année primaire',
  },
  {
    id: 4,
    nom: '4ème Année primaire',
  },
  {
    id: 5,
    nom: '5ème année primaire',
  },
  {
    id: 6,
    nom: '6ème année primaire',
  },
]

const selected = ref(classes[0])

function getFirstLettersUppercase(input) {
  const words = input.split(/\s+/);
  
  const firstLetters = words.map(word => word.charAt(0).toUpperCase());
  
  return firstLetters.join('');
}
</script>

