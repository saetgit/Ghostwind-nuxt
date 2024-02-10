
import type { HalfCard } from '#build/components';

import type { Card } from '#build/components';

import type { Card } from '#build/components';

import type { OneThirdCard } from '#build/components';
<template>
    <div class="flex flex-wrap justify-between pt-12 -mx-6">

        <OneThirdCard :title="cards[0].title" :content="cards[0].content" :src="'crayzi.jpeg'"/>
        <OneThirdCard :title="cards[1].title" :content="cards[1].content" :src="'guy.jpeg'"/>
        <OneThirdCard :title="cards[2].title" :content="cards[2].content"  :src="'crayzi.jpeg'"/>
        
        <HalfCard :title="'halfcard1'" :content="'contenthalfcard1'" :image="'little-girl.jpeg'"/>
        <HalfCard :title="'halfcard2'" :content="'contenthalfcard2'" :image="'crayzi.jpeg'"/>


        <TwoThirdCard :title="'twothirdcard1'" :content="'contenttwothirdcard1'" :src="'crayzi.jpeg'"/>

        <OneThirdCard :title="'onethirdcard1'" :content="'contentonethirdcard1'" :src="'crayzi.jpeg'"/>

    </div>
</template>

<script setup lang="ts">
type Card = {
    title: String;
    content: String;
};
type OneThirdCard = Array<Card>

    const cards=[
        {
            title:'Lorem ipsum dolor sit amet.',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet,'
        },
        {
            title:'Lorem ipsum dolor sit beach.',
            content:'Lorem ipsum dolor sit beach, consectetur adipiscing elit. ipsum dolor sit amet,'
        },
        {
            title:'Lorem ipsum dolor sit suuny day.',
            content:'Lorem ipsum dolor sit  suuny day, consectetur adipiscing elit. ipsum dolor sit amet,'
        },
    ] as OneThirdCard
</script>