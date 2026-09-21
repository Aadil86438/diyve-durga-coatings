<template>
  <footer class="bg-bg-elevated border-t border-border">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <!-- Main footer content -->
      <div class="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <!-- Brand column -->
        <div class="sm:col-span-2 lg:col-span-1">
          <a href="#home" class="font-display font-bold text-xl tracking-tight text-text-primary">
            <span class="text-accent">DIYVE</span> DURGA
          </a>
          <p class="mt-4 text-text-secondary text-sm leading-relaxed max-w-xs">
            {{ footer.description }}
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-xs font-display font-medium tracking-[0.2em] uppercase text-text-muted mb-5">
            {{ footer.sections.navigation.title }}
          </h4>
          <ul class="space-y-3">
            <li v-for="link in nav.links" :key="link.href">
              <a
                :href="link.href"
                class="text-text-secondary text-sm hover:text-accent transition-colors duration-300"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-xs font-display font-medium tracking-[0.2em] uppercase text-text-muted mb-5">
            {{ footer.sections.services.title }}
          </h4>
          <ul class="space-y-3">
            <li v-for="service in servicesList" :key="service">
              <span class="text-text-secondary text-sm">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-display font-medium tracking-[0.2em] uppercase text-text-muted mb-5">
            {{ footer.sections.contact.title }}
          </h4>
          <ul class="space-y-3">
            <li>
              <a
                :href="`tel:${brand.phone}`"
                class="text-text-secondary text-sm hover:text-accent transition-colors duration-300"
              >
                {{ brand.phone }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${brand.email}`"
                class="text-text-secondary text-sm hover:text-accent transition-colors duration-300"
              >
                {{ brand.email }}
              </a>
            </li>
            <li>
              <span class="text-text-secondary text-sm">{{ brand.address }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-text-muted text-xs">
          {{ footer.copyright }}
        </p>
        <a href="#home" class="text-text-muted text-xs hover:text-accent transition-colors duration-300 flex items-center gap-1">
          Back to top
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'

const footer = siteContent.footer
const nav = siteContent.nav
const brand = siteContent.brand
const servicesList = siteContent.services.items.map((s) => s.title)
</script>
