<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
</script>

<template>
  <Splide
    :options="{
      type: 'loop',
      perPage: 4,
      arrows: false,
      gap: 20,
      autoplay: 'pause',
    }"
    aria-label="Vue Splide Example"
  >
    <SplideSlide>
      <img src="/images/commercial-2.jpeg" alt="Sample 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/commercial-3.jpeg" alt="Sample 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/commercial-4.jpeg" alt="Sample 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/commercial-5.jpeg" alt="Sample 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/commercial-6.jpeg" alt="Sample 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/commercial-7.jpeg" alt="Sample 2" />
    </SplideSlide>
  </Splide>
</template>

<style lang="postcss" scoped>
.splide {
}

img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}
</style>
