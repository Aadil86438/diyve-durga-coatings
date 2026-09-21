<template>
  <section class="py-24 sm:py-32 lg:py-40 bg-bg-elevated">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="text-center mb-12 sm:mb-16">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ content.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ content.headline }}
        </h2>
        <p class="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ content.description }}
        </p>
      </div>

      <!-- Slider -->
      <div class="max-w-4xl mx-auto">
        <ComparisonSlider
          :before-image="beforeImage"
          :after-image="afterImage"
          :before-label="content.beforeLabel"
          :after-label="content.afterLabel"
          before-alt="Metal component before powder coating"
          after-alt="Metal component after powder coating"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'
import ComparisonSlider from '@/components/ui/ComparisonSlider.vue'
import beforeImage from '@/assets/raw_metal_component.png'
import afterImage from '@/assets/coated_finished_component.png'

const content = siteContent.beforeAfter

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
