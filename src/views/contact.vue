<template>
  <section>
    <div>
      <h1 class="header">Contact Us</h1>
      <p class="intro">
        Have a question, comment, or concern? We're always here to listen.
        Please don't hesitate to contact us through the form and we'll get back
        to you as soon as possible.
      </p>
    </div>
    <div>
      <ContactForm />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-xs);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid red;
    min-height: 800px;
  }
}
.header {
  font-size: var(--step-3);
  font-weight: 600;
  font-family: var(--font-header);
}

.intro {
  font-size: var(--step--1);
}
</style>
