<template>
  <div :class="['text-center', align === 'left' && '!text-left', align === 'right' && '!text-right']">
    <p v-if="eyebrow" class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
      {{ eyebrow }}
    </p>
    <component
      :is="headingTag"
      :class="[
        'font-display font-bold tracking-tight text-text-primary leading-[1.1]',
        headingSizeClass,
      ]"
    >
      {{ headline }}
    </component>
    <p v-if="description" class="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed" :class="[align === 'center' && 'mx-auto']">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  headline: { type: String, required: true },
  description: { type: String, default: '' },
  headingTag: { type: String, default: 'h2' },
  size: { type: String, default: 'lg', validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v) },
  align: { type: String, default: 'center', validator: (v) => ['left', 'center', 'right'].includes(v) },
})
</script>

<script>
export default {
  computed: {
    headingSizeClass() {
      const map = {
        sm: 'text-xl sm:text-2xl',
        md: 'text-2xl sm:text-3xl lg:text-4xl',
        lg: 'text-3xl sm:text-4xl lg:text-5xl',
        xl: 'text-4xl sm:text-5xl lg:text-6xl',
      }
      return map[this.size] || map.lg
    },
  },
}
</script>
