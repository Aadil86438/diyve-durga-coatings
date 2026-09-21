<template>
  <section class="py-24 sm:py-32 lg:py-40 bg-bg-elevated">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="headingVisible ? 'animate-fade-up' : 'opacity-0'" class="text-center mb-16 sm:mb-20">
        <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
          {{ finishes.eyebrow }}
        </p>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
          style="font-size: clamp(2rem, 4.5vw, 3.5rem);"
        >
          {{ finishes.headline }}
        </h2>
        <p class="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ finishes.description }}
        </p>
      </div>

      <!-- Finishes interactive presentation -->
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left: High-end texture preview card (7 cols) -->
        <div class="lg:col-span-7 relative aspect-square max-w-lg mx-auto lg:max-w-none w-full rounded-lg overflow-hidden border border-border bg-bg-card shadow-2xl group">
          <!-- Dynamic Material Texture Canvas -->
          <div
            class="absolute inset-0 transition-all duration-700 ease-out"
            :class="finishStyles[activeIndex].bgClass"
          >
            <!-- Specular Light Beam sweep animation -->
            <div
              class="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 transition-transform duration-1000 group-hover:translate-x-full"
              :class="finishStyles[activeIndex].shineClass"
            />
            
            <!-- Texture Pattern Overlay (Hammertone / Grain / Satin sheen) -->
            <div class="absolute inset-0 opacity-40 mix-blend-overlay" :style="finishStyles[activeIndex].patternStyle" />
            
            <!-- Studio Softbox Lighting Vignette -->
            <div class="absolute inset-0 bg-radial-vignette" />
          </div>

          <!-- Technical Spec Badge (Top Right) -->
          <div class="absolute top-6 right-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-display text-white/90">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{{ finishStyles[activeIndex].specCode }}</span>
          </div>

          <!-- Bottom Material Information Bar -->
          <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-display text-accent tracking-[0.2em] uppercase font-semibold">
                Option 0{{ activeIndex + 1 }}
              </span>
              <span class="text-white/40 text-xs">•</span>
              <span class="text-xs font-display text-white/70 uppercase tracking-wider">
                {{ finishStyles[activeIndex].glossLevel }}
              </span>
            </div>
            
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {{ finishes.items[activeIndex].name }}
            </h3>
            
            <p class="mt-2 text-white/80 text-sm leading-relaxed max-w-xl">
              {{ finishes.items[activeIndex].description }}
            </p>

            <!-- Application Badges -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="app in finishStyles[activeIndex].applications"
                :key="app"
                class="text-[11px] font-display uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/10"
              >
                {{ app }}
              </span>
            </div>
          </div>

          <!-- Top Accent Line -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-accent z-20" />
        </div>

        <!-- Right: Interactive Finish Selector (5 cols) -->
        <div class="lg:col-span-5 space-y-3">
          <button
            v-for="(finish, index) in finishes.items"
            :key="finish.name"
            class="w-full flex items-center gap-4 p-4 sm:p-5 rounded-md border transition-all duration-300 text-left cursor-pointer group"
            :class="activeIndex === index
              ? 'border-accent bg-accent/10 shadow-lg shadow-accent/5'
              : 'border-border hover:border-border-hover bg-bg-card/50 hover:bg-bg-card'
            "
            @click="activeIndex = index"
          >
            <!-- Custom Styled Color Swatch Circle -->
            <div
              class="w-10 h-10 rounded-full shrink-0 border-2 shadow-inner transition-transform duration-300 group-hover:scale-105 flex items-center justify-center relative overflow-hidden"
              :class="[
                activeIndex === index ? 'border-accent ring-2 ring-accent/30' : 'border-border',
                finishStyles[index].bgClass
              ]"
            >
              <div class="absolute inset-0 opacity-30" :style="finishStyles[index].patternStyle" />
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <h4
                  class="font-display font-semibold text-base sm:text-lg tracking-tight transition-colors duration-300"
                  :class="activeIndex === index ? 'text-accent' : 'text-text-primary group-hover:text-accent'"
                >
                  {{ finish.name }}
                </h4>
                <span class="text-[11px] font-display text-text-muted">
                  {{ finishStyles[index].glossLevel }}
                </span>
              </div>
              <p class="text-text-secondary text-xs sm:text-sm mt-0.5 line-clamp-1">
                {{ finish.description }}
              </p>
            </div>

            <!-- Active Check Mark -->
            <div
              class="w-6 h-6 shrink-0 flex items-center justify-center text-accent"
              v-if="activeIndex === index"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const finishes = siteContent.finishes
const activeIndex = ref(0)
const headingRef = ref(null)
const headingVisible = ref(false)

const finishStyles = [
  {
    glossLevel: '5-15% Gloss (Matte)',
    specCode: 'RAL 9005-M (Architectural)',
    bgClass: 'bg-gradient-to-br from-neutral-900 via-neutral-950 to-black',
    shineClass: 'opacity-10',
    patternStyle: 'background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px); background-size: 8px 8px;',
    applications: ['Architectural Steel', 'Enclosures', 'Minimalist Fixtures']
  },
  {
    glossLevel: '35-50% Gloss (Satin)',
    specCode: 'RAL 9016-S (Pure White)',
    bgClass: 'bg-gradient-to-br from-slate-200 via-zinc-400 to-slate-500 text-slate-950',
    shineClass: 'opacity-40',
    patternStyle: 'background-image: linear-gradient(135deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent); background-size: 16px 16px;',
    applications: ['Window Frames', 'Medical Cabinets', 'Lab Furniture']
  },
  {
    glossLevel: '85-95% Gloss (High Gloss)',
    specCode: 'RAL 3005-G (Gloss Maroon)',
    bgClass: 'bg-gradient-to-br from-red-950 via-rose-900 to-amber-950',
    shineClass: 'opacity-80',
    patternStyle: 'background-image: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 60%);',
    applications: ['Machinery Guards', 'Automotive', 'Lab Workstations']
  },
  {
    glossLevel: 'Micro-Texture Grain',
    specCode: 'Hammertone / Fine Texture',
    bgClass: 'bg-gradient-to-br from-amber-950 via-stone-900 to-zinc-950',
    shineClass: 'opacity-25',
    patternStyle: 'background-image: repeating-radial-gradient(circle at 50% 50%, rgba(200, 120, 48, 0.25) 0, rgba(200, 120, 48, 0.25) 2px, transparent 2px, transparent 6px); background-size: 12px 12px;',
    applications: ['Heavy Machinery', 'Electrical Panels', 'Outdoor Hardware']
  },
  {
    glossLevel: 'Metallic Flake Sheen',
    specCode: 'Bronze / Metallic Sparkle',
    bgClass: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-stone-900',
    shineClass: 'opacity-60',
    patternStyle: 'background-image: radial-gradient(rgba(255, 215, 0, 0.3) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px); background-size: 10px 10px; background-position: 0 0, 5px 5px;',
    applications: ['Architectural Screens', 'Premium Furniture', 'Custom Frames']
  }
]

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
