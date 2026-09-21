<template>
  <section v-if="testimonials.items.length > 0" class="py-24 sm:py-32 lg:py-40 bg-bg-elevated">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ testimonials.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1] mb-12 sm:mb-16"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ testimonials.headline }}
        </h2>

        <!-- Quote -->
        <div v-if="testimonials.items[0]" class="relative">
          <svg class="w-10 h-10 text-accent/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z"/>
          </svg>
          <blockquote class="text-text-primary text-xl sm:text-2xl lg:text-3xl font-display font-medium leading-relaxed tracking-tight">
            "{{ testimonials.items[0].quote }}"
          </blockquote>
          <div class="mt-8">
            <p class="font-display font-semibold text-base text-text-primary">{{ testimonials.items[0].name }}</p>
            <p class="text-text-secondary text-sm mt-1">{{ testimonials.items[0].company }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Placeholder notice when no testimonials -->
  <section v-else class="py-16 sm:py-20">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center py-12 border border-dashed border-border rounded-sm">
        <p class="text-text-muted text-sm font-display">
          {{ testimonials.placeholder }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
const testimonials = siteContent.testimonials
</script>
