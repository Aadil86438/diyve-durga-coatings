<template>
  <section id="oven" class="bg-bg">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">{{ oven.eyebrow }}</p>
      <h2 class="mt-2 font-display font-bold text-3xl sm:text-4xl text-text-primary max-w-2xl">{{ oven.headline }}</h2>
      <p class="mt-3 text-text-secondary max-w-2xl leading-relaxed">{{ oven.description }}</p>

      <div class="mt-8 grid sm:grid-cols-2 gap-4">
        <figure class="bg-bg-elevated border border-border">
          <img :src="front" alt="The plant electric curing oven, doors closed, with the control panel" class="w-full h-64 sm:h-72 object-cover object-center" />
          <figcaption class="px-3 py-2.5 text-sm text-text-secondary border-t border-border">The curing oven on the floor.</figcaption>
        </figure>
        <figure class="bg-bg-elevated border border-border">
          <img :src="inside" alt="Inside the electric oven, empty chamber with side racks" class="w-full h-64 sm:h-72 object-cover" />
          <figcaption class="px-3 py-2.5 text-sm text-text-secondary border-t border-border">Inside the chamber.</figcaption>
        </figure>
      </div>

      <h3 class="mt-10 font-display font-semibold text-xl text-text-primary">Why the oven is electric</h3>
      <ul class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        <li v-for="item in oven.advantages" :key="item.title" class="bg-bg-elevated p-4">
          <p class="font-display font-semibold text-text-primary">{{ item.title }}</p>
          <p class="mt-1 text-sm text-text-secondary leading-relaxed">{{ item.text }}</p>
        </li>
      </ul>

      <h3 class="mt-10 font-display font-semibold text-xl text-text-primary">How a part is cured</h3>
      <ol class="mt-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <li v-for="(step, index) in oven.how" :key="step.title" class="border border-border bg-bg-elevated p-4">
          <p class="text-sm font-display font-bold text-accent">{{ index + 1 }}</p>
          <p class="mt-1 font-display font-semibold text-text-primary">{{ step.title }}</p>
          <p class="mt-1 text-sm text-text-secondary">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
import front from '@/assets/work/oven-front.jpg'
import inside from '@/assets/work/oven-inside.jpg'

const oven = siteContent.oven
</script>
