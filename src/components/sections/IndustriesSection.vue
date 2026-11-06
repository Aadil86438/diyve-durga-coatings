<template>
  <section id="industries" class="bg-bg-elevated border-y border-border">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div class="max-w-2xl">
        <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">{{ industries.eyebrow }}</p>
        <h2 class="mt-2 font-display font-bold text-3xl sm:text-4xl text-text-primary">{{ industries.headline }}</h2>
        <p class="mt-3 text-text-secondary">{{ industries.description }}</p>
      </div>

      <ul class="mt-8 divide-y divide-border border-y border-border">
        <li
          v-for="item in industries.items"
          :key="item.name"
          class="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-8 py-4"
        >
          <h3 class="font-display font-semibold text-text-primary">{{ item.name }}</h3>
          <p class="text-text-secondary text-sm sm:text-base leading-relaxed">{{ item.parts }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
const industries = siteContent.industries
</script>
