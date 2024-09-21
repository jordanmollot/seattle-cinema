<script setup>
import { ref } from "vue";
import { Collapse } from "bootstrap";

const movies = ref([
      { title: 'Barry Lyndon', showtime1: '3:00pm', showtime2: '5:00pm', showtime3: '9:00pm', collapse: 'collapseOne', target: '#collapseOne' },
      { title: 'Eyes Wide Shut', showtime1: '3:15pm', showtime2: '5:15pm', showtime3: '9:15pm', collapse: 'collapseTwo', target: '#collapseTwo' },
      { title: 'Full Metal Jacket', showtime1: '3:30pm', showtime2: '5:30pm', showtime3: '9:30pm', collapse: 'collapseThree', target: '#collapseThree' },
    ]
)

</script>

<template>

<main class="main">
  <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-2">Showtimes</h1>
  <!--Bootstraps accordion component used to display showtimes for each movie. Each movie is generated dynamically using variables and a "v-for" loop -->
  <div v-for="movie in movies" :key="movie">  
    <div class="accordion" id="accordionShowtimes">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button bg-warning-subtle" type="button" data-bs-toggle="collapse" :data-bs-target="movie.target" aria-expanded="true" :aria-controls="movie.collapse">
            {{ movie.title }}
          </button>
        </h2>
        <div :id="movie.collapse" class="accordion-collapse collapse" data-bs-parent="#accordionShowtimes">
          <div class="accordion-body">
            <p>{{ movie.showtime1 }}</p>
            <p>{{ movie.showtime2 }}</p>
            <p>{{ movie.showtime3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>



</template>

<style scoped>

</style>