<script setup>
import { ref } from "vue";
import ImageGallery from "./ImageGallery.vue";
import { borderToggle } from "../src/composables/useBorderToggle";

// using the Head Method to change the title and meta data of this page
useHead({
    title: 'The Seattle Cinema | About the Theater',
    meta: [
        { name: 'description', content: 'The About page of the site, featuring general information about the theater including the history and photos of the theater' }
    ]
})

// object containing all photo/image properties for this page
const photos = ref([
      { img: '/images/front-door.jpg', class: 'img-fluid img-select', width: '640', title: 'exterior photo of the theater', alt: 'exterior photo of the front door entrance to Seattle Cinema' },
      { img: '/images/interior2.jpg', class: 'img-fluid img-select', width: '640', title: 'interior photo of the theater view 1', alt: 'interior photo of the theater showing the seats from the front of the auditorium' },
      { img: '/images/interior.jpg', class: 'img-fluid img-select', width: '640', title: 'interior photo of the theater view 2', alt: 'interior photo of the theater showing the movie screen from the back of the auditorium' },
      { img: '/images/concessions.png', class: 'img-fluid img-select', width: '640', title: 'photo of the concession stand', alt: 'interior photo of the concessions stand featuring glowing neon lights' },
    ]
)

</script>

<template>
  <main class="main">
      <h1 class="display-3 text-lowercase bg-warning-subtle px-3 pb-2">About the theater</h1>
      <div class="p-3">
          <p class="lead">The Seattle Cinema is the longest-running independent cinema in the city, and has become a landmark of the film community.</p>
          <p>Opened in 1970 by Randy Findley in a converted dentist’s office, the cinema became the city’s first arthouse, showcasing foreign and revival films. The cinema was such a success it led to Randy’s opening the Seven Gables Cinema and eventually starting the local Seven Gables Theatres chain, which inevitably got swallowed by the national Landmark Cinema Corporation. The Seattle Cinema was never part of the Seven Gables chain; it has remained a popular independent venue.</p>
          <p>A nonprofit film arts organization, the Northwest Film Forum, saved the theater from closure in 1997, remodeled it, and revitalized interest in the venerable institution. Since 2004, a strong group of dedicated staff and volunteers focus attention and energy on continuing the tradition of this treasured cinema. Over the years, literally hundreds of cinema classics, rarities and truly independent cinema from around the world have been presented in the charming confines of The Seattle Cinema.</p>
      </div>
  </main>

  <section>
    <!--Image Gallery. All the images have responsive sizes and the image layout is responsive. Images are also generated dynamically using props and a "v-for" loop-->
    <div class="container text-center">
      <div class="row">
        <div class="col-xl-6 col-md-6 col-xs-12" v-for="photo in photos" :key="photo">
          <figure>
            <!-- image gallery component -->
            <ImageGallery
              :src="photo.img" 
              :class="photo.class" 
              :width="photo.width" 
              :title="photo.title"
              :alt="photo.title"
              @click="borderToggle"
            />
          </figure>
        </div>
      </div>  
    </div> 
  </section>
</template>

<style scoped>


</style>