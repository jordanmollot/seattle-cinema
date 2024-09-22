<script setup>
import { defineProps, ref } from "vue";

//props defined
const props = defineProps({
  question: String,
})

</script>

<template>
  <div>
    <h3>Question: {{ props.question }}</h3>
  </div>
</template>

<style scoped>

</style>