<script setup>
import { ref } from "vue";

const show = ref(true);
</script>

<template>
  <main class="main">
  <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-2">Theater Rental</h1>
  <!--Used Bootstrap grid to make page components responsive to X-Large, Medium and X-Small screens/devices-->
  <div class="container text-center">
      <div class="row">
        <div class="col-xl-4 col-md-12 col-xs-12 mt-4">
          <img src="/images/interior.jpg" class="img-fluid border border-black" width="400" alt="interior photo of the theater showing the movie screen from the back of the auditorium">
        </div>
        <div class="col-xl-4 col-md-6 col-xs-12 mt-4">
          <p class="lead">The Seattle Cinema is an excellent and affordable venue for screening your own film, private events, birthday parties, discussion groups, business meetings, etc.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a esse sapiente nulla! Aliquid molestiae ipsa saepe et adipisci animi perspiciatis accusamus laboriosam magni nesciunt? Quas natus voluptates adipisci sit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a esse sapiente nulla! Aliquid molestiae ipsa saepe et adipisci animi perspiciatis accusamus laboriosam magni nesciunt? Quas natus voluptates adipisci sit!</p>
        </div>
        <div class="col-xl-4 col-md-6 col-xs-12 mt-4">
          <!-- v-if and v-else statements used with a button to either display theater rental info or not-->
          <h1 class="display-6">Interested in renting the theater?</h1>
          <button class="m-3" @click="show = !show">More info!</button>
          <div v-if="show">
            <p class="p-1"><small>(Click the button for theater rental details)</small></p>
          </div>
          <div v-else>
            <p class="p-1"><small>(Click the button again to hide theater rental details)</small></p>
            <h1 class="display-6 text-capitalize bg-warning-subtle">cost</h1>
            <p>$75 per hour</p>
            <h1 class="display-6 text-capitalize bg-warning-subtle">concessions</h1>
            <p>Drinks and candy are available at regular prices</p>
            <p>Popcorn can be purchased at regular prices or you can purchase unlimited popcorn for the duration of your rental at a flat rate of $50 (regardless of party size)</p>
            <h1 class="display-6 text-capitalize bg-warning-subtle">four-walling</h1>
            <p>If you are a filmmaker or distributor, you can four-wall your film at the Seattle Cinema very affordably. Renter assumes all responsibility for promotions of the film. Gross ticket sales are forwarded to you and we keep sales from concessions.</p>
          </div>
        </div>
    </div>
    </div>
  </main>
</template>
 
<style scoped>

</style>