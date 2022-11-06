<script setup lang="ts">
import { ref, computed, type Ref, onMounted } from "vue";

import Card from "./Card.vue";
import Logo from "../icons/Logo.vue";
import IconBookmark from "../icons/IconBookmark.vue";

defineProps<{
  title: string;
  text: string;
  isProjectBacked: boolean;
  openModal: () => void;
}>();

const isBookmarked: Ref<any> = ref(false);

onMounted(() => {
  isBookmarked.value = JSON.parse(localStorage.getItem("bookmark") || "false");
});

const bookmark = () => {
  isBookmarked.value = !isBookmarked.value;
  JSON.stringify(localStorage.setItem("bookmark", isBookmarked.value));
};

const computedText = computed(() => {
  return isBookmarked.value ? "Bookmarked" : "Bookmark";
});
</script>

<template>
  <Card class="ta-center project-description">
    <div class="logo"><Logo /></div>
    <h1>{{ title }}</h1>
    <p class="text">
      {{ text }}
    </p>
    <div class="button-group">
      <button
        @click="openModal"
        class="large"
        :class="{
          primary: !isProjectBacked,
          secondary: isProjectBacked,
          disabled: isProjectBacked,
        }"
        :disabled="isProjectBacked"
      >
        Back this project
      </button>
      <button
        @click="bookmark"
        class="round"
        :class="{ bookmarked: isBookmarked }"
      >
        <IconBookmark /> <strong>{{ computedText }}</strong>
      </button>
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
