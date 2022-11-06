<script setup lang="ts">
import { ref, computed, type Ref, watch, onMounted, reactive } from "vue";

// Skeletons
import SkeletonDescription from "./components/skeletons/SkeletonDescription.vue";
import SkeletonDetail from "./components/skeletons/SkeletonDetail.vue";
import SkeletonAbout from "./components/skeletons/SkeletonAbout.vue";
import SkeletonReward from "./components/skeletons/SkeletonReward.vue";
// Cards
import Card from "./components/cards/Card.vue";
import CardDescription from "./components/cards/CardDescription.vue";
import CardDetail from "./components/cards/CardDetail.vue";
import CardAbout from "./components/cards/CardAbout.vue";
import CardReward from "./components/cards/CardReward.vue";
// Modal
import Modal from "./components/lightboxes/Modal.vue";
import Confirm from "./components/lightboxes/Confirm.vue";
import Header from "./components/Header.vue";

// Helpers
import {
  getTotalOfBackers,
  getTotalOfBacked,
  getStoredItem,
} from "./utils/helpers";
import { useFetch } from "./utils/fetch";

// Declarations
const hasButtonGroup: Ref<boolean> = ref(true);
const isPicked: Ref<number | null> = ref(0);
const isModalVisible: Ref<boolean> = ref(false);
const isConfirmVisible: Ref<boolean> = ref(false);

const description = ref();
const detail = ref();
const rewards = ref();

const backers = ref();
const current = ref();

const storedPledges: number[] = getStoredItem("pledges");

const statePledges: Ref<number[]> = ref(storedPledges || []);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  const { record } = await useFetch(
    "https://api.jsonbin.io/v3/b/624d7cd21a1b610f084ce821"
  );
  description.value = record.description;
  detail.value = record.detail;
  rewards.value = record.rewards;

  backers.value = detail.value.backers;
  current.value = detail.value.current;
};

// Computed
const getBackers = computed(() => {
  return getTotalOfBackers(statePledges.value, backers.value);
});

const getCurrent = computed(() => {
  return getTotalOfBacked(statePledges.value, current.value);
});

const isProjectBacked = computed<boolean>(() => {
  if (Number(getCurrent.value) >= Number(detail.value.total)) {
    return true;
  }
  return false;
});

const filteredRewards = computed<any>(() => {
  return rewards && rewards.value.filter((item: any) => item.id !== 0);
});

// Mehods
const openModal = (): boolean => (isModalVisible.value = true);

const closeModal = () => {
  isModalVisible.value = false;
  isPicked.value = 0;
};

const selectReward = (id: number, stock: number) => {
  if (stock === 0) return;

  isModalVisible.value = true;
  isPicked.value = id;
};

const confirmPledge = () => {
  closeModal();
  isConfirmVisible.value = true;
};

// Watch
watch([isModalVisible, isConfirmVisible], () => {
  if (isModalVisible.value || isConfirmVisible.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.removeAttribute("style");
  }
});
</script>

<template>
  <Header />
  <div class="project-section">
    <SkeletonDescription v-if="!description" />
    <CardDescription
      v-else
      :isProjectBacked="isProjectBacked"
      :title="description.title"
      :text="description.text"
      :openModal="openModal"
    />
    <SkeletonDetail v-if="!detail" />
    <CardDetail
      v-else
      :backers="getBackers"
      :current="getCurrent"
      :total="detail.total"
      :daysLeft="detail.daysLeft"
    />
    <SkeletonAbout v-if="!rewards">
      <SkeletonReward />
      <SkeletonReward />
      <SkeletonReward />
    </SkeletonAbout>
    <CardAbout v-else>
      <template v-for="reward in filteredRewards" :key="reward.id">
        <CardReward
          :reward="reward"
          :hasButtonGroup="hasButtonGroup"
          :isProjectBacked="isProjectBacked"
          @click="selectReward(reward.id, reward.stock)"
        />
      </template>
    </CardAbout>
  </div>

  <Modal :isModalVisible="isModalVisible" @close-modal="closeModal">
    <p>
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world?
    </p>
    <p v-if="!rewards">Loading...</p>
    <div class="flex column">
      <Card v-if="!rewards">Loading</Card>
      <CardReward
        v-else
        v-for="reward in rewards"
        :key="reward.id"
        :reward="reward"
        :statePledges="statePledges"
        :hasButtonGroup="false"
        :isSelected="isPicked === reward.id"
        :class="{ selected: isPicked === reward.id }"
        @open-confirm="confirmPledge"
        @click="selectReward(reward.id, reward.stock)"
      />
    </div>
  </Modal>

  <Confirm
    :isConfirmVisible="isConfirmVisible"
    @close-confirm="isConfirmVisible = false"
  />
</template>

<style>
@import "./assets/base.css";

.project-section {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

@media (min-width: 45em) {
  .project-section {
    max-width: 45em;
    margin: 20rem auto 4.8rem;
  }
}
</style>
