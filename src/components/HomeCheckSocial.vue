<template>
  <section class="check-social">
    <div class="wrapper">
      <div class="icons-wrapper">
        <a href="https://instagram.com/vamoving" target="_blank">
          <ph-instagram-logo :size="64" color="var(--purple)" />
          Instagram
        </a>
        <a href="https://facebook.com/vamoving" target="_blank">
          <ph-facebook-logo :size="64" color="var(--purple)" />
          Facebook
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.check-social {
  padding: var(--space-s) 0;
  padding-bottom: var(--space-m);

  @media (min-width: 1024px) {
    padding: var(--space-l);
  }

  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: var(--space-m) 0;
    border-top: 5px solid var(--purple);
    border-bottom: 5px solid var(--purple);
  }

  .icons-wrapper {
    display: flex;
    justify-content: center;
    gap: var(--space-m);
  }

  a {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  h1 {
    font-size: var(--step-2);
    padding: var(--space-s);
  }
}
</style>