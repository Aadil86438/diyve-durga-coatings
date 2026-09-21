<template>
  <section class="py-24 sm:py-32 lg:py-40">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="text-center mb-16 sm:mb-20">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ industries.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ industries.headline }}
        </h2>
      </div>

      <!-- Industry grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        <button
          v-for="(item, index) in industries.items"
          :key="item.name"
          class="group relative aspect-square sm:aspect-[3/4] bg-bg-card border overflow-hidden transition-all duration-500 cursor-pointer text-left"
          :class="activeIndex === index
            ? 'border-accent bg-accent-muted'
            : 'border-border hover:border-border-hover'
          "
          @click="activeIndex = index"
          @mouseenter="activeIndex = index"
        >
          <div class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <span
              class="font-display font-bold text-3xl sm:text-4xl leading-none mb-3 transition-colors duration-300"
              :class="activeIndex === index ? 'text-accent' : 'text-border'"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3
              class="font-display font-semibold text-sm sm:text-base tracking-tight transition-colors duration-300"
              :class="activeIndex === index ? 'text-text-primary' : 'text-text-secondary'"
            >
              {{ item.name }}
            </h3>
          </div>

          <!-- Bottom accent -->
          <div
            class="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
            :class="activeIndex === index ? 'bg-accent' : 'bg-transparent'"
          />
        </button>
      </div>

      <!-- Active description -->
      <div class="mt-8 text-center">
        <p class="text-text-secondary text-base sm:text-lg max-w-lg mx-auto transition-all duration-300">
          {{ industries.items[activeIndex].description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const industries = siteContent.industries
const activeIndex = ref(0)
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
