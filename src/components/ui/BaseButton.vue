<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 font-display font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      sizeClasses,
      variantClasses,
    ]"
    v-bind="$attrs"
  >
    <slot />
    <svg
      v-if="arrow"
      class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </component>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'ghost'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  href: {
    type: String,
    default: null,
  },
  arrow: {
    type: Boolean,
    default: false,
  },
})

defineOptions({ inheritAttrs: false })
</script>

<script>
export default {
  computed: {
    variantClasses() {
      const map = {
        primary: 'bg-accent text-white hover:bg-accent-hover',
        secondary: 'bg-bg-card text-text-primary border border-border hover:border-accent hover:text-accent',
        outline: 'border border-text-primary text-text-primary hover:bg-text-primary hover:text-bg',
        ghost: 'text-text-secondary hover:text-text-primary',
      }
      return map[this.variant] || map.primary
    },
    sizeClasses() {
      const map = {
        sm: 'px-4 py-2 text-xs min-h-[36px]',
        md: 'px-6 py-3 text-sm min-h-[44px]',
        lg: 'px-8 py-4 text-sm min-h-[52px]',
      }
      return map[this.size] || map.md
    },
  },
}
</script>
