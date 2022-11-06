<script setup lang="ts">
import IconClose from "../icons/IconClose.vue";
defineProps<{
  isModalVisible: boolean;
}>();
const emit = defineEmits(["close-modal"]);
</script>

<template>
  <div id="modal" class="modal" v-if="isModalVisible" role="dialog">
    <div>
      <h2>
        Back this project
        <IconClose @click="emit('close-modal')" class="modal-close" />
      </h2>
      <slot></slot>
    </div>
  </div>
  <div class="modal-layer" v-if="isModalVisible"></div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 2;
  inset: 2.4rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: var(--white);
  transition: opacity 350ms ease-in, background 350ms ease-in;
}
.modal-close {
  cursor: pointer;
}

.modal > div {
  padding: 3.2rem 2.4rem;
  overflow: auto;
  max-height: 100%;
}

.modal h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal p {
  margin-top: 1.6rem;
  font-weight: 500;
  color: var(--dark-gray);
}

.modal-layer {
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal :deep(.reward) {
  margin: 0;
  cursor: pointer;
}

.modal :deep(.reward-stock strong) {
  font-size: 1.8rem;
}

.modal :deep(.flex) {
  margin-top: 2.4rem;
  display: flex;
  gap: 2.4rem;
}
.modal :deep(.column) {
  flex-direction: column;
}

.hide {
  display: none;
  opacity: 0;
}

.show {
  display: block;
  opacity: 1;
}

@media (min-width: 45em) {
  .modal {
    max-width: 45em;
    margin: auto;
  }

  .modal > div {
    padding: 4.8rem;
  }

  .modal h2 > svg {
    position: absolute;
    top: 3.2rem;
    right: 3.2rem;
  }

  .modal :deep(.reward) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }

  .modal :deep(p) {
    font-size: 1.5rem;
  }

  .modal :deep(.reward-title),
  .modal :deep(.reward-pledge),
  .modal :deep(.reward-stock) {
    line-height: 1;
  }

  .modal :deep(.reward-title) {
    font-size: 1.6rem;
  }

  .modal :deep(.reward-header) > div {
    display: flex;
    gap: 1rem;
  }
  @media (hover: hover) {
    .modal :deep(.reward:not(.disabled):hover .reward-title) {
      color: var(--moderate-cyan);
    }
  }
  .modal :deep(.reward-pledge) {
    justify-self: start;
  }

  .modal :deep(.reward-stock) {
    grid-row: 1;
    grid-column: 3;
    justify-self: end;
  }

  .modal :deep(.reward-text) {
    grid-column: 1 / 4;
  }
}
</style>
