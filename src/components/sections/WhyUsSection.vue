<template>
  <section id="about" class="py-24 sm:py-32 lg:py-40 bg-bg-elevated">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="text-center mb-16 sm:mb-20">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ whyUs.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ whyUs.headline }}
        </h2>
      </div>

      <!-- Values grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        <div
          v-for="(item, index) in whyUs.items"
          :key="item.title"
          class="bg-bg-elevated p-8 sm:p-10 group"
        >
          <!-- Number -->
          <span class="text-accent/30 font-display font-bold text-5xl sm:text-6xl leading-none block mb-6 group-hover:text-accent/50 transition-colors duration-300">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="font-display font-semibold text-xl sm:text-2xl tracking-tight text-text-primary mb-3">
            {{ item.title }}
          </h3>
          <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const whyUs = siteContent.whyUs
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
