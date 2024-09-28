<script setup>
import { defineProps, ref } from "vue";

//props defined
const props = defineProps({
  difficulty: String,
  question: String,
  correct: String,
  category: String,
})

const reveal = ref(false);

</script>

<template>
  <div>
    <h5 class="p-3 bg-warning-subtle">CATEGORY: {{ props.category }}</h5>
    <h5 class="p-3 bg-warning-subtle">DIFFICULTY: {{ props.difficulty }}</h5>
    <h4 class="p-3 bg-warning">QUESTION: {{ props.question }}</h4>
    <button class="m-3" @click="reveal = !reveal">Reveal Answer</button>
    <h5 class="p-3 bg-warning-subtle" v-show="reveal">ANSWER: {{ props.correct }}</h5>
  </div>
</template>

<style scoped>

</style>