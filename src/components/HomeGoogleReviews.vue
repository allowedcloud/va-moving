<script setup lang="ts">
import { ref } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { useIntervalFn } from "@vueuse/core";
const googleReviews = [
  {
    review:
      "After dealing with movers who didn't take care of our furnishings, Austin's company was awesome! 🤯 Took great care of everything and followed through on everything he promised. One less stress on moving day!",
    reviewAuthor: "Billy Judkins",
  },
  {
    review:
      "Austin was amazing, and I have had a lot of experience with various movers over the years. He responded quickly, his quote was fair, he allowed me changes to the move date",
    reviewAuthor: "Mary Ann Litton",
  },
  {
    review:
      "Angelo, Kevin and Black were fantastic. They arrived on time, were very courteous, accommodated all our requests and worked hard throughout. You can't go wrong with this crew. Our move was organized by Austin who went out of his way to accommodate our schedule which was a work in progress.",
    reviewAuthor: "Jack Fraley",
  },
  {
    review:
      "VA Moving did such a wonderful job helping me move into my apartment! We called them very last minute (the day before move in) and Austin was happy to make it work and gave us a great, fair quote.",
    reviewAuthor: "Hannah Barrios",
  },
  {
    review:
      "Austin is the best. We called him and he picked up the phone immediately, gave us a price quote and showed up the next day ON TIME and moved us. His team was awesome, Chris and William were professional, courteous, polite and kind.",
    reviewAuthor: "Robert Kayian",
  },
  {
    review:
      "VA Moving did an excellent job with my move. Austin was great to work with and fit my small move into their hectic schedule. His team worked quickly and set up my furniture with care and as needed. I'm definitely calling them again the next time I move!",
    reviewAuthor: "Susan Latner",
  },
  {
    review:
      "Wow! If you are looking for efficient, responsive, and just all around good movers then VA Movers is who you want to move you! Austin, Kevin, and Nolan were outstanding and so courteous and professional. Everything was loaded and moved with care and they set our stuff up perfectly.",
    reviewAuthor: "Angela Rowe",
  },
  {
    review:
      "Communication the day before the move was excellent, and Austin is very hands on, which was appreciated. Will and his crew moved me into my new home in record  time! They were professional, courteous and even helped me decide on furniture placement; they should charge more for the interior design help!",
    reviewAuthor: "Karen Christopfel",
  },
];
const shownReviews = ref([]);

shownReviews.value.push(googleReviews.shift());
// Timer function
useIntervalFn(() => {
  shownReviews.value.unshift(googleReviews.shift());
  googleReviews.push(shownReviews.value.pop());
}, 7000);

// Auto Animate
const list = ref();
onMounted(() => {
  autoAnimate(list.value); // thats it!
});
</script>

<template>
  <section>
    <h1>See What Our Customers Are Saying</h1>
    <ul ref="list">
      <li v-for="review in shownReviews" :key="review.review">
        <p>
          {{ review.review }}
        </p>
        <div class="bottom">
          <strong style="color: var(--gray-500)">
            {{ review.reviewAuthor }}
          </strong>
          <img src="/images/five-stars.webp" alt="5 Gold Stars" />
          <img class="google" src="/images/google-icon.png" alt="Google logo" />
        </div>
      </li>
    </ul>
    <a
      href="https://goo.gl/maps/A3htu53cvPzsM5TA8"
      target="_blank"
      class="read-more"
    >
      Read More Google Reviews
    </a>
  </section>
</template>

<style lang="postcss" scoped>
section {
  margin: 0 auto;
  background-color: var(--purple);
  /* padding: var(--space-l) 0; */

  h1 {
    font-weight: 600;
    font-family: var(--font-header);
    font-size: var(--step-3);
    padding: var(--space-m);
    background-color: var(--purple);
    color: white;
  }

  .read-more {
    display: block;
    width: 100%;
    background-color: var(--purple);
    color: white;
    text-align: center;
    padding: var(--space-s);
    text-decoration: 2px solid underline;
    text-underline-offset: 6px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--space-s);
    padding-bottom: var(--space-l);
    background-color: var(--purple);
    height: 400px;

    li {
      background-color: white;
      border-radius: 8px;
      padding: var(--space-s);
      max-width: 600px;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

      p {
        font-style: italic;
        font-family: var(--font-serif);
        font-size: var(--step--1);
        font-weight: 500;

        &::before {
          color: var(--light-purple);
          content: "“";
        }

        &::after {
          color: var(--light-purple);
          content: "”";
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        bottom: 0;
        width: 100%;
        margin-top: var(--space-xs);

        * {
          margin-top: var(--space-3xs);
        }

        .google {
          width: 25px;
          height: 25px;
        }

        img {
          max-height: 100%;
          width: 135px;
        }
      }
    }
  }
}
</style>
