<template>
  <nav>
    <div class="links">
      <RouterLink to="/story"> Our Story </RouterLink>
      <RouterLink to="/residential"> Residential </RouterLink>
      <RouterLink to="/commercial"> Commerical </RouterLink>
      <RouterLink to="/blog" class="hos"> Blog </RouterLink>
      <RouterLink to="/faq" class="hos"> FAQ </RouterLink>
      <RouterLink to="/quote" class="hos"> FREE QUOTE </RouterLink>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  border-bottom: 2px solid var(--gray-300);
  padding: var(--space-2xs);

  @media (min-width: 1024px) {
    border: none;
  }
  .links {
    display: flex;
    justify-content: space-around;
    gap: var(--space-2xs);

    a {
      text-transform: uppercase;
      font-size: var(--step--1);
      font-weight: 600;
      text-decoration: 2px solid underline;
      text-underline-offset: 4px;
      padding: var(--space-3xs);
      color: var(--purple);

      @media (max-width: 376px) {
        font-size: var(--step--2);
      }
    }
  }
}

/* Hide on small screen */
.hos {
  display: none;

  @media (min-width: 1024px) {
    display: inline;
  }
}
</style>
