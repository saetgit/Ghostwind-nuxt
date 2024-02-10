<template>
    <img :src="src" class="h-full w-full rounded-t pb-6">
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    src: String
})
</script>