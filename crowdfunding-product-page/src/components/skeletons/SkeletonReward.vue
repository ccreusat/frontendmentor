<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <Card class="reward">
    <h3 class="reward-title placeholder-glow">
      <span class="placeholder"></span>
    </h3>
    <strong class="reward-pledge placeholder-glow"
      ><span class="placeholder"></span
    ></strong>
    <p class="reward-text placeholder-glow">
      <span class="placeholder"></span>
    </p>
    <div class="reward-stock placeholder-glow">
      <strong><span class="placeholder"></span></strong>
    </div>
    <div class="button-group placeholder-glow">
      <button class="primary placeholder"></button>
    </div>
  </Card>
</template>

<style scoped>
.reward {
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.reward-pledge {
  color: var(--moderate-cyan);
  font-weight: 500;
  font-size: 1.4rem;
}
.reward-text,
.reward-stock {
  margin: 2.4rem 0;
}
.reward-stock {
  font-size: 1.5rem;
}
.reward-stock strong {
  font-size: 3.2rem;
  font-weight: 700;
  /* line-height: 4rem; */
  color: var(--black);
}
.reward .button-group > button {
  flex: 0.5;
}
.selected {
  border-color: var(--moderate-cyan);
}
.disabled > * {
  opacity: 0.5;
}

@media (min-width: 45em) {
  .reward {
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    display: grid;
    gap: 2.4rem;
    grid-template-columns: 1fr 1fr;
  }
  .reward-stock,
  .reward-text {
    margin: 0;
  }
  .reward-text {
    grid-column: 1 / 3;
  }
  .reward-pledge {
    justify-self: end;
    font-size: 1.5rem;
  }
  .button-group > button {
    margin-left: auto;
  }
  .disabled .button-group {
    grid-column: 2;
  }
}
</style>
