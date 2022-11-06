<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";

// Components
import Card from "./Card.vue";
import RewardInput from "../RewardInput.vue";

// Helpers
import { setStoredItem } from "../../utils/helpers";

// Interface
import type { IReward, ITarget } from "../../models/interface";

// Declarations
const props = defineProps<{
  reward: IReward;
  hasButtonGroup: boolean;
  isProjectBacked?: boolean;
  isSelected?: boolean;
  statePledges?: number[];
}>();

const inputValue: Ref<number> = ref(props.reward.pledge);
const error: Ref<boolean> = ref(false);
const availability: Ref<boolean> = ref(true);
const emit = defineEmits(["open-confirm"]);

onMounted(
  () =>
    (availability.value =
      props.reward.stock || props.reward.stock === null ? true : false)
);

const onInput = ({ target: { value } }: ITarget) =>
  (inputValue.value = Number(value));

const updatePledges = (arr: number[], value: number) => {
  arr?.push(value);
  setStoredItem("pledges", arr);
};
const onSubmit = (): void => {
  if (props.reward.id === 0) {
    props.statePledges && updatePledges(props.statePledges, 0);
    emit("open-confirm");
    return;
  }
  if (inputValue.value < props.reward.pledge) {
    alert(`Minimum pledge is $${props.reward.pledge}`);
    error.value = !error.value;
    return;
  }

  props.statePledges && updatePledges(props.statePledges, inputValue.value);
  emit("open-confirm");
};
</script>

<template>
  <Card class="reward" :class="{ disabled: !availability || isProjectBacked }">
    <header class="reward-header">
      <input
        v-if="!hasButtonGroup"
        type="radio"
        name="reward"
        :reward.id="reward.id"
        :value="reward.id"
        v-model="reward.id"
        :checked="isSelected"
      />
      <div>
        <h3 class="reward-title">{{ reward.title }}</h3>
        <strong class="reward-pledge" v-if="reward.pledge"
          >Pledge ${{ reward.pledge }} or more</strong
        >
      </div>
    </header>
    <p class="reward-text">{{ reward.text }}</p>
    <div class="reward-stock" v-if="reward.id !== 0">
      <strong>{{ reward.stock }}</strong> left
    </div>
    <div class="button-group" v-if="hasButtonGroup">
      <button v-if="availability" class="primary">Select Reward</button>
      <button v-else class="secondary" disabled>Out of stock</button>
    </div>
    <footer v-else v-if="isSelected || isProjectBacked" class="reward-footer">
      <p v-if="reward.id !== 0">Enter your pledge</p>
      <form @submit.prevent="onSubmit" class="button-group">
        <RewardInput
          v-if="reward.id !== 0"
          :value="inputValue"
          :error="error"
          :onInput="onInput"
        />
        <button type="submit" class="primary reward-btn">Continue</button>
      </form>
    </footer>
  </Card>
</template>

<style scoped>
.reward {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.reward-header {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
  grid-column: 1 / 3;
}
.reward-header > div {
  display: contents;
}
.reward-header input {
  grid-row: 1 / 3;
  align-self: center;
}
.reward-pledge {
  color: var(--moderate-cyan);
  font-weight: 500;
  font-size: 1.4rem;
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
  flex: 0.6;
}
.selected {
  border-color: var(--moderate-cyan);
}
.selected .reward-title {
  color: var(--moderate-cyan);
}
.disabled > * {
  opacity: 0.5;
  /* grid-column: 1 / 4; */
}
.reward-btn {
  height: 48px;
}
.reward-footer {
  padding-top: 2.4rem;
  grid-column: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 1.6rem;
  border-top: 1px solid hsla(0, 0%, 0%, 0.2);
}

.reward-footer p {
  margin-top: 0;
}

.reward-footer > p {
  flex: 1;
}

.reward-footer > div {
  max-width: 40%;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px 0 0;
  accent-color: #379c95;
}

@media (min-width: 45em) {
  .reward {
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    display: grid;
    gap: 2.4rem;
    grid-template-columns: 1fr 1fr;
  }
  .reward-header {
    white-space: nowrap;
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

  .reward-footer {
    flex-direction: row;
    gap: inherit;
  }
}
</style>
