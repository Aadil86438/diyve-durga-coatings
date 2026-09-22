<template>
  <div
    ref="sliderRef"
    class="relative w-full overflow-hidden cursor-col-resize select-none touch-none"
    :style="{ aspectRatio: aspectRatio }"
    @mousedown="startDrag"
    @touchstart.passive="startDrag"
    role="slider"
    :aria-valuenow="Math.round(position * 100)"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Before and after comparison slider"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <!-- After image (background) -->
    <div class="absolute inset-0">
      <img
        :src="afterImage"
        :alt="afterAlt"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <span class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-xs font-display font-medium tracking-widest uppercase text-white">
        {{ afterLabel }}
      </span>
    </div>

    <!-- Before image (clipped) -->
    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ width: `${position * 100}%` }"
    >
      <img
        :src="beforeImage"
        :alt="beforeAlt"
        class="h-full object-cover"
        :style="{ width: `${containerWidth}px` }"
        loading="lazy"
      />
      <span class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-xs font-display font-medium tracking-widest uppercase text-white">
        {{ beforeLabel }}
      </span>
    </div>

    <!-- Divider line -->
    <div
      class="absolute top-0 bottom-0 w-[2px] bg-white z-10 pointer-events-none"
      :style="{ left: `${position * 100}%`, transform: 'translateX(-50%)' }"
    />

    <!-- Drag handle -->
    <div
      class="absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
      :style="{ left: `${position * 100}%`, transform: 'translate(-50%, -50%)' }"
    >
      <svg class="w-5 h-5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  beforeImage: { type: String, required: true },
  afterImage: { type: String, required: true },
  beforeAlt: { type: String, default: 'Before coating' },
  afterAlt: { type: String, default: 'After coating' },
  beforeLabel: { type: String, default: 'Before' },
  afterLabel: { type: String, default: 'After' },
  aspectRatio: { type: String, default: '16/9' },
})

const sliderRef = ref(null)
const position = ref(0.5)
const containerWidth = ref(0)
let isDragging = false

function updatePosition(clientX) {
  if (!sliderRef.value) return
  const rect = sliderRef.value.getBoundingClientRect()
  containerWidth.value = rect.width
  const x = clientX - rect.left
  position.value = Math.max(0.02, Math.min(0.98, x / rect.width))
}

function startDrag(e) {
  isDragging = true
  const clientX = e.touches ? e.touches[0].clientX : e.clientX
  updatePosition(clientX)
}

function onDrag(e) {
  if (!isDragging) return
  e.preventDefault()
  const clientX = e.touches ? e.touches[0].clientX : e.clientX
  updatePosition(clientX)
}

function stopDrag() {
  isDragging = false
}

function handleKeydown(e) {
  const step = 0.02
  if (e.key === 'ArrowLeft') {
    position.value = Math.max(0.02, position.value - step)
  } else if (e.key === 'ArrowRight') {
    position.value = Math.min(0.98, position.value + step)
  }
}

function updateWidth() {
  if (sliderRef.value) {
    containerWidth.value = sliderRef.value.getBoundingClientRect().width
  }
}

onMounted(() => {
  updateWidth()
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', stopDrag)
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', stopDrag)
  window.removeEventListener('resize', updateWidth)
})
</script>
