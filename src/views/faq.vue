<script setup lang="ts">
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
const faq = ref([
  {
    id: "wrapping",
    question: "Why is my furniture being wrapped in plastic?",
    answer:
      "Plastic wrap can help protect furniture from scratches, dents, and other types of damage during the move. It can also help prevent dirt and dust from accumulating on the furniture.",
  },
  {
    id: "floorrunner",
    question: "What's the purpose of the floor runner and door jam?",
    answer:
      "During a move, floor runners and door jam protectors can be used to help protect the floors and doorways of both the old and new locations.",
  },
  {
    id: "packingboxes",
    question: "How do you pack my boxes?",
    answer: "",
  },
  {
    id: "preparation",
    question: "What can I do to prepare for my move?",
    answer:
      "Organize! Try your best to organize items in rooms and prepare them to be loaded or packed",
  },
  {
    id: "unable",
    question: "What items can't the movers move?",
    answer: "Very large items like an above ground pool or treehouse",
  },
  {
    id: "tip",
    question: "Is it appropriate to tip?",
    answer: "Yes! Our movers appreciate your generousity.",
  },
  {
    id: "advanced",
    question: "How far in advance should I book my move?",
    answer: "Between one and two months",
  },
  {
    id: "leftover",
    question: "What do I do with leftover packing material?",
    answer: "We will take them or you can recylce them",
  },
  {
    id: "appliances",
    question: "Will we take appliances?",
    answer: "Yes! We will move appliances or dispose of them if you want",
  },
]);
const current = ref(faq.value[0].id);
</script>

<template>
  <div class="example accordion-example">
    <ul class="accordion">
      <li class="accordion-item" v-for="q in faq" :key="q.id" v-auto-animate>
        <div
          class="question"
          @click="current = current === q.id ? false : q.id"
        >
          {{ q.question }}
        </div>
        <p class="answer" v-if="q.id === current" v-html="q.answer" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.example {
  min-height: 80vh;
  margin-top: var(--space-l);
}
ul {
  list-style-type: none;
  margin: 0 auto;
  padding: var(--space-xs);
  max-width: 600px;
  min-height: 600px;
}
li {
  display: block;
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: 0 0 0 2px var(--purple);
  margin: var(--space-s) 0;
}
[data-dark-mode="true"] li {
  background-color: var(--purple-d);
}
.question {
  padding: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.question::before {
  content: "Q";
  font-size: 1.5em;
  margin-right: 0.5em;
  color: var(--purple);
}
[data-dark-mode="true"] .question::before {
  color: var(--purple-m);
}
.answer {
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  font-size: 0.875em;
}
</style>
