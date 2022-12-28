<template>
  <progress :value="currentStepIdx + 1" max="4"></progress>
  <div class="step-number">
    Step
    {{ currentStepIdx + 1 }}
  </div>
  <div class="exit">
    <RouterLink to="/">
      <ph-x :size="24" />
    </RouterLink>
  </div>
  <form @submit="onSubmit">
    <slot />

    <div>
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 300,
            type: 'keyframes',
            ease: 'easeIn',
          },
        }"
        :delay="200"
        class="required-note"
      >
        * indicates required field
      </div>
      <button v-if="hasPrevious" type="button" @click="goToPrev">
        Previous
      </button>
      <button
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 300,
            type: 'keyframes',
            ease: 'easeIn',
          },
        }"
        :delay="200"
        type="submit"
      >
        {{ isLastStep ? "Get Quote" : "Next" }}
      </button>
    </div>

    <!-- <pre>{{ values }}</pre> -->
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { ref, computed, provide } from "vue";

const props = defineProps({
  validationSchema: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["submit"]);
const currentStepIdx = ref(0);

// Injects the starting step, child <form-steps> will use this to generate their ids
const stepCounter = ref(0);
provide("STEP_COUNTER", stepCounter);

// Inject the live ref of the current index to child components
// will be used to toggle each form-step visibility
provide("CURRENT_STEP_INDEX", currentStepIdx);

// if this is the last step
const isLastStep = computed(() => {
  return currentStepIdx.value === stepCounter.value - 1;
});

// If the `previous` button should appear
const hasPrevious = computed(() => {
  return currentStepIdx.value > 0;
});

// extracts the indivdual step schema
const currentSchema = computed(() => {
  return props.validationSchema[currentStepIdx.value];
});

const { values, handleSubmit } = useForm({
  // vee-validate will be aware of computed schema changes
  validationSchema: currentSchema,
  // turn this on so each step values won't get removed when you move back or to the next step
  keepValuesOnUnmount: true,
});

// We are using the "submit" handler to progress to next steps
// and to submit the form if its the last step
const onSubmit = handleSubmit((values) => {
  if (!isLastStep.value) {
    currentStepIdx.value++;

    return;
  }

  // Let the parent know the form was filled across all steps
  emit("submit", values);
});

function goToPrev() {
  if (currentStepIdx.value === 0) {
    return;
  }

  currentStepIdx.value--;
}
</script>

<style lang="postcss" scoped>
form {
  /* padding: var(--space-s); */

  @media (min-width: 1024px) {
    /* width: 700px; */
  }
}

.required-note {
  font-size: var(--step--2);
  font-style: italic;
  color: var(--gray-400);
  margin: var(--space-xs) 0;
  margin-bottom: 0;
}

.step-number {
  position: absolute;
  top: var(--space-xs);
  left: var(--space-xs);
  font-size: var(--step-3);
  font-family: var(--font-header);
  color: var(--gray-400);
  opacity: 0.5;
}

.exit {
  position: absolute;
  top: var(--space-s);
  right: var(--space-s);
  font-size: var(--step-3);
  font-family: var(--font-header);
  color: var(--gray-400);
}

button {
  background: none;
  border: none;
  border-radius: 8px;
  padding: var(--space-2xs) var(--space-xs);
  margin-top: var(--space-xs);
  margin-right: var(--space-xs);
  background-color: var(--purple);
  color: white;
  box-shadow: 0 0 0 2px var(--purple);
  font-size: var(--step--1);
  font-weight: 600;
  text-transform: uppercase;
}

button[type="button"] {
  background-color: white;
  color: var(--purple);
}

progress {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  height: 10px;
}

progress[value]::-webkit-progress-value {
  background-image: -webkit-linear-gradient(
      -45deg,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
    -webkit-linear-gradient(left, var(--purple), var(--light-purple));

  border-radius: 2px;
  background-size: 35px 20px, 100% 100%, 100% 100%;
}
</style>
