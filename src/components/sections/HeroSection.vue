<template>
  <section id="home" class="bg-bg">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
        <div>
          <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">
            {{ hero.eyebrow }}
          </p>
          <h1 class="mt-3 font-display font-bold text-text-primary leading-[1.05] text-4xl sm:text-5xl lg:text-[3.4rem]">
            {{ hero.headline }}
          </h1>
          <p class="mt-3 font-display font-semibold text-xl sm:text-2xl text-text-primary">
            {{ hero.subheadline }}
          </p>
          <p class="mt-4 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed">
            {{ hero.description }}
          </p>
          <div class="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              :href="hero.primaryCta.href"
              class="inline-flex items-center justify-center px-5 py-3 bg-accent text-white font-display font-semibold hover:bg-accent-hover"
            >
              {{ hero.primaryCta.label }}
            </a>
            <a
              :href="hero.secondaryCta.href"
              class="inline-flex items-center justify-center px-5 py-3 border border-border bg-bg-elevated text-text-primary font-display font-semibold hover:border-accent"
            >
              {{ hero.secondaryCta.label }}
            </a>
          </div>
        </div>

        <figure class="bg-bg-elevated border border-border">
          <img
            :src="spray"
            alt="Electrostatic gun spraying orange powder onto a metal part"
            class="w-full aspect-[4/3] object-cover"
          />
          <figcaption class="px-4 py-3 text-sm text-text-secondary border-t border-border">
            Electrostatic spray on the shop floor.
          </figcaption>
        </figure>
      </div>

      <dl class="mt-8 grid grid-cols-1 sm:grid-cols-3 border border-border bg-bg-elevated">
        <div class="px-4 py-3 border-b sm:border-b-0 sm:border-r border-border">
          <dt class="text-xs uppercase tracking-wide text-text-muted">Plant</dt>
          <dd class="font-display font-semibold text-text-primary">{{ brand.location }}</dd>
        </div>
        <div class="px-4 py-3 border-b sm:border-b-0 sm:border-r border-border">
          <dt class="text-xs uppercase tracking-wide text-text-muted">Oven</dt>
          <dd class="font-display font-semibold text-text-primary">12-foot electric cure</dd>
        </div>
        <div class="px-4 py-3">
          <dt class="text-xs uppercase tracking-wide text-text-muted">GSTIN</dt>
          <dd class="font-display font-semibold text-text-primary">{{ brand.gstin }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
import spray from '@/assets/work/spray-orange.jpg'

const hero = siteContent.hero
const brand = siteContent.brand
</script>
