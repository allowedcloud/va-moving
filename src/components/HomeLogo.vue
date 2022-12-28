<script setup lang="ts">
import { ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";
// HTML Element Reference
const emit = defineEmits(["logovis"]);
const logo = ref();
const logoIsVisible = useElementVisibility(logo);
watch(logoIsVisible, () => {
  emit("logovis", logoIsVisible.value);
});
</script>

<template>
  <RouterLink to="/">
    <div ref="logo" class="home-logo">
      <img src="@/assets/vam-logo.png" alt="VA Moving logo" />
      <span>Moving</span>
    </div>
  </RouterLink>
</template>

<style lang="postcss" scoped>
.home-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2xs);
  background-color: white;
  padding: var(--space-2xs);

  img {
    height: 65px;
  }

  span {
    font-size: var(--step-3);
    font-family: var(--font-header);
    font-weight: 600;
    margin-bottom: -8px;
    color: var(--purple);
  }
}
</style>
