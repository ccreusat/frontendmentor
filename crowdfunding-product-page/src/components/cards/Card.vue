<template>
  <section class="card"><slot>Fallback content</slot></section>
</template>

<style scoped>
.card {
  padding: 4rem 2.4rem;
  margin: 0 2.4rem;
  background: var(--white);
  border: 0.1rem solid rgba(0, 0, 0, 0.0497193);
  border-radius: 0.8rem;
}
.card > .card {
  margin: 0;
}

@media (min-width: 45em) {
  .card {
    margin: 0;
    padding: 3.2rem 4.8rem;
  }
}
</style>
