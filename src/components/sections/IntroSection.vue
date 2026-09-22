<template>
  <section class="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
    <!-- Decorative accent line -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-accent/50" />

    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <div ref="contentRef" class="max-w-3xl mx-auto text-center" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 5vw, 3.5rem);"
        >
          {{ intro.headline }}
        </h2>
        <p class="mt-8 text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          {{ intro.description }}
        </p>

        <!-- Transformation visual concept -->
        <div class="mt-16 relative aspect-[4/3] bg-bg-card border border-border overflow-hidden group">
          <img
            src="@/assets/intro_transformation.png"
            alt="Raw metal to powder coating transformation"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div class="absolute bottom-6 left-6 right-6">
            <p class="text-xs font-display text-accent tracking-[0.2em] uppercase mb-1">Raw → Transform → Finish</p>
            <p class="text-white font-display font-medium text-sm sm:text-base">Meticulous surface preparation & curing</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const intro = siteContent.intro
const contentRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (contentRef.value) observer.observe(contentRef.value)
})
</script>
