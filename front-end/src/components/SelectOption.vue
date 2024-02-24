<template>
    <Listbox @update:modelValue="value => emit('update:modelValue', value)" :model-value="props.modelValue">
        <div class="relative w-3/4 mt-1">
            <ListboxButton class="w-full cursor-pointer rounded-full text-sm md:text-base font-medium bg-[#E4F3FF] focus:outline-none py-5 pl-6 text-left border border-[#1E94FD] focus-visible:border-[#1E94FD] focus-visible:ring-2">
                <span v-if="label" class="block truncate">{{ label }}</span>
                <span v-else>{{ props.placeholder }}</span>
            </ListboxButton>

            <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            >
            <ListboxOptions
                class="z-10 absolute mt-1 max-h-60 w-full overflow-y-auto no-scrollbar rounded-xl bg-[#E4F3FF] py-1 shadow-lg text-xs md:text-sm font-medium focus:outline-none">
                <ListboxOption 
                v-slot="{ active, selected }"
                v-for="option in props.options"
                :key="option.label"
                :value="option.value"
                as="template"
                >
                <li
                    :class="[
                    active && !option.unavailable ? 'bg-dark-blue text-white-color' : 'text-dark-blue',
                    'relative select-none py-2 pl-8 pr-4 cursor-pointer transition duration-200 ease-in-out',
                    ]"
                >
                    <span
                    :class="[
                        selected ? 'font-bold' : 'font-normal',
                        'block truncate',
                    ]"
                    >{{ option.label }}</span
                    >
                    <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                    </span>
                </li>
                </ListboxOption>
            </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>
import { ref,computed } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const props = defineProps({
    options: Array,
    modelValue: [String, Number],
    placeholder: {
        type: String,
        default: "Select Option"
    },
    city: Number,
});

const emit = defineEmits(['update:modelValue']);

const label = computed(() => {
    return props.options.find(option => option.value === props.modelValue)?.label; 
})

</script>