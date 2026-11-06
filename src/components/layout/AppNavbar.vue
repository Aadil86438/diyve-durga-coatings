<template>
  <header
    :class="[
      'sticky top-0 z-50 bg-bg-elevated border-b border-border',
      scrolled ? 'shadow-sm' : '',
    ]"
  >
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6">
      <nav class="flex items-center justify-between gap-4 py-2" aria-label="Main navigation">
        <a href="#home" class="flex items-center gap-3 min-w-0" aria-label="Sivashakthi Powder Coating home">
          <img
            src="@/assets/sivashakthi_logo.png"
            alt="Sivashakthi Powder Coating"
            class="h-[4.5rem] sm:h-[6.5rem] w-auto shrink-0"
          />
          <span class="leading-tight min-w-0 hidden sm:block">
            <span class="block font-display font-bold text-[15px] sm:text-lg tracking-wide text-accent uppercase">
              Sivashakthi
            </span>
            <span class="block font-display font-semibold text-xs sm:text-sm tracking-wide text-text-primary uppercase">
              Powder Coating
            </span>
          </span>
        </a>

        <div class="hidden lg:flex items-center gap-7">
          <a
            v-for="link in nav.links"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a :href="`tel:${brand.phone}`" class="text-sm font-semibold text-text-primary hover:text-accent">
            {{ brand.phoneDisplay }}
          </a>
          <a
            :href="nav.cta.href"
            class="inline-flex items-center px-4 py-2.5 text-sm font-display font-semibold bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            {{ nav.cta.label }}
          </a>
        </div>

        <button
          class="lg:hidden w-11 h-11 flex items-center justify-center"
          :aria-expanded="menuOpen"
          aria-label="Open menu"
          @click="toggleMenu"
        >
          <svg v-if="menuOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
          <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>
    </div>

    <div v-if="menuOpen" class="lg:hidden border-t border-border bg-bg-elevated">
      <nav class="max-w-[1120px] mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
        <a
          v-for="link in nav.links"
          :key="link.href"
          :href="link.href"
          class="py-3 text-lg font-display font-semibold text-text-primary"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a :href="`tel:${brand.phone}`" class="py-3 text-lg font-display font-semibold text-accent" @click="closeMenu">
          {{ brand.phoneDisplay }}
        </a>
        <a
          :href="nav.cta.href"
          class="mt-2 inline-flex justify-center px-4 py-3 bg-accent text-white font-display font-semibold"
          @click="closeMenu"
        >
          {{ nav.cta.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const nav = siteContent.nav
const brand = siteContent.brand
const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 8
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('scroll-locked', menuOpen.value)
}

function closeMenu() {
  menuOpen.value = false
  document.body.classList.remove('scroll-locked')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.classList.remove('scroll-locked')
})
</script>
