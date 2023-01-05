<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import { useRouter } from "vue-router";
import * as yup from "yup";
const router = useRouter();

// Define a validation schema
const schema = yup.object({
  currentZip: yup.string().required().label("Current zip"),
  destZip: yup.string().required().label("Destination zip"),
});
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));
  router.push(
    "/quote" + `?current=${values.currentZip}` + `&dest=${values.destZip}`
  );
});
</script>
<template>
  <section>
    <h1>Get Your Quote</h1>
    <p>
      Provide your current ZIP code and <br />the one of where you're moving
    </p>
    <form @submit="onSubmit">
      <!-- SOME FIELDS -->
      <Field name="currentZip" type="number" placeholder="Current ZIP code" />
      <span>
        {{ errors.currentZip }}
      </span>
      <Field name="destZip" type="number" placeholder="Destination ZIP code" />
      <span>
        {{ errors.destZip }}
      </span>
      <button type="submit">Start Quote</button>
    </form>
  </section>
</template>

<style lang="postcss" scoped>
section {
  text-align: center;
  padding: var(--space-xl) 0;
  h1 {
    font-weight: 600;
    font-style: italic;
    font-family: var(--font-header);
    font-size: var(--step-3);
    color: var(--purple);
  }
  p {
    font-size: var(--step--1);
    line-height: 1.2;
    color: var(--gray-500);
  }
  input {
    display: block;
    width: 200px;
    margin: var(--space-xs) auto;
    padding: var(--space-xs);
    border-radius: 8px;
    border: 1px solid var(--gray-500);
    font-size: var(--step--1);
  }
  button {
    background-image: linear-gradient(
      45deg,
      hsl(236deg 45% 49%) 0%,
      hsl(237deg 44% 54%) 11%,
      hsl(238deg 45% 58%) 22%,
      hsl(238deg 45% 62%) 33%,
      hsl(238deg 45% 66%) 44%,
      hsl(238deg 45% 70%) 56%,
      hsl(237deg 45% 74%) 67%,
      hsl(237deg 45% 78%) 78%,
      hsl(237deg 44% 82%) 89%,
      hsl(236deg 42% 86%) 100%
    );
    border: none;
    border: 2px solid var(--purple);
    color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    border-radius: 999px;
    font-weight: 600;
    font-size: var(--step-0);
    padding: var(--space-2xs) var(--space-s);
    margin: var(--space-2xs) 0;
  }
  span {
    display: block;
    font-size: var(--step--2);
    color: red;
  }
}
</style>
