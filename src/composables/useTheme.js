import { ref, computed, onMounted } from 'vue'

const theme = ref('dark')
let initialized = false

export function useTheme() {
  function applyTheme(targetTheme) {
    theme.value = targetTheme
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('theme', targetTheme)
      } catch (e) {
        // Fallback for restricted storage environments
      }
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(targetTheme)
    }
  }

  function toggleTheme() {
    const nextTheme = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
  }

  function initTheme() {
    if (typeof window === 'undefined') return
    
    // Check current class on html (set by anti-FOUC script)
    const rootClass = document.documentElement.classList.contains('light') ? 'light' : 'dark'
    theme.value = rootClass

    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }
    initialized = true
  }

  onMounted(() => {
    if (!initialized) {
      initTheme()
    }
  })

  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    isDark,
    toggleTheme,
    applyTheme,
    initTheme
  }
}
