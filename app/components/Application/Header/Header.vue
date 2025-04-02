<template>
  <header
    class="z-10 fixed flex items-center left-0 right-0 top-0 bg-neutral-100 dark:bg-neutral-900
   border-b border-b-neutral-100 dark:border-b-neutral-800 h-[var(--application-header-height)]"
  >
    <UContainer class="flex items-center w-full">
      <ApplicationHeaderNavigation />
      <div class="ml-auto flex gap-2">
        <UButton to="https://github.com/spend-cloud-tom/front-end-boilerplate" icon="mdi:github" label="GitHub repository" variant="outline" />
        <ApplicationColorMode />
      </div>
    </UContainer>
  </header>
</template>
