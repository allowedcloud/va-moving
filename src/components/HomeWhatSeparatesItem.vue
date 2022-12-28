<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="card">
    <div class="icon-wrapper">
      <img :src="icon" alt="Icon" />
    </div>
    <slot name="title" />
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card {
  margin: 0 var(--space-xs);
  padding: var(--space-s);
  border-radius: 10px;
  background-color: var(--yellow-300);
  max-width: 450px;
  flex: 0 0 70%;

  .icon-wrapper {
    display: inline;
    padding: var(--space-xs);
    background-color: white;
    border-radius: 999px;
    float: right;
    margin: var(--space-2xs);
  }

  img {
    height: 45px;
  }
}
</style>