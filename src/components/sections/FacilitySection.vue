<template>
  <section class="py-24 sm:py-32 lg:py-40">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="mb-12 sm:mb-16">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ facility.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ facility.headline }}
        </h2>
      </div>

      <!-- Facility layout -->
      <div class="grid lg:grid-cols-3 gap-4 sm:gap-5">
        <!-- Large main image -->
        <div class="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto bg-bg-card overflow-hidden">
          <img :src="facilityImg" alt="Diyve Durga Coating Workshop Floor" class="w-full h-full object-cover" />
          <!-- Gradient overlay bottom -->
          <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <!-- Side images -->
        <div class="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
          <div class="relative aspect-square bg-bg-card overflow-hidden">
            <img :src="equipmentImg" alt="Powder coating equipment" class="w-full h-full object-cover" />
          </div>
          <div class="relative aspect-square bg-bg-card overflow-hidden">
            <img :src="detailImg" alt="Finished component details" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="mt-10 sm:mt-12 grid lg:grid-cols-2 gap-6 lg:gap-16">
        <p class="text-text-secondary text-base sm:text-lg leading-relaxed">
          {{ facility.description }}
        </p>
        <div class="flex flex-col sm:flex-row lg:flex-col gap-4">
          <div v-if="facility.location" class="flex items-start gap-3">
            <svg class="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-text-secondary text-sm">{{ facility.location }}</span>
          </div>
          <a
            href="#quote"
            class="inline-flex items-center gap-2 text-accent text-sm font-display font-medium tracking-wide uppercase hover:text-accent-hover transition-colors duration-300 group"
          >
            Schedule a Visit
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'
import facilityImg from '@/assets/maroon_curing_oven.png'
import equipmentImg from '@/assets/hero_orange_spray.png'
import detailImg from '@/assets/white_architectural_grills.png'

const facility = siteContent.facility
const headingRef = ref(null)
const headingVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        headingVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (headingRef.value) observer.observe(headingRef.value)
})
</script>
