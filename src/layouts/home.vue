<script setup lang="ts">
const isLogoVisible = ref(true);
function logoviz(value: boolean) {
  isLogoVisible.value = value;
}
</script>

<template>
  <HomeTopButtons />
  <HomeVideo />
  <HomeLogo @logovis="logoviz" />
  <HomeNav />
  <main>
    <RouterView />
  </main>
  <HomeBottomQuoteButton :show-button="isLogoVisible" />
  <TheFooter @footervis="logoviz" />
</template>
