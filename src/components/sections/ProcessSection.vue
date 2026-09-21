<template>
  <section id="process" class="py-24 sm:py-32 lg:py-40 relative">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="text-center mb-16 sm:mb-24">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ process.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ process.headline }}
        </h2>
        <p class="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ process.description }}
        </p>
      </div>

      <!-- Process timeline -->
      <div class="relative">
        <!-- Connecting line (desktop) -->
        <div class="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />
        <!-- Progress line (desktop) -->
        <div
          class="hidden lg:block absolute top-6 left-0 h-px bg-accent transition-all duration-700 ease-out"
          :style="{ width: `${(highestVisibleIndex / (process.stages.length - 1)) * 100}%` }"
        />

        <!-- Connecting line (mobile) - vertical -->
        <div class="lg:hidden absolute top-0 bottom-0 left-5 w-px bg-border" />

        <!-- Stages -->
        <div class="grid lg:grid-cols-5 gap-12 lg:gap-4">
          <div
            v-for="(stage, index) in process.stages"
            :key="stage.number"
            ref="stageRefs"
            class="relative"
          >
            <!-- Desktop layout -->
            <div class="hidden lg:block">
              <!-- Dot -->
              <div class="relative mb-8">
                <div
                  class="w-12 h-12 rounded-full border-2 flex items-center justify-center font-display font-bold text-sm transition-all duration-500"
                  :class="stageVisible[index]
                    ? 'border-accent bg-accent text-white'
                    : 'border-border bg-bg text-text-muted'
                  "
                >
                  {{ stage.number }}
                </div>
              </div>
              <h3
                class="font-display font-semibold text-base tracking-tight mb-2 transition-colors duration-500"
                :class="stageVisible[index] ? 'text-text-primary' : 'text-text-muted'"
              >
                {{ stage.title }}
              </h3>
              <p
                class="text-sm leading-relaxed transition-colors duration-500"
                :class="stageVisible[index] ? 'text-text-secondary' : 'text-text-muted'"
              >
                {{ stage.description }}
              </p>
            </div>

            <!-- Mobile layout -->
            <div class="lg:hidden flex gap-5">
              <div class="relative shrink-0">
                <div
                  class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-display font-bold text-xs transition-all duration-500 relative z-10"
                  :class="stageVisible[index]
                    ? 'border-accent bg-accent text-white'
                    : 'border-border bg-bg text-text-muted'
                  "
                >
                  {{ stage.number }}
                </div>
              </div>
              <div class="pb-2">
                <h3
                  class="font-display font-semibold text-lg tracking-tight mb-2 transition-colors duration-300"
                  :class="stageVisible[index] ? 'text-text-primary' : 'text-text-muted'"
                >
                  {{ stage.title }}
                </h3>
                <p
                  class="text-sm leading-relaxed transition-colors duration-300"
                  :class="stageVisible[index] ? 'text-text-secondary' : 'text-text-muted'"
                >
                  {{ stage.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const process = siteContent.process
const headingRef = ref(null)
const headingVisible = ref(false)
const stageRefs = ref([])
const stageVisible = ref(process.stages.map(() => false))

const highestVisibleIndex = computed(() => {
  let highest = -1
  stageVisible.value.forEach((v, i) => {
    if (v) highest = i
  })
  return Math.max(0, highest)
})

onMounted(() => {
  // Heading observer
  const headingObs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        headingVisible.value = true
        headingObs.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (headingRef.value) headingObs.observe(headingRef.value)

  // Stage observers
  const stageObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stageRefs.value.indexOf(entry.target)
          if (index !== -1) {
            stageVisible.value[index] = true
          }
        }
      })
    },
    { threshold: 0.3 }
  )
  stageRefs.value.forEach((el) => {
    if (el) stageObs.observe(el)
  })
})
</script>
