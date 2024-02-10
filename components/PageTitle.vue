<template>
    <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">

        <p class="text-white font-extrabold text-3xl md:text-5xl">
            👻 {{ title }}
        </p>
        <p class="text-xl md:text-2xl text-gray-500">{{ subTitle }}</p>
    </div>
</template>

<script setup lang="ts">


import { defineProps } from "vue";


defineProps({
    title: String,
    subTitle:String
})
</script>