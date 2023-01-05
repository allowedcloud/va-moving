<script setup lang="ts">
const props = defineProps<{
  showButton: Boolean;
}>();
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="!props.showButton" class="home-bottom-quote-button">
      <RouterLink to="/quote"> Get Quote </RouterLink>
    </div>
  </Transition>
</template>

<style lang="postcss" scoped>
.home-bottom-quote-button {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  text-align: center;
  padding: var(--space-s);
  backdrop-filter: blur(5px);
  background-color: hsla(24, 100%, 100%, 0.72);

  a {
    padding: var(--space-2xs) var(--space-l);
    color: white;
    border-radius: 999px;
    font-weight: 600;
    background-image: linear-gradient(
      125deg,
      hsl(236deg 45% 49%) 0%,
      hsl(236deg 44% 51%) 16%,
      hsl(237deg 44% 52%) 24%,
      hsl(237deg 44% 53%) 30%,
      hsl(237deg 44% 54%) 35%,
      hsl(237deg 44% 55%) 40%,
      hsl(237deg 44% 56%) 45%,
      hsl(237deg 44% 57%) 50%,
      hsl(237deg 45% 58%) 55%,
      hsl(237deg 45% 59%) 60%,
      hsl(237deg 45% 61%) 65%,
      hsl(237deg 45% 62%) 70%,
      hsl(236deg 45% 63%) 76%,
      hsl(236deg 44% 64%) 84%,
      hsl(236deg 44% 65%) 100%
    );
  }
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
