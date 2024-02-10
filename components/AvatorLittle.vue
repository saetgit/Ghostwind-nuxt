<template>
    <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" :src=" src "
        alt="Avatar of Author">
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    src: String
})
</script>