<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{
  value: number | null;
  error: boolean;
  onInput: any;
}>();

const inputElement = ref<null | { focus: () => null }>(null);

onMounted(() => {
  if (inputElement.value) inputElement.value.focus();
});
</script>
<template>
  <div>
    <span>$</span
    ><input
      ref="inputElement"
      required
      :value="value"
      @input="onInput"
      :class="{ error: error }"
    />
  </div>
</template>

<style scoped>
div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 2.4rem;
  width: 100px;
  height: 48px;
}

span {
  color: hsla(0, 0%, 0%, 0.2);
  font-weight: 700;
  font-family: var(--font-family);
}

input {
  outline: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 3.3rem;
  position: absolute;
  left: 0;
  padding-left: 4rem;
  right: 0;
  top: 0;
  font-size: 14px;
  background: transparent;
  bottom: 0;
  font-weight: 700;
}

input:focus,
input:focus-visible {
  outline-color: var(--moderate-cyan);
}
.error {
  outline-color: red;
}
</style>
