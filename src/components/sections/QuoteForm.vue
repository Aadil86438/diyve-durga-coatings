<template>
  <section id="quote" class="py-24 sm:py-32 lg:py-40 bg-bg-elevated">
    <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: heading -->
        <div>
          <p class="text-accent text-xs font-display font-medium tracking-[0.2em] uppercase mb-4">
            {{ quote.eyebrow }}
          </p>
          <h2
            class="font-display font-bold tracking-tight text-text-primary leading-[1.1]"
            style="font-size: clamp(2rem, 4.5vw, 3rem);"
          >
            {{ quote.headline }}
          </h2>
          <p class="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed">
            {{ quote.description }}
          </p>

          <!-- Contact info -->
          <div class="mt-10 space-y-4">
            <a
              :href="`tel:${brand.phone}`"
              class="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-sm font-medium">{{ brand.phone }}</span>
            </a>
            <a
              :href="`mailto:${brand.email}`"
              class="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-sm font-medium">{{ brand.email }}</span>
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <form @submit.prevent="submitForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label :for="'name'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
                {{ quote.fields.name }}
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted"
                :placeholder="quote.fields.name"
              />
            </div>
            <div>
              <label :for="'company'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
                {{ quote.fields.company }}
              </label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted"
                :placeholder="quote.fields.company"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label :for="'phone'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
                {{ quote.fields.phone }}
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted"
                :placeholder="quote.fields.phone"
              />
            </div>
            <div>
              <label :for="'email'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
                {{ quote.fields.email }}
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted"
                :placeholder="quote.fields.email"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label :for="'material'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
                {{ quote.fields.material }}
              </label>
              <input
                id="material"
                v-model="form.material"
                type="text"
                class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted"
                :placeholder="quote.fields.material"
              />
            </div>
            <div>
              <label :for="'quantity'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
                {{ quote.fields.quantity }}
              </label>
              <input
                id="quantity"
                v-model="form.quantity"
                type="text"
                class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted"
                :placeholder="quote.fields.quantity"
              />
            </div>
          </div>

          <div>
            <label :for="'finish'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
              {{ quote.fields.finish }}
            </label>
            <select
              id="finish"
              v-model="form.finish"
              class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option value="" class="text-text-muted">Select a finish...</option>
              <option v-for="finish in finishOptions" :key="finish" :value="finish">{{ finish }}</option>
            </select>
          </div>

          <div>
            <label :for="'message'" class="block text-xs font-display font-medium tracking-wide uppercase text-text-secondary mb-2">
              {{ quote.fields.message }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full bg-bg border border-border px-4 py-3 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-300 placeholder:text-text-muted resize-y min-h-[100px]"
              :placeholder="quote.fields.message"
            />
          </div>

          <!-- Disclaimer -->
          <p class="text-text-muted text-xs leading-relaxed">
            {{ quote.disclaimer }}
          </p>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-display font-medium text-sm tracking-widest uppercase hover:bg-accent-hover transition-all duration-300 min-h-[52px] cursor-pointer group"
          >
            {{ quote.submitLabel }}
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const quote = siteContent.quote
const brand = siteContent.brand
const finishOptions = siteContent.finishes.items.map((f) => f.name)

const form = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  material: '',
  quantity: '',
  finish: '',
  message: '',
})

function submitForm() {
  const lines = [
    `*Quote Request — Diyve Durga Coatings Works*`,
    ``,
    `*Name:* ${form.value.name}`,
    form.value.company ? `*Company:* ${form.value.company}` : '',
    `*Phone:* ${form.value.phone}`,
    form.value.email ? `*Email:* ${form.value.email}` : '',
    form.value.material ? `*Material:* ${form.value.material}` : '',
    form.value.quantity ? `*Quantity:* ${form.value.quantity}` : '',
    form.value.finish ? `*Finish:* ${form.value.finish}` : '',
    form.value.message ? `*Details:* ${form.value.message}` : '',
  ].filter(Boolean).join('\n')

  const phone = brand.whatsapp.replace(/[^0-9]/g, '')
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines)}`
  window.open(url, '_blank')
}
</script>
