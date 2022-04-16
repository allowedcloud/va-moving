<script setup lang="ts">
</script>

<template>
  <Transition name="slide-fade" appear>
    <div class="landing">
      <img src="/images/va-moving-logo-circle.png" alt="Logo" class="landing__image">
      <h1 class="landing__header">
        Make Moving, Make Sense
      </h1>
    </div>
  </Transition>
</template>

<style lang="postcss" scoped>
.landing {
  display: grid;
  place-content: center;
  overflow: hidden;

  &__image {
    aspect-ratio: 1/1;
    height: 100%;
    width: 400px;
  }
  &__header {
    margin-top: -4rem;
    text-align: center;
    font-family: serif;
    font-style: italic;
    font-size: var(--step-1);
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
