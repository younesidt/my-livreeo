<template>
    <!-- <Listbox :model-value="props.modalClass">
        <ListboxButton>
            {{ selectedPeople.map((person) => person.nom).join(', ') }}
        </ListboxButton>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <ListboxOptions
            static
            as="template"
            v-for="classe in classes"
            :key="classe.id"
            :value="classe.nom"
            v-slot="{ selected }"
          >
            <div
              :class="[
                selected ? 'bg-[#E4F3FF] border border-[#1E94FD]' : 'border-[3px] border-[#E8E8E8]',
              ]"
              class="relative flex cursor-pointer rounded-full min-w-48 py-2 focus:outline-none transition duration-200 ease-in-out"
            >
                <div class="w-full flex items-center justify-center">
                  <div class="text-center space-y-0">
                    <ListboxOption 
                      as="span"
                      :class="selected ? 'text-dark-blue text-xs font-semibold' : 'text-[#6192BF] text-xs font-medium'"
                      class="transition duration-200 ease-in-out"
                    >
                      <span>{{ classe.nom }}</span>
                    </ListboxOption>
                  </div>
                </div>
            </div>
          </ListboxOptions>
        </div>
    </Listbox> -->

    <Listbox :model-value="props.modalClass" multiple>
        <ListboxOptions static>
            <div class="grid grid-cols-4 gap-x-10 gap-y-5">
            <ListboxOption
            v-for="person in props.options"
            :key="person.id"
            :value="person"
            as="template"
            v-slot="{ active, selected }"
        >
            <li
            :class="{
                'text-dark-blue bg-[#E4F3FF] border border-[#1E94FD] font-semibold': selected,
                'border-[3px] border-[#E8E8E8] text-[#6192BF] font-normal': !selected,
            }"
            class="rounded-full text-sm cursor-pointer min-w-36 text-center py-4 transition duration-200 ease-in-out"
            >
            {{ person.langue }}
            </li>
        </ListboxOption>
        </div>
        </ListboxOptions>
    </Listbox>

</template>
<script setup>
import {
  Listbox,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'



const props = defineProps({
  modalClass: [String, Number],
  options: Array
})


// const classes = [
//   {
//     id: 1,
//     nom: 'Anglais LV1',
//   },
//   {
//     id: 2,
//     nom: 'Anglais LV2',
//   },
//   {
//     id: 3,
//     nom: 'Anglais LV3',
//   },
//   {
//     id: 4,
//     nom: 'Anglais LV4',
//   },
//   {
//     id: 5,
//     nom: 'Anglais LV5',
//   },
//   {
//     id: 6,
//     nom: 'Anglais LV6',
//   },
//   {
//     id: 7,
//     nom: 'Anglais LV7',
//   },
//   {
//     id: 8,
//     nom: 'Anglais LV8',
//   },
// ]

</script>

