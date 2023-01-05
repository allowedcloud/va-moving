<template>
  <div>
    <RouterLink to="/contact">
      <ph-envelope :size="24" />
      CONTACT US
    </RouterLink>
    <RouterLink to="/quote"> GET QUOTE </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
div {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--space-xs);

  a {
    display: flex;
    align-items: center;
    gap: var(--space-3xs);
    font-size: var(--step--2);
    color: white;
    padding: var(--space-2xs) var(--space-xs);
    border-radius: 999px;
    backdrop-filter: blur(3px) brightness(0.7);
    box-shadow: 0 0 0 2px white;
  }
}
</style>
