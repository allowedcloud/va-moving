<template>
  <section>
    <img src="/images/va-moving-crew.jpg" alt="VA Moving crew" />
    <p>
      We created <strong>VA Moving</strong> to fill a void. Surveying the
      community, residents of the greater Hampton Roads area wanted:
    </p>
    <ul>
      <li>A local company focused on customer service and satisfaction</li>
      <li>Workers that would treat their belongings like their own</li>
      <li>Good value at a fair price</li>
    </ul>
    <p>
      After all, moving is personal and even emotional at times. Many people
      have experienced or known someone taken advantage of or had a horrible
      experience. Companies should stand behind their service but many don't
      seem to.
    </p>
    <p>
      Working for the <em>van line</em> companies, we saw first hand their
      games:
    </p>
    <ol>
      <li>Price gouging</li>
      <li>Over promise and under deliver</li>
      <li>High pressure sales tactics</li>
    </ol>
    <p>
      <strong>VA Moving</strong> went forward with a vision to create a full
      service company to handle moves big and small. We eliminated the moving
      mumbo jumbo and industry lingo. Instead taking an informative business
      approach. One focused on educating and teaching consumers about quality
      moving services. Not to mention, showing them too!
    </p>
  </section>
</template>

<style lang="postcss" scoped>
section {
  margin: var(--space-l) var(--space-m);
}

img {
  border-radius: 10px;
  max-height: 500px;
  margin: 0 auto;
}

p {
  margin: var(--space-s) 0;
}

ul {
  list-style-type: square;
  list-style-position: inside;
  margin: var(--space-2xs) var(--space-s);
  font-family: var(--font-header);
  li {
    font-size: var(--step-1);
    margin: var(--space-xs) 0;
    line-height: 1.3;
    &::marker {
      color: var(--purple);
    }
  }
}

ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin: var(--space-2xs) var(--space-s);
  font-family: var(--font-header);
  li {
    font-size: var(--step-1);
    margin: var(--space-xs) 0;
    line-height: 1.3;
    &::marker {
      color: var(--purple);
    }
  }
}
</style>
