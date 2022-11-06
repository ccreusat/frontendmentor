<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <Card class="ta-center project-detail">
    <div>
      <h2 class="placeholder-glow">
        <span class="placeholder"></span
        ><span
          class="placeholder"
          style="min-height: 0.5em; background-color: lightgrey"
        ></span>
      </h2>
    </div>
    <div>
      <h2 class="placeholder-glow">
        <span class="placeholder"></span
        ><span
          class="placeholder"
          style="min-height: 0.5em; background-color: lightgrey"
        ></span>
      </h2>
    </div>
    <div>
      <h2 class="placeholder-glow">
        <span class="placeholder"></span
        ><span
          class="placeholder"
          style="min-height: 0.5em; background-color: lightgrey"
        ></span>
      </h2>
    </div>
    <div class="progress-container">
      <div class="placeholder-glow">
        <span class="progress-bar"></span>
      </div>
    </div>
  </Card>
</template>

<style scoped>
.progress-container {
  background-color: hsla(0, 0%, 18%, 0.1);
  grid-column: 1 / 4;
}

.progress-container,
.progress-bar {
  height: 1.2rem;
  border-radius: 3rem;
}

.progress-bar {
  background-color: var(--moderate-cyan);
}

.project-detail article:not(:first-child) {
  position: relative;
  margin: 2.4rem 0;
  padding-top: 2.4rem;
}

.project-detail article:is(:last-child) {
  margin-bottom: 0;
}

.project-detail h2 {
  display: block;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
  color: var(--black);
}

@media (min-width: 45em) {
  .project-detail {
    display: grid;
    gap: 4.2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .project-detail > article {
    text-align: left;
  }
  .project-detail article:not(:first-child) {
    position: relative;
    margin: 0;
    padding-top: 0;
    padding-left: 4.8rem;
    border-left: 0.1rem solid #f5f5f5;
  }
}
</style>
