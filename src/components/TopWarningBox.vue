<script setup lang="ts">
const showWarning = ref(true)
</script>

<template>
  <div class="top-warning-box" v-show="showWarning">
    <p class="top-warning-box__text">
      Make sure to check out <strong>VA Moving</strong> on social media!
    </p>
    <ph-x class="top-warning-box__close-icon" :size="18" @click="showWarning = false" />
  </div>
</template>

<style lang="postcss" scoped>
.top-warning-box {
  background: var(--yellow-300);
  text-align: center;

  &__text {
    font-size: var(--step--1);
    color: var(--yellow-600);
  }

  &__close-icon {
    position: absolute;
    top: 0;
    right: 0;
    margin: var(--space-3xs);
  }
}
</style>