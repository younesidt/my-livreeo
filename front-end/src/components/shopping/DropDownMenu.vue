<template>
        <div class="py-[17px] md:py-[40px]">
                <p class="font-bold text-dark-blue md:text-[23px] text-[13px]">
                    1. Dans quelle ville habitez vous ?
                </p>
                <div class="py-[11px] md:py-[18px]">
                    <select class="appearance-none p-[12px] md:p-[25px] font-medium text-soft-dark-blue text-[15px] md:text-[18px] bg-white-blue w-3/4 rounded-full border border-dark-blue peer-checked:ring-2 ring-dark-blue" :class=" 'border border-dark-blue hover:ring-2 ring-dark-blue text-dark-blue'&& clicked == true  " @click="clicked != clicked">
                        <option class="bg-none">casablanca</option>
                    </select>
                </div>
            </div>
</template>

<script setup>
let clicked = false;
</script>