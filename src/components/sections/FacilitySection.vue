<template>
  <section id="plant" class="bg-bg-elevated border-y border-border">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
        <div>
          <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">{{ plant.eyebrow }}</p>
          <h2 class="mt-2 font-display font-bold text-3xl sm:text-4xl text-text-primary leading-tight">
            {{ plant.headline }}
          </h2>
          <p class="mt-3 text-text-secondary leading-relaxed">{{ plant.description }}</p>
          <p class="mt-4 text-sm text-text-primary font-medium">{{ brand.address }}</p>
        </div>
        <figure class="border border-border bg-bg">
          <img
            :src="parts"
            alt="Long blue powder coated sections hanging from the plant rack"
            class="w-full h-56 sm:h-72 object-cover"
          />
          <figcaption class="px-3 py-2.5 text-sm text-text-secondary border-t border-border">
            Finished sections on the line, ready to come down.
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
import parts from '@/assets/work/parts-overhead.jpg'

const plant = siteContent.plant
const brand = siteContent.brand
</script>
