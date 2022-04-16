<template>
  <header class="header">
    <div class="header__logo">
      VA Moving
    </div>
    <router-link to="/quote" class="header__get-quote-button">
      Get Quote
    </router-link>
  </header>
</template>

<style lang="postcss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: var(--space-s);
    margin-bottom: var(--space-xs);
    &__logo {
        color: black;
        font-size: var(--step-1);
        font-weight: 600;
    }
    &__get-quote-button {
        display: grid;
        place-content: center;
        box-shadow: 0 0 0 1px var(--brand-blue);
        color: var(--brand-blue);
        font-weight: 600;
        font-family: monospace;
        font-size: var(--step--3);
        text-transform: uppercase;
        padding: 0 var(--space-xs);
        border-radius: 9999px;
    }
}
</style>
