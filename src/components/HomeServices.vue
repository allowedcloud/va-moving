<template>
  <section class="our-services">
    <h1>
      Our Services
    </h1>
    <div class="items-wrapper">
      <HomeServicesItem img-src="/images/home-residential.png" img-alt="Family home">
        <template #title>
          Residential
        </template>
        <template #text>
          Whether moving to or from a house, apartment, town home, or condo, big or small, VA Moving is ready to assist.
          Let us worry about any and all things moving while you transition into your new home. We will be with you at
          every step of the process.
        </template>
      </HomeServicesItem>
      <HomeServicesItem img-src="/images/home-packing.jpg" img-alt="Packed truck">
        <template #title>
          Packing
        </template>
        <template #text>
          When you use VA Moving's trained professionals, you can rest assure that all your belongings will make it
          safely. Use our experienced teams to pack just the fragile items or the whole house!
        </template>
      </HomeServicesItem>
      <HomeServicesItem img-src="/images/home-storage.jpg" img-alt="Storage unit">
        <template #title>
          Storage
        </template>
        <template #text>
          Sold your house but having trouble getting back into one? VA Moving can help. With solutions from storage
          units to full service crating and warehousing, you can rest assured your goods are in safe hands and ready for
          re-delivery on your schedule and at your convenience.
        </template>
      </HomeServicesItem>
      <HomeServicesItem img-src="/images/home-declutter.jpg" img-alt="Cluttered room">
        <template #title>
          Junk Removal & Decluttering
        </template>
        <template #text>
          Feeling overwhelmed? Need to declutter? Let VA Moving assist you in getting things out of the way, so you can
          get to what's really important. No matter if you need to get rid of one item, or clear out a whole house, we
          are here to assist!
        </template>
      </HomeServicesItem>
      <HomeServicesItem img-src="/images/home-commercial.jpg" img-alt="Commercial office space">
        <template #title>
          Commercial
        </template>
        <template #text>
          Moving a business or office space can be overwhelming. Save time and money by allowing VA Moving to handle the
          relocation. Whether you need assistance during the day or after hours, VA Moving can get you back up and
          running with minimal interruption.
        </template>
      </HomeServicesItem>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.our-services {
  padding: var(--space-s) 0;
  padding-bottom: var(--space-m);

  @media (min-width: 1024px) {
    padding: var(--space-l);
    padding-top: 0;
  }

  h1 {
    font-size: var(--step-3);
    padding: var(--space-s);
  }
}

.items-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-l);
  padding: var(--space-xs);
}
</style>