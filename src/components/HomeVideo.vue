<script setup lang="ts">
// const loadingState = ref(false)

// onMounted(() => {
//   const video = document.querySelector('video');
//   video.addEventListener('loadeddata', (event) => {
//     loadingState.value = true
//   });
// })
</script>

<template>
  <div class="video-wrapper">
    <video
      autoplay
      muted
      loop
      nocontrols
      playsinline
      poster="/images/home-video-poster.png"
    >
      <source
        src="@/assets/videos/home-video-compressed-three.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<style lang="postcss" scoped>
.video-wrapper {
  height: 500px;

  video {
    height: 500px;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    position: fixed;
    top: 0;
  }
}
</style>
