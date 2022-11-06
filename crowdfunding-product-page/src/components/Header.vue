<script setup lang="ts">
import { ref, type Ref } from "vue";
import Hero from "./Hero.vue";
import IconMenu from "./icons/IconMenu.vue";

const isMenuVisible: Ref<boolean> = ref(false);
const toggleMenu = () => (isMenuVisible.value = !isMenuVisible.value);
</script>
<template>
  <Hero />
  <header class="header">
    <div class="header-container">
      <img
        src="../assets/logos/logo.svg"
        alt="crowdfund"
        width="128"
        height="20"
      />
      <IconMenu
        @click="toggleMenu"
        :isMenuVisible="isMenuVisible"
        class="menu-icon d-mobile-block d-desktop-none"
      />
      <nav class="nav" :class="{ visible: isMenuVisible }">
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Discover</a>
        <a href="#" class="nav-link">Get Started</a>
      </nav>
      <div class="menu-layer" v-if="isMenuVisible"></div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.0001) 100%
  );
}
.header-container {
  max-width: 1110px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-link {
  display: block;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--dark);
  text-decoration: none;
}
.d-mobile-block {
  display: block;
}

.menu-icon {
  cursor: pointer;
}
.menu-layer {
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
@media (hover: hover) {
  .nav-link:hover {
    text-decoration: underline;
  }
}
@media (max-width: 44em) {
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    right: 2.4rem;
    left: 2.4rem;
    z-index: 2;
    background-color: var(--white);
    border-radius: 0.8rem;
  }
  .nav-link:not(:first-child) {
    border-top: 1px solid rgba(47, 47, 47, 0.1);
  }
  .nav.visible {
    display: block;
  }
  .nav-link {
    padding: 2.4rem;
  }
}
@media (min-width: 45em) {
  nav {
    display: flex;
    gap: 3rem;
  }
  .nav-link {
    font-size: 1.3rem;
    color: var(--white);
  }
  .d-desktop-none {
    display: none;
  }
}
</style>
