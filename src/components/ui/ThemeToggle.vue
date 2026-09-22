<template>
  <button
    type="button"
    @click="toggleTheme"
    class="relative p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-hover/80 border border-transparent hover:border-border/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer flex items-center gap-2 select-none"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
  >
    <!-- Icon Container -->
    <div class="relative w-5 h-5 flex items-center justify-center overflow-hidden">
      <!-- Sun Icon (visible in dark mode) -->
      <svg
        class="w-5 h-5 text-amber-400 absolute transition-all duration-500 transform"
        :class="isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <!-- Moon Icon (visible in light mode) -->
      <svg
        class="w-5 h-5 text-accent absolute transition-all duration-500 transform"
        :class="isDark ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </div>

    <!-- Optional Text Label (for mobile drawers or full buttons) -->
    <span v-if="showLabel" class="text-xs font-display font-medium uppercase tracking-wider text-text-primary">
      {{ isDark ? 'Light Mode' : 'Dark Mode' }}
    </span>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'

defineProps({
  showLabel: {
    type: Boolean,
    default: false,
  },
})

const { isDark, toggleTheme } = useTheme()
</script>
