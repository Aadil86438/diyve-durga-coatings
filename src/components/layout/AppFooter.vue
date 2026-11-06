<template>
  <footer class="bg-bg-elevated border-t border-border">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div class="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
        <a href="#home" class="inline-block" aria-label="Back to top">
          <img
            src="@/assets/sivashakthi_logo.png"
            alt="Sivashakthi Powder Coating"
            class="h-36 sm:h-40 w-auto"
          />
        </a>

        <div class="grid gap-6 sm:grid-cols-3">
          <div>
            <p class="font-display font-bold text-accent uppercase tracking-wide">Sivashakthi</p>
            <p class="font-display font-semibold text-text-primary">Powder Coating</p>
            <p class="mt-3 text-sm text-text-secondary leading-relaxed">{{ footer.description }}</p>
          </div>

          <div>
            <p class="text-xs font-display font-semibold tracking-wider uppercase text-text-muted mb-3">Pages</p>
            <ul class="space-y-2">
              <li v-for="link in nav.links" :key="link.href">
                <a :href="link.href" class="text-sm text-text-secondary hover:text-accent">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-display font-semibold tracking-wider uppercase text-text-muted mb-3">Contact</p>
            <ul class="space-y-2 text-sm text-text-secondary">
              <li>
                <a :href="`tel:${brand.phone}`" class="hover:text-accent">{{ brand.phone }}</a>
              </li>
              <li>
                <a :href="`mailto:${brand.email}`" class="hover:text-accent break-all">{{ brand.email }}</a>
              </li>
              <li>{{ brand.address }}</li>
              <li>GSTIN {{ brand.gstin }}</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="mt-8 pt-5 border-t border-border text-xs text-text-muted">
        {{ footer.copyright }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { siteContent } from '@/data/siteContent.js'

const brand = siteContent.brand
const nav = siteContent.nav
const footer = siteContent.footer
</script>
