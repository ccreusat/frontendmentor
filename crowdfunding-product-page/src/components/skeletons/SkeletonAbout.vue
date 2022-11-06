<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <Card class="about">
    <h2 class="placeholder-glow">About this project</h2>
    <p class="placeholder-glow">
      <span class="placeholder" style="min-height: 0.4em"></span>
      <span class="placeholder" style="min-height: 0.4em"></span>
      <span class="placeholder" style="min-height: 0.4em"></span>
      <span class="placeholder" style="min-height: 0.4em"></span>
      <span class="placeholder" style="min-height: 0.4em"></span>
    </p>
    <p class="placeholder-glow">
      <span class="placeholder" style="min-height: 0.4em"></span>
      <span class="placeholder" style="min-height: 0.4em"></span>
      <span class="placeholder" style="min-height: 0.4em"></span>
    </p>
    <slot>No existing reward</slot>
  </Card>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
