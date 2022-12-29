<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

// Define a validation schema
const schema = yup.object({
  firstName: yup.string().required().label("First name"),
  lastName: yup.string().required().label("Last name"),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^\S+$/, "No spaces")
    .label("Phone number"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().label("Message"),
});
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

// Form State
const formState = ref("incomplete");

// Submit function
const onSubmit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));
  window.scrollTo(0, 0);
  formState.value = "loading";
  axios
    .post(
      "https://usebasin.com/f/7de4c035611c",
      {
        message: JSON.stringify(values, null, 2),
      },
      { headers: { Accept: "application/json" } }
    )
    .then((response) => {
      if (response.status === 200) {
        formState.value = "success";
      }
    })
    .catch((error) => console.log(error));
});
</script>

<template>
  <div class="form-wrapper">
    <div v-show="formState === 'loading'" class="loader-wrapper">
      <div class="loader"></div>
    </div>
    <div v-show="formState === 'success'" class="success-wrapper">
      <img src="/icons/checkmark.svg" alt="Checkmark icon" />
      <p>Success!</p>
    </div>
    <form v-show="formState === 'incomplete'" @submit="onSubmit">
      <label>First name*</label>
      <Field name="firstName" type="text" autocomplete="given-name" />
      <span>{{ errors.firstName }}</span>

      <label>Last name*</label>
      <Field name="lastName" type="text" autocomplete="family-name" />
      <span>{{ errors.lastName }}</span>

      <label>Email*</label>
      <Field name="email" type="email" autocomplete="email" />
      <span>{{ errors.email }}</span>

      <label>Phone number*</label>
      <Field name="phoneNumber" type="text" autocomplete="tel" />
      <span>{{ errors.phoneNumber }}</span>

      <label>Message*</label>
      <Field name="message" as="textarea" rows="4" />
      <span>{{ errors.message }}</span>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="postcss" scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: var(--space-s) auto;

  span {
    color: red;
    font-size: var(--step--2);
  }
}

label {
  font-weight: 600;
}

input,
textarea {
  border: 1px solid var(--gray-400);
  border-radius: 6px;
  width: 300px;
  padding: var(--space-3xs);
}

button {
  align-self: flex-start;
  background-color: var(--purple);
  color: white;
  margin: var(--space-s) 0;
  padding: var(--space-2xs) var(--space-m);
  border-radius: 999px;
}

.success-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50px;
  }
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
