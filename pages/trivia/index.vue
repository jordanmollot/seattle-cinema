<script setup>
import { ref, onMounted } from "vue";
import Card from "@/components/Card.vue";

const triviaQuestions = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&token=e6345e0c17f6b13fc98d138becf1791b83727195f50391bd82ed6b4ffa6405e6"
    );
    triviaQuestions.value = await response.json();
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
          <div>
            <div v-for="triviaQuestion in triviaQuestions" :key="triviaQuestion">
              <Card
                :question="triviaQuestion.question"
              />
            </div>
          </div>
        </div>
      </div>  
    </div> 
  </section>
</template>

<style scoped>


</style>