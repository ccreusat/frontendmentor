<script setup lang="ts">
import Card from "./Card.vue";
import IconBookmark from "../icons/IconBookmark.vue";
import Logo from "../icons/Logo.vue";
</script>

<template>
  <Card class="ta-center project-description">
    <div class="logo"><Logo /></div>
    <h1 class="placeholder-glow"><span class="placeholder"></span></h1>
    <p class="text placeholder-glow"><span class="placeholder"></span></p>
    <div class="button-group">
      <button class="primary"></button>
      <button class="round"><IconBookmark /> <strong></strong></button>
    </div>
  </Card>
</template>

<style scoped>
.project-description {
  position: relative;
}

.logo {
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

@media (min-width: 45em) {
  .project-description {
    padding-top: 4.8rem;
  }
  .primary {
    max-width: 20rem;
  }
}
</style>
