<template>
  <section id="services" class="py-24 sm:py-32 lg:py-40 bg-bg-elevated relative">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="mb-16 sm:mb-20">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ services.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ services.headline }}
        </h2>
      </div>

      <!-- Services grid — editorial layout -->
      <div class="grid lg:grid-cols-2 gap-0">
        <!-- Left: service list -->
        <div class="space-y-0">
          <div
            v-for="(item, index) in services.items"
            :key="item.number"
            ref="serviceRefs"
            class="group border-t border-border py-6 sm:py-8 cursor-pointer transition-colors duration-300"
            :class="[
              activeIndex === index ? 'bg-bg-hover/30' : 'hover:bg-bg-hover/10',
              index === services.items.length - 1 ? 'border-b' : '',
            ]"
            @mouseenter="setActive(index)"
            @click="setActive(index)"
          >
            <div class="flex items-start gap-4 sm:gap-6">
              <span class="text-text-muted text-sm font-display font-medium tracking-wide shrink-0 mt-1">
                {{ item.number }}
              </span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-4">
                  <h3
                    class="font-display font-semibold text-xl sm:text-2xl tracking-tight transition-colors duration-300"
                    :class="activeIndex === index ? 'text-accent' : 'text-text-primary group-hover:text-accent'"
                  >
                    {{ item.title }}
                  </h3>
                  <svg
                    class="w-5 h-5 shrink-0 text-text-muted transition-all duration-300"
                    :class="activeIndex === index ? 'text-accent translate-x-1' : 'group-hover:text-accent group-hover:translate-x-1'"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <!-- Description — visible on mobile always, desktop on active -->
                <p
                  class="mt-2 text-text-secondary text-sm sm:text-base leading-relaxed transition-all duration-300 overflow-hidden"
                  :class="[
                    'lg:max-h-0 lg:opacity-0 lg:mt-0',
                    activeIndex === index ? 'lg:!max-h-24 lg:!opacity-100 lg:!mt-2' : '',
                  ]"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: visual panel (desktop only) -->
        <div class="hidden lg:flex items-center justify-center pl-16">
          <div class="relative w-full aspect-[4/5] bg-bg-card overflow-hidden group">
            <img
              src="@/assets/services_booth.png"
              alt="Diyve Durga powder coating services"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div class="absolute bottom-6 left-6 right-6 z-10">
              <span class="text-xs font-display text-accent tracking-[0.2em] uppercase block mb-1">
                Service {{ services.items[activeIndex].number }}
              </span>
              <p class="font-display font-bold text-xl text-text-primary">
                {{ services.items[activeIndex].title }}
              </p>
              <p class="text-text-secondary text-sm mt-1">
                {{ services.items[activeIndex].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const services = siteContent.services
const activeIndex = ref(0)
const headingRef = ref(null)
const headingVisible = ref(false)

function setActive(index) {
  activeIndex.value = index
}

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
