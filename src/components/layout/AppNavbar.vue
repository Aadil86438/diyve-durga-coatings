<template>
  <header
    ref="navbar"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-bg/90 backdrop-blur-md border-b border-border/50'
        : 'bg-transparent',
    ]"
  >
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16 sm:h-20" aria-label="Main navigation">
        <!-- Logo -->
        <a href="#home" class="font-display font-bold text-lg sm:text-xl tracking-tight text-text-primary z-50 relative">
          <span class="text-accent">DIYVE</span> DURGA
        </a>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in nav.links"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 tracking-wide uppercase"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Desktop CTA -->
        <a
          :href="nav.cta.href"
          class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-display font-medium tracking-widest uppercase bg-accent text-white hover:bg-accent-hover transition-colors duration-300 min-h-[40px]"
        >
          {{ nav.cta.label }}
        </a>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <div class="w-6 flex flex-col gap-1.5">
            <span
              :class="[
                'block h-[2px] bg-text-primary transition-all duration-300 origin-center',
                menuOpen ? 'rotate-45 translate-y-[5px]' : '',
              ]"
            />
            <span
              :class="[
                'block h-[2px] bg-text-primary transition-all duration-300',
                menuOpen ? 'opacity-0 scale-x-0' : '',
              ]"
            />
            <span
              :class="[
                'block h-[2px] bg-text-primary transition-all duration-300 origin-center',
                menuOpen ? '-rotate-45 -translate-y-[5px]' : '',
              ]"
            />
          </div>
        </button>
      </nav>
    </div>

    <!-- Mobile menu overlay -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-bg/98 backdrop-blur-sm z-40 flex flex-col items-center justify-center lg:hidden"
      >
        <nav class="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          <a
            v-for="(link, i) in nav.links"
            :key="link.href"
            :href="link.href"
            class="text-2xl sm:text-3xl font-display font-bold tracking-tight text-text-primary hover:text-accent transition-colors duration-300"
            :style="{ animationDelay: `${i * 60}ms` }"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            :href="nav.cta.href"
            class="mt-4 inline-flex items-center gap-2 px-8 py-4 text-sm font-display font-medium tracking-widest uppercase bg-accent text-white hover:bg-accent-hover transition-colors duration-300"
            @click="closeMenu"
          >
            {{ nav.cta.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const nav = siteContent.nav
const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
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

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
