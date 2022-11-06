<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect, type Ref } from "vue";
import Card from "./Card.vue";
import { replaceDotByComma } from "../../utils/helpers";

const props = defineProps<{
  current: string;
  total: string;
  backers: string;
  daysLeft: string;
}>();

onMounted(() => {
  setTimeout(function () {
    progressBarWidth.value;
  }, 500);
});

const calculateWidth = () =>
  (Number(props.current) / Number(props.total)) * 100;

const progressBarWidth = computed(() => {
  if (calculateWidth() >= 100) return 100;
  return calculateWidth();
});

watch(progressBarWidth, newValue => {
  setTimeout(function () {
    newValue = Number(props.current);
  }, 500);
  return newValue;
});

const currentValue = computed(() => {
  return replaceDotByComma(props.current);
});

const backersValue = computed(() => {
  return replaceDotByComma(props.backers);
});

const totalValue = computed(() => {
  return replaceDotByComma(props.total);
});
</script>

<template>
  <Card class="ta-center project-detail">
    <article>
      <h2>${{ currentValue }}</h2>
      of ${{ totalValue }} backed
    </article>
    <article>
      <h2>{{ backersValue }}</h2>
      total backers
    </article>
    <article>
      <h2>{{ daysLeft }}</h2>
      days left
    </article>
    <div class="progress-container">
      <div
        class="progress-bar"
        :style="{ width: progressBarWidth + '%' }"
      ></div>
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
  width: 0;
  background-color: var(--moderate-cyan);
  transition: width 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
