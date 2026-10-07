<template>
  <div class="relative group bg-gradient-to-b from-bg-card via-bg-card to-bg-elevated border border-accent/25 hover:border-accent/40 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 overflow-hidden">
    
    <!-- Ultra-subtle luxury ambient glow background -->
    <div class="absolute -top-24 -right-24 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

    <div class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
      
      <!-- Top Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[11px] font-display font-semibold tracking-wider uppercase">
        <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        <span>Technical Leadership</span>
      </div>

      <!-- Main Profile Section: Image + Title -->
      <div class="flex flex-col sm:flex-row items-center gap-5 w-full">
        <!-- Executive Photo Frame -->
        <div class="relative shrink-0">
          <div class="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-accent/40 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
            <img
              src="@/assets/technical_head.jpg"
              alt="Technical Operation Head - Sivashakthi Powder Coating"
              class="w-full h-full object-cover object-top"
            />
          </div>
          <!-- Verified Shield Badge -->
          <div class="absolute -bottom-2 -right-2 bg-accent text-white p-1.5 rounded-lg shadow-lg border border-bg-card" title="Verified Plant Head">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        <!-- Name & Details -->
        <div class="flex-1">
          <h3 class="text-xl sm:text-2xl font-display font-bold text-text-primary tracking-tight">
            Technical Operation - Head
          </h3>
          <p class="mt-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
            Leading plant technical operations, pre-treatment chemical standards, precision application, and custom technical inquiries.
          </p>

          <!-- Minimal Metrics Badges -->
          <div class="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] font-mono text-text-muted">
            <span class="px-2 py-0.5 rounded bg-bg border border-border">⚡ Plant Technical Direct Line</span>
            <span class="px-2 py-0.5 rounded bg-bg border border-border">🛡️ Quality Inspected</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="w-full pt-4 border-t border-border/80 flex flex-col sm:flex-row gap-3">
        <a
          :href="`tel:${brand.phone}`"
          class="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs tracking-wide transition-all duration-200 shadow-md shadow-accent/20 cursor-pointer"
        >
          <svg class="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="text-white">Call Head: {{ brand.phone }}</span>
        </a>

        <a
          :href="`https://wa.me/${brand.whatsapp}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs tracking-wide transition-all duration-200 shadow-md shadow-emerald-600/20 cursor-pointer"
        >
          <svg class="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span class="text-white">Direct WhatsApp</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'
const brand = siteContent.brand
</script>
