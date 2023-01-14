<template>
  <section>
    <ul>
      <li><strong>Our Company</strong></li>
      <li>
        <RouterLink to="/story"> About Us </RouterLink>
      </li>
      <li>
        <RouterLink to="/contact"> Contact </RouterLink>
      </li>
      <!-- <li>
        <RouterLink to="/blog"> Blog </RouterLink>
      </li> -->
      <li>
        <RouterLink to="/faq"> FAQ </RouterLink>
      </li>
    </ul>
    <ul>
      <li><strong>Our Services</strong></li>
      <li>
        <RouterLink to="/Residential"> Residential </RouterLink>
      </li>
      <!-- <li>
        <RouterLink to="/packing"> Packing </RouterLink>
      </li> -->
      <li>
        <RouterLink to="/junk"> Junk Removal </RouterLink>
      </li>
      <li>
        <RouterLink to="/commercial"> Commercial </RouterLink>
      </li>
    </ul>
    <ul>
      <li><strong>Our Socials</strong></li>
      <li>
        <a href="https://facebook.com/vamoving" target="_blank">
          <ph-facebook-logo size="32" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/vamoving" target="_blank">
          <ph-instagram-logo size="32" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
section {
  font-size: var(--step--1);

  display: flex;
  justify-content: space-between;
  padding: var(--space-l) var(--space-xs);

  background-color: var(--purple);
  color: white;

  @media (min-width: 1024px) {
    justify-content: space-around;
  }

  ul {
    li {
      margin: var(--space-3xs) 0;

      strong {
        font-family: var(--font-header);
        letter-spacing: 1px;
      }

      a {
        text-decoration: 2px solid underline;
        text-underline-offset: 6px;

        &:hover {
          text-decoration: none;
          color: var(--gray-300);
        }
      }
    }
  }
}
</style>
