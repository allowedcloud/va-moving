<template>
  <div class="nav">
    <HomeLogo />
    <HomeNav />
  </div>
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style lang="postcss" scoped>
.nav {
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
}

main {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
