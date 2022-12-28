<script setup lang="ts">
defineProps<{
  imgSrc: string,
  imgAlt: string
}>()
</script>

<template>
  <div class="service-item">
    <img :src="imgSrc" :alt="imgAlt" />
    <div class="text-wrapper">
      <h2>
        <slot name="title" />
      </h2>
      <p>
        <slot name="text" />
      </p>
    </div>
    <!-- <div class="button-wrapper">
      <RouterLink to="/quote">
        Get Quote
      </RouterLink>
    </div> -->
  </div>
</template>

<style lang="postcss" scoped>
.service-item {
  border-radius: 12px;
  flex: 1 0 45%;

  @media (min-width: 1024px) {
    margin: var(--space-m) 0;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    aspect-ratio: 4/3;

    @media (min-width: 1024px) {
      max-height: 500px;
    }
  }

  .text-wrapper {
    padding: var(--space-xs);

    h2 {
      font-size: var(--step-1);
    }
  }

  .button-wrapper {
    a {
      display: inline-block;
      background-color: var(--light-purple);
      color: white;
      padding: var(--space-xs) var(--space-s);
      margin: var(--space-xs) var(--space-xs);
      font-size: var(--step--1);
      font-weight: 600;
      border-radius: 999px;
    }
  }
}
</style>