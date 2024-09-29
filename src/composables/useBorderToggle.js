// Composable/mixin for images border toggle in About.vue

import { ref } from 'vue'

//function for border toggle

let isActive = ref(false);

export function borderToggle (e) {
  isActive = !isActive;
  if (isActive === false) {
    e.target.style.border = "solid black";
  }
  else {
    e.target.style.border = "none";
  }
}   