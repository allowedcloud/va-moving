<template>
  <div class="quote-form">
    <RouterView />
  </div>
  <div class="bottom-bar" />
</template>

<style lang="postcss" scoped>
.quote-form {
  display: grid;
  place-content: center;
  height: 90vh;
  padding: var(--space-s);
}
div {
  & .bottom-bar {
    background-color: var(--brand-blue);
    height: 5px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
</style>
