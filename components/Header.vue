<template>
    <div class="w-full m-0 p-0 bg-cover bg-bottom"
        style="background-image:url('cover.jpg'); height: 60vh; max-height:460px;">
        <!--Title-->
        <PageTitle :title="titles.title" sub-title="titles.subTitle"/>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const fullPath=useRoute().fullPath;
const titles={
    title:"",
    subTitle:""
};
switch(fullPath){
    case "/":
        (titles.title="welcome to home"),
        (titles.subTitle="happy to see you in Home");
        break;
        case "/about":
        (titles.title="welcome to about"),
        (titles.subTitle="happy to see you in about");
        break;
        case "/contact":
        (titles.title="welcome to contact"),
        (titles.subTitle="happy to see you in contact");
        break;
}
defineProps({
    pageTitle: String,
    pageSubTitle:String
})
</script>