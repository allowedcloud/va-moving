<template>
  <div class="responsive">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120844.00113826798!2d-76.73056644212107!3d37.258614647495556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0895f85e3b995%3A0x40b758e45d992521!2sVA%20Moving!5e0!3m2!1sen!2sus!4v1669498780435!5m2!1sen!2sus"
      width="600" height="400" style="border: 0" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" />
  </div>
</template>

<style lang="postcss" scoped>
.responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  /* margin: var(--space-s) var(--space-xs); */

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}
</style>
