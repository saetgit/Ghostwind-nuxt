<template>
    <div class="w-full md:w-2/3 rounded-t">
        <img :src=" src " class="h-full w-full shadow">
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    src: String
})
</script>