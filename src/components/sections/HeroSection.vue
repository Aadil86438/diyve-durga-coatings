<template>
  <section
    id="home"
    class="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-bg">
      <img
        src="@/assets/hero_orange_spray.png"
        alt="Diyve Durga industrial powder coating process"
        class="w-full h-full object-cover opacity-40 object-center"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-bg z-10" />
      <!-- Ambient grain texture -->
      <div class="absolute inset-0 opacity-[0.03] z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');" />
      <!-- Decorative lines -->
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent z-10 hidden lg:block" />
      <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent z-10 hidden lg:block" />
    </div>

    <!-- Content -->
    <div class="relative z-20 w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-32 sm:py-40">
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <p class="text-accent text-xs font-display font-medium tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up" style="animation-delay: 0.1s;">
          {{ hero.eyebrow }}
        </p>

        <!-- Headline -->
        <h1
          class="font-display font-bold tracking-tight text-text-primary leading-[1.05] opacity-0 animate-fade-up"
          style="font-size: clamp(2.5rem, 6vw, 5rem); animation-delay: 0.2s;"
        >
          {{ hero.headline }}<br />
          <span class="text-text-secondary">{{ hero.subheadline }}</span>
        </h1>

        <!-- Description -->
        <p class="mt-6 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed opacity-0 animate-fade-up" style="animation-delay: 0.35s;">
          {{ hero.description }}
        </p>

        <!-- CTAs -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style="animation-delay: 0.5s;">
          <a
            :href="hero.primaryCta.href"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-display font-medium text-sm tracking-widest uppercase hover:bg-accent-hover transition-all duration-300 min-h-[52px] group"
          >
            {{ hero.primaryCta.label }}
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            :href="hero.secondaryCta.href"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-text-primary/30 text-text-primary font-display font-medium text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300 min-h-[52px]"
          >
            {{ hero.secondaryCta.label }}
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in hidden sm:flex" style="animation-delay: 1s;">
        <span class="text-text-muted text-[10px] tracking-[0.3em] uppercase font-display">Scroll</span>
        <div class="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
const hero = siteContent.hero
</script>
