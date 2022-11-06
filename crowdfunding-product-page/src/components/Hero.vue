<template>
  <picture class="hero">
    <source
      media="(min-width: 45em)"
      srcset="../assets/images/image-hero-desktop.jpg"
    />
    <img src="../assets/images/image-hero-mobile.jpg" alt="hero" />
  </picture>
</template>

<style scoped>
.hero {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  /* background: url(../assets/images/image-hero-mobile.jpg) top center/100%
    no-repeat; */
  background-attachment: fixed;
  height: 300px;
}

.hero img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (min-width: 45em) {
  .hero {
    /* background: url(../assets/images/image-hero-desktop.jpg) top center/cover
      no-repeat; */
    height: 400px;
  }
}
</style>
