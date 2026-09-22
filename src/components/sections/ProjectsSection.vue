<template>
  <section id="projects" class="py-24 sm:py-32 lg:py-40">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="mb-16 sm:mb-20">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ projects.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ projects.headline }}
        </h2>
        <p class="mt-5 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed">
          {{ projects.description }}
        </p>
      </div>

      <!-- Asymmetric grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        <!-- Featured large -->
        <div
          v-if="projects.items[0]"
          class="lg:col-span-7 group cursor-pointer"
        >
          <div class="relative aspect-[4/3] lg:aspect-[4/5] bg-bg-card overflow-hidden">
            <img :src="projectImages[0]" :alt="projects.items[0].title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              <span class="text-accent text-xs font-display tracking-[0.2em] uppercase">
                {{ projects.items[0].category }}
              </span>
              <h3 class="mt-2 font-display font-semibold text-xl sm:text-2xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                {{ projects.items[0].title }}
              </h3>
              <div class="flex gap-4 mt-3 text-text-muted text-xs font-display tracking-wide uppercase">
                <span>{{ projects.items[0].finish }}</span>
                <span>·</span>
                <span>{{ projects.items[0].material }}</span>
              </div>
            </div>
            <!-- Hover arrow -->
            <div class="absolute top-6 right-6 z-20 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Two stacked small -->
        <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
          <div
            v-for="(item, idx) in projects.items.slice(1, 3)"
            :key="item.title"
            class="group cursor-pointer"
          >
            <div class="relative aspect-[16/10] bg-bg-card overflow-hidden">
              <img :src="projectImages[idx + 1]" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20">
                <span class="text-accent text-xs font-display tracking-[0.2em] uppercase">
                  {{ item.category }}
                </span>
                <h3 class="mt-1.5 font-display font-semibold text-base sm:text-lg tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                  {{ item.title }}
                </h3>
                <div class="flex gap-3 mt-2 text-text-muted text-[11px] font-display tracking-wide uppercase">
                  <span>{{ item.finish }}</span>
                  <span>·</span>
                  <span>{{ item.material }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Wide horizontal -->
        <div
          v-if="projects.items[3]"
          class="lg:col-span-12 group cursor-pointer"
        >
          <div class="relative aspect-[21/9] sm:aspect-[3/1] bg-bg-card overflow-hidden">
            <img :src="projectImages[3]" :alt="projects.items[3].title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 flex items-end justify-between gap-4">
              <div>
                <span class="text-accent text-xs font-display tracking-[0.2em] uppercase">
                  {{ projects.items[3].category }}
                </span>
                <h3 class="mt-2 font-display font-semibold text-xl sm:text-2xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                  {{ projects.items[3].title }}
                </h3>
                <div class="flex gap-4 mt-2 text-text-muted text-xs font-display tracking-wide uppercase">
                  <span>{{ projects.items[3].finish }}</span>
                  <span>·</span>
                  <span>{{ projects.items[3].material }}</span>
                </div>
              </div>
              <div class="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
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
import projectImg1 from '@/assets/lab_workstations.png'
import projectImg2 from '@/assets/maroon_curing_oven.png'
import projectImg3 from '@/assets/white_architectural_grills.png'
import projectImg4 from '@/assets/dispatch_delivery.png'

const projects = siteContent.projects
const projectImages = [projectImg1, projectImg2, projectImg3, projectImg4]
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
