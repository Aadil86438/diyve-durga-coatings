<template>
  <section id="process" class="bg-bg">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">{{ process.eyebrow }}</p>
      <h2 class="mt-2 font-display font-bold text-3xl sm:text-4xl text-text-primary">{{ process.headline }}</h2>
      <p class="mt-3 text-text-secondary">{{ process.description }}</p>

      <ol class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <li v-for="stage in process.stages" :key="stage.number" class="bg-bg-elevated border border-border p-5">
          <p class="font-display font-bold text-accent text-2xl">{{ stage.number }}</p>
          <h3 class="mt-2 font-display font-semibold text-lg text-text-primary">{{ stage.title }}</h3>
          <p class="mt-2 text-sm text-text-secondary leading-relaxed">{{ stage.description }}</p>
        </li>
      </ol>

      <div class="mt-6 grid sm:grid-cols-3 gap-4">
        <figure v-for="photo in photos" :key="photo.caption" class="bg-bg-elevated border border-border">
          <img :src="photo.src" :alt="photo.alt" class="w-full h-48 sm:h-52 object-cover" />
          <figcaption class="px-3 py-2.5 text-sm text-text-secondary border-t border-border">
            {{ photo.caption }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
import wheels from '@/assets/work/spray-wheels.jpg'
import oven from '@/assets/work/oven-doors.jpg'
import parts from '@/assets/work/parts-blue.jpg'

const process = siteContent.process

const photos = [
  { src: wheels, alt: 'Worker spraying powder onto hanging metal wheels', caption: 'Spraying the part' },
  { src: oven, alt: 'Electric curing oven with both doors open', caption: 'Into the electric oven' },
  { src: parts, alt: 'Blue powder coated bars hanging after the cure', caption: 'Coated and hanging' },
]
</script>
