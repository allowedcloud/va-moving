<script setup lang="ts">
import { ErrorMessage, Field } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

const formStatus = ref("incomplete");
</script>

<template>
  <div class="wrapper">
    <div class="form-container">
      <div v-show="formStatus === 'complete'" class="success-message">
        <h1>Success!</h1>
        <p>We will contact you as soon as we have reviewed your information.</p>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div v-show="formStatus === 'incomplete'">
        <QuoteForm />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.form-container {
}

/* Loader */
.loader-wrapper {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--space-l) 0;
}
.loader {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
}

.loader:before,
.loader:after {
  border-radius: 50%;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
}
.loader:before {
  animation: ball1 1s infinite;
  background-color: black;
  box-shadow: 30px 0 0 var(--purple);
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite;
  background-color: var(--purple);
  box-shadow: 30px 0 0 black;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  50% {
    transform: rotate(360deg) scale(1.2);
  }
  100% {
    transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 var(--purple);
  }
  50% {
    box-shadow: 0 0 0 var(--purple);
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 var(--purple);
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 black;
  }
  50% {
    box-shadow: 0 0 0 black;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 black;
    margin-top: 0;
  }
}
</style>

<route lang="yaml">
meta:
  layout: quote
</route>
