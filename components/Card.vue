<script setup>
import { defineProps, ref } from "vue";

//props defined
const props = defineProps({
  question: String,
  correct: String,
})

</script>

<template>
  <div>
    <h3>QUESTION: {{ props.question }}</h3>
    <h3>ANSWER: {{ props.correct }}</h3>
  </div>
</template>

<style scoped>

</style>