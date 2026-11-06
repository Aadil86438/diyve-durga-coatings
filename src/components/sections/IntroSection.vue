<template>
  <section id="about" class="bg-bg-elevated border-y border-border">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">{{ intro.eyebrow }}</p>
      <h2 class="mt-2 font-display font-bold text-3xl sm:text-4xl text-text-primary max-w-2xl leading-tight">
        {{ intro.headline }}
      </h2>

      <ol class="mt-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
        <li v-for="(point, index) in intro.points" :key="point.title" class="bg-bg-elevated p-5 sm:p-6">
          <p class="font-display font-semibold text-accent">0{{ index + 1 }}</p>
          <h3 class="mt-2 font-display font-semibold text-lg text-text-primary">{{ point.title }}</h3>
          <p class="mt-2 text-sm sm:text-base text-text-secondary leading-relaxed">{{ point.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
const intro = siteContent.intro
</script>
