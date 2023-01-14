<script setup lang="ts">
const emit = defineEmits(["footervis"]);
const footer = ref();
const footerIsVisible = useElementVisibility(footer);
watch(footerIsVisible, () => {
  emit("footervis", footerIsVisible.value);
});
</script>

<template>
  <footer ref="footer">
    <FooterTopSection />
    <FooterLinks />
    <div class="bottom-bar">
      2023 <strong>VA MOVING</strong> All Rights Reserved.
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  background-color: white;
}

.bottom-bar {
  color: white;
  font-size: var(--step--2);
  text-align: center;
  padding: var(--space-2xs) 0;
  background-image: linear-gradient(
    180deg,
    hsl(236deg 45% 49%) 19%,
    hsl(237deg 44% 51%) 64%,
    hsl(237deg 44% 53%) 78%,
    hsl(237deg 44% 55%) 87%,
    hsl(237deg 44% 56%) 92%,
    hsl(237deg 44% 58%) 96%,
    hsl(237deg 45% 60%) 98%,
    hsl(237deg 45% 61%) 99%,
    hsl(236deg 45% 63%) 100%,
    hsl(236deg 44% 65%) 100%
  );

  span {
    display: block;
    font-size: var(--step--2);
    font-style: italic;
    color: var(--gray-300);
    padding: var(--space-2xs) 0;

    a {
      font-weight: 600;
      text-decoration: 1px solid underline;
    }
  }
}
</style>
