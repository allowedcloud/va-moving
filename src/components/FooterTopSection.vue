<template>
  <section>
    <div class="top-text">
      <div class="logo-wrapper">
        <img src="@/assets/vam-logo.png" alt="VA Moving logo" />
        <span> Moving </span>
      </div>
      <a
        href="https://goo.gl/maps/A3htu53cvPzsM5TA8"
        target="__blank"
        class="address"
        >1524 Merrimac Trail # A, Williamsburg, VA 23185</a
      >
    </div>
    <FooterMap />
  </section>
</template>

<style lang="postcss" scoped>
section {
  margin: 0 var(--space-xs);
  padding: var(--space-l) 0;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0 200px;
  }
}

.top-text {
  align-self: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-2xs);

  img {
    height: 45px;
  }

  span {
    font-family: var(--font-header);
    font-weight: 600;
    font-size: var(--step-2);
    color: var(--purple);
    margin-bottom: -5px;
  }
}

.address {
  display: block;
  width: 75%;
  font-size: var(--step-1);
  font-weight: 600;
  line-height: 1.5;
  text-decoration: 2px solid underline;
  text-underline-offset: 6px;
  padding: var(--space-s) 0;
}
</style>
