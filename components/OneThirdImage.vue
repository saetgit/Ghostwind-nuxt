<template>
    <img :src="src" class="h-64 w-full rounded-t pb-6">
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    src: String
})
</script>
