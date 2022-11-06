<script setup lang="ts">
import IconConfirm from "../icons/IconConfirm.vue";
defineProps<{
  isConfirmVisible: boolean;
}>();
const emit = defineEmits(["close-confirm"]);
</script>

<template>
  <div id="modal" class="modal" v-if="isConfirmVisible">
    <div>
      <IconConfirm />
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button class="primary" @click="emit('close-confirm')">Got it!</button>
    </div>
  </div>
  <div class="modal-layer" v-if="isConfirmVisible"></div>
</template>

<style scoped>
.modal {
  /* opacity: 0; */
  /* display: none; */
  position: fixed;
  z-index: 2;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: var(--white);
  transition: opacity 350ms ease-in, background 350ms ease-in;
}

.modal > div {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  text-align: center;
  padding: 3.2rem 2.4rem;
  overflow: auto;
}

.modal h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal p {
  font-weight: 500;
  color: var(--dark-gray);
}

.modal-layer {
  /* opacity: 0; */
  /* display: none; */
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
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
    max-width: 540px;
    margin: auto;
  }

  .modal h2 {
    font-size: 2.4rem;
  }

  .modal > div {
    padding: 4.8rem;
  }
}
</style>
