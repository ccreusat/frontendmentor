<template>
  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
      <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
    </g>
  </svg>
</template>

<style scoped>
svg circle,
svg path {
  transition: fill 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bookmarked svg circle {
  fill: hsl(var(--dark-cyan));
}
.bookmarked svg path {
  fill: var(--white);
}
</style>
