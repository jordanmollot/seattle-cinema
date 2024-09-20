// Composable/mixin for images border toggle in About.vue

import { ref } from 'vue'

//function for border toggle
export function borderToggle (e) {
  this.isActive = !this.isActive;
  if (this.isActive === false) {
    e.target.style.border = "solid black";
  }
  else {
    e.target.style.border = "none";
  }
}   