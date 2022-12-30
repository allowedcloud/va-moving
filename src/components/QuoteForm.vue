<script setup lang="ts">
import { ErrorMessage, Field } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
const route = useRoute();
const currentZip = route.query.current;
const destZip = route.query.dest;

// break down the validation steps into multiple schemas
const validationSchema = [
  yup.object({
    currentAddress: yup.string().required().label("Current address"),
    currentCity: yup.string().required().label("Town"),
    currentState: yup.string().required().label("State"),
    currentZip: yup.string().length(5).required().label("Current zip"),
    destZip: yup.string().length(5).required().label("Destination zip"),
  }),
  yup.object({
    houseType: yup
      .string()
      .required()
      .oneOf(
        [
          "apartment",
          "condominium",
          "townhouse",
          "single-story",
          "multi-story",
          "storage-unit",
        ],
        "Select a house type"
      )
      .label("House type"),
    bedroomAmount: yup
      .string()
      .required()
      .oneOf(["1", "2", "3", "4", "5+"], "How many bedrooms?")
      .label("Bedroom amount"),
    additionalInfo: yup.string().label("Additional info"),
  }),
  yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    phoneNumber: yup
      .string()
      .required()
      .length(10)
      .matches(/^\S+$/, "No spaces")
      .label("Phone number"),
    email: yup.string().required().email().label("Email"),
  }),
  yup.object({
    preferredMoveDate: yup.date().required().label("Preferred move date"),
  }),
];

const formStatus = ref("incomplete");

/**
 * Only Called when the last step is submitted
 */
function onSubmit(formData) {
  formStatus.value = "loading";
  useTimeoutFn(() => {
    formStatus.value = "complete";
  }, 3000);
  // console.log(JSON.stringify(formData, null, 2));
  // axios
  //   .post(
  //     "https://getform.io/f/87248c80-987c-4791-9770-2e358c9533d9",
  //     {
  //       message: JSON.stringify(formData, null, 2),
  //     },
  //     { headers: { Accept: "application/json" } }
  //   )
  //   .then((response) => {
  //     if (response.status === 200) {
  //       formStatus.value = "complete";
  //       console.log("Success!");
  //     }
  //   })
  //   .catch((error) => console.log(error));
}
</script>

<template>
  <div v-show="formStatus === 'loading'" class="loader-wrapper">
    <div class="loader"></div>
  </div>
  <div v-show="formStatus === 'complete'" class="success-wrapper">
    <h1>Success!</h1>
    <p>
      We will contact you as soon as we have reviewed your information. Thank
      you for your interest in VA Moving.
    </p>
    <RouterLink to="/">Home</RouterLink>
  </div>
  <div v-show="formStatus === 'incomplete'" class="form-wrapper">
    <FormWizard :validation-schema="validationSchema" @submit="onSubmit">
      <FormStep
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 300,
            type: 'keyframes',
            ease: 'easeIn',
          },
        }"
      >
        <label>Current address*</label>
        <Field
          name="currentAddress"
          :value="currentAddress"
          type="text"
          autocomplete="street-name"
        />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="currentAddress"
        />

        <label>City*</label>
        <Field
          name="currentCity"
          :value="currentCity"
          type="text"
          autocomplete="address-level2"
        />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="currentTown"
        />

        <label>State*</label>
        <Field
          name="currentState"
          :value="currentState"
          type="text"
          autocomplete="address-level1"
        />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="currentState"
        />
        <label>Zip code*</label>
        <Field
          name="currentZip"
          :value="currentZip"
          type="number"
          autocomplete="postal-code"
        />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="currentZip"
        />

        <label>Destination zip code*</label>
        <Field name="destZip" :value="destZip" type="number" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="destZip"
        />
      </FormStep>

      <FormStep
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 300,
            type: 'keyframes',
            ease: 'easeIn',
          },
        }"
      >
        <label>What type of house do you live in?*</label>
        <Field name="houseType" as="select">
          <option value="apartment">Apartment</option>
          <option value="condominium">Condominium</option>
          <option value="townhouse">Townhouse</option>
          <option value="single-story">Single-Story</option>
          <option value="multi-story">Multi-Story</option>
          <option value="storage-unit">Storage Unit</option>
        </Field>
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="houseType"
        />

        <label>How many bedrooms?*</label>
        <Field name="bedroomAmount" as="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </Field>
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="bedroomAmount"
        />

        <label>Additional info</label>
        <Field name="additionalInfo" as="textarea" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="additionalInfo"
        />
      </FormStep>

      <FormStep
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 300,
            type: 'keyframes',
            ease: 'easeIn',
          },
        }"
      >
        <label>First name*</label>
        <Field name="firstName" type="text" autocomplete="given-name" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="firstName"
        />

        <label>Last name*</label>
        <Field name="lastName" type="text" autocomplete="family-name" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="lastName"
        />

        <label>Email*</label>
        <Field name="email" type="email" autocomplete="email" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="email"
        />

        <label>Phone number*</label>
        <Field name="phoneNumber" type="text" autocomplete="tel" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="phoneNumber"
        />
      </FormStep>

      <FormStep
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 300,
            type: 'keyframes',
            ease: 'easeIn',
          },
        }"
      >
        <label>Preferred Move Date*</label>
        <Field name="preferredMoveDate" type="date" />
        <ErrorMessage
          v-motion
          :initial="{
            opacity: 0,
            y: -10,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            },
          }"
          name="preferredMoveDate"
        />
      </FormStep>
    </FormWizard>
  </div>
</template>

<style lang="postcss" scoped>
.loader-wrapper {
  display: flex;
  padding: 0 var(--space-l);
  align-items: center;
  min-height: 90vh;
}

.success-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 var(--space-l);
  min-height: 90vh;
  max-width: 500px;
  margin: 0 auto;

  h1 {
    color: var(--green);
  }

  p {
    text-align: center;
    font-size: var(--step--1);
  }

  a {
    margin: var(--space-s) 0;
    text-decoration: 2px solid underline;
    text-underline-offset: 4px;
    color: var(--gray-400);
  }
}

.form-wrapper {
  display: flex;
  padding: 0 var(--space-l);
  padding-top: var(--space-2xl);
  align-items: center;
  min-height: 90vh;

  @media (min-width: 1024px) {
    justify-content: center;
    min-width: 800px;
  }

  form {
    padding: var(--space-s);
    input,
    textarea {
      box-shadow: 0 0 0 1px var(--gray-300);
      border-radius: 6px;
      padding: var(--space-3xs);
      margin: var(--space-3xs) 0;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px var(--purple);
      }
    }

    textarea {
      resize: none;
    }

    select {
      width: 200px;
      padding: var(--space-3xs);
    }

    label {
      font-weight: 600;
      display: block;
    }

    span[role="alert"] {
      color: red;
      font-size: var(--step--2);
      display: block;
      width: 250px;
    }
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
