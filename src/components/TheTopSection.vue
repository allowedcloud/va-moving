<script setup lang="ts">
defineProps<{
  header: string;
  imgSrc: string;
  imgAlt: string;
  imgPos: string;
}>();
</script>

<template>
  <section class="top-section">
    <Transition appear>
      <div class="text-wrapper">
        <h1>{{ header }}</h1>
        <p>
          <slot />
        </p>
      </div>
    </Transition>
    <div class="img-wrapper">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.top-section {
  max-width: 1280px;
  margin: 0 auto;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.img-wrapper {
  height: 600px;
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 0;

  @media (min-width: 1024px) {
    padding: var(--space-s);
    border-radius: 10px;
  }

  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    /* object-position: v-bind('imgPos'); */
    height: 100%;
    width: 100%;

    @media (min-width: 1024px) {
      /* object-position: bottom; */
      object-position: v-bind("imgPos");
      border-radius: 10px;
    }
  }
}
.text-wrapper {
  position: absolute;
  top: 25%;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    left: 6%;
  }

  h1 {
    display: inline-block;
    align-self: flex-start;
    background-color: white;
    font-weight: 600;
    font-size: var(--step-0);
    font-family: "Roboto";
    padding: var(--space-xs);
    padding-bottom: 0;
    width: 300px;
  }
  p {
    display: inline-block;
    background-color: white;
    max-width: 300px;
    font-size: var(--step--2);
    padding: var(--space-xs);
    width: 300px;
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
