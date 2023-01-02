<template>
  <h1>Working with businesses big and small</h1>
  <p>
    We have worked with businesses of all sizes that had moving projects of all
    sizes. Sometimes it's a straightforward office furniture move, other times
    it involves heavy equipment. Whatever moving needs your business has, we're
    here to meet them.
  </p>
  <CommercialPhotoCarousel />
  <h1>Unique challenges of commercial moves</h1>
  <p>
    There are several key differences between residential moving and commercial
    moving
  </p>
  <ul>
    <li>
      <strong>Scale:</strong> Commercial moving projects tend to be larger in
      scale than residential moving projects, as they often involve moving
      entire businesses, which can have a significant amount of equipment,
      furniture, and other items.
    </li>
    <li>
      <strong>Complexity: </strong> Commercial moving can be more complex than
      residential moving, as businesses often have more specialized equipment
      and may have tighter schedules and deadlines to meet.
    </li>
    <li>
      <strong>Specialized services: </strong>
      Commercial moving companies may offer specialized services such as IT
      support, document storage, and installation of office equipment. These
      services are typically not needed in residential moves.
    </li>
    <li>
      <strong>Regulations: </strong> Commercial moving may be subject to
      different regulations and requirements than residential moving, depending
      on the specific industry and location of the business.
    </li>
  </ul>
  <p>
    <strong>VA Moving</strong> is ready to tackle the challenges associated with
    commercial moving. We have the expertise, equipment, and trained
    professionals to assist your business with all its moving needs. You can
    count on us to get the job done on time so that you can be back in business
    as soon as possible.
  </p>
</template>

<style lang="postcss" scoped>
h1 {
  font-size: var(--step-2);
  padding: 0 var(--space-xs);
  padding-top: var(--space-xs);
  margin: 0;
}

p {
  margin: var(--space-xs) var(--space-xs);
  font-size: var(--step-0);
}

ul {
  list-style-type: none;
  --min: 20ch;
  --gap: 2rem;

  display: grid;
  grid-gap: var(--gap);
  /* min() with 100% prevents overflow
  in extra narrow spaces */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  padding: var(--space-xs);

  @media (min-width: 1024px) {
    --min: 30ch;
    --gap: 3rem;
  }
  li {
    /* margin: var(--space-xs) 0; */
    padding: var(--space-xs);
    border: 2px solid var(--purple);
    border-radius: 10px;
    font-size: var(--step--1);
  }
}
</style>
