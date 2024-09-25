<script setup>
import { ref, onMounted } from "vue";
import Card from "@/components/Card.vue";

const triviaQuestions = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=3&category=11"
    );
    const data = await response.json();
    triviaQuestions.value = data.results;
    console.log(triviaQuestions.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <main class="main">
    <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-2">Trivia Night</h1>
    <div class="p-3">
      <p class="lead">Stop by The Seattle Cinema every Thursday night for movie trivia!</p>
      <p>Trivia Night info here</p>
      <p>Warm up for our Trivia night by testing your movie trivia knowledge right here!</p>
    </div>
  </main>

  <section>
    <div class="container text-center">
      <div class="row">
        <div class="col-xl-12 col-md-12 col-xs-12">
          <div v-for="question in triviaQuestions" :key="question">
            <Card
              :question="question.question"
              :correct="question.correct_answer"
            />
          </div>
        </div>
      </div>  
    </div> 
  </section>
</template>

<style scoped>


</style>