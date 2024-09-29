<script setup>
import { ref, onMounted } from "vue";
import Card from "@/components/Card.vue";


//retrieving Open Triva Database API data
const triviaQuestions = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=4&category=11&type=multiple"
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
        <!--Using v-for to loop through API data and sending data through props to trivia card component -->
        <div class="col-xl-6 col-md-6 col-xs-12" v-for="question in triviaQuestions" :key="idx">
          <div class="p-5 border">
            <Card
              :category="question.category"
              :difficulty="question.difficulty"
              :question="question.question"
              :correct="question.correct_answer"
            />
          </div>
          <div class="m-4">
          </div>
        </div>
      </div>  
    </div> 
  </section>
</template>

<style scoped>

</style>