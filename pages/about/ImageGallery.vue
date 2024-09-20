<script setup>
import { defineProps, ref } from "vue";

//props defined
const props = defineProps({
  img: String,
  class: String,
  width: String,
  title: String,
  alt: String,
})

</script>

<template>
  <!-- image template using props to dynamically generate photos -->
  <img :src="props.photo" :class="props.class" :width="props.width" :title="props.title" :alt="props.alt">
</template>

<style scoped>

</style>