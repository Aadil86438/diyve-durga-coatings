<template>
  <section id="quote" class="bg-bg">
    <div class="w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <p class="text-accent text-sm font-display font-semibold tracking-wide uppercase">{{ quote.eyebrow }}</p>
      <h2 class="mt-2 font-display font-bold text-3xl sm:text-4xl text-text-primary">{{ quote.headline }}</h2>
      <p class="mt-3 text-text-secondary max-w-2xl">{{ quote.description }}</p>

      <div class="mt-8 grid lg:grid-cols-[1.4fr_0.8fr] gap-6 items-start">
        <form class="bg-bg-elevated border border-border p-5 sm:p-6 space-y-4" novalidate @submit.prevent="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-4">
            <label class="block">
              <span class="block text-sm font-medium text-text-primary mb-1">Your name</span>
              <input v-model="form.name" type="text" autocomplete="name" required class="field" placeholder="Name" />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-text-primary mb-1">Phone</span>
              <input v-model="form.phone" type="tel" autocomplete="tel" required class="field" placeholder="10-digit mobile" />
            </label>
          </div>

          <label class="block">
            <span class="block text-sm font-medium text-text-primary mb-1">Company <span class="text-text-muted font-normal">(optional)</span></span>
            <input v-model="form.company" type="text" autocomplete="organization" class="field" placeholder="Company name" />
          </label>

          <div class="grid sm:grid-cols-2 gap-4">
            <label class="block">
              <span class="block text-sm font-medium text-text-primary mb-1">Material</span>
              <input v-model="form.material" type="text" required class="field" placeholder="MS, GI, aluminium, casting" />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-text-primary mb-1">Quantity</span>
              <input v-model="form.quantity" type="text" required class="field" placeholder="Pieces or kilograms" />
            </label>
          </div>

          <label class="block">
            <span class="block text-sm font-medium text-text-primary mb-1">Finish</span>
            <select v-model="form.finish" class="field">
              <option v-for="finish in quote.finishes" :key="finish" :value="finish">{{ finish }}</option>
            </select>
          </label>

          <label class="block">
            <span class="block text-sm font-medium text-text-primary mb-1">What are the parts? <span class="text-text-muted font-normal">(optional)</span></span>
            <textarea v-model="form.message" rows="3" maxlength="500" class="field resize-none" placeholder="Size, colour, and when you need them" />
          </label>

          <p v-if="formError" class="text-sm text-red-700">{{ formError }}</p>

          <button
            type="submit"
            class="inline-flex items-center justify-center px-5 py-3 bg-accent text-white font-display font-semibold hover:bg-accent-hover disabled:opacity-60"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Opening WhatsApp…' : quote.submitLabel }}
          </button>
          <p class="text-xs text-text-muted">{{ quote.disclaimer }}</p>
        </form>

        <aside class="bg-bg-elevated border border-border p-5 sm:p-6">
          <p class="text-xs font-display font-semibold tracking-[0.18em] uppercase text-accent">Who answers</p>
          <div class="mt-4 flex gap-4">
            <img
              :src="ownerPhoto"
              alt="Proprietor of Sivashakthi Powder Coating"
              class="h-32 w-24 shrink-0 object-cover object-top border border-border"
            />
            <div class="min-w-0">
              <p class="font-display font-bold text-xl leading-tight text-text-primary">{{ owner.role }}</p>
              <p class="mt-2 text-sm text-text-secondary leading-relaxed">{{ owner.note }}</p>
            </div>
          </div>

          <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            <a
              :href="`tel:${brand.phone}`"
              class="inline-flex items-center justify-center gap-2 px-3 py-3 bg-accent text-white text-sm font-display font-semibold hover:bg-accent-hover"
            >
              Call {{ brand.phoneDisplay }}
            </a>
            <a
              :href="`https://wa.me/${brand.whatsapp}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-3 py-3 border border-border text-sm font-display font-semibold text-text-primary hover:border-accent"
            >
              WhatsApp
            </a>
          </div>

          <ul class="mt-5 pt-4 border-t border-border space-y-3 text-sm">
            <li>
              <p class="text-text-muted">Email</p>
              <a :href="`mailto:${brand.email}`" class="text-text-primary break-all hover:text-accent">{{ brand.email }}</a>
            </li>
            <li>
              <p class="text-text-muted">Plant</p>
              <p class="text-text-primary leading-relaxed">{{ brand.address }}</p>
            </li>
            <li>
              <p class="text-text-muted">GSTIN</p>
              <p class="text-text-primary">{{ brand.gstin }}</p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { siteContent } from '@/data/siteContent.js'
import ownerPhoto from '@/assets/owner.jpg'

const brand = siteContent.brand
const quote = siteContent.quote
const owner = siteContent.owner

const form = ref({
  name: '',
  company: '',
  phone: '',
  material: '',
  quantity: '',
  finish: quote.finishes[0],
  message: '',
})

const formError = ref('')
const isSubmitting = ref(false)

function handleSubmit() {
  formError.value = ''
  const name = form.value.name.trim()
  const phoneDigits = form.value.phone.replace(/[^\d]/g, '')
  const material = form.value.material.trim()
  const quantity = form.value.quantity.trim()

  if (name.length < 2) {
    formError.value = 'Enter your name.'
    return
  }
  if (phoneDigits.length < 10) {
    formError.value = 'Enter a valid phone number.'
    return
  }
  if (material.length < 2 || quantity.length < 1) {
    formError.value = 'Add the material and the quantity.'
    return
  }

  const company = form.value.company.trim()
  const notes = form.value.message.trim()
  const text = [
    'Hello Sivashakthi Powder Coating,',
    '',
    'I need a quote for powder coating.',
    `Name: ${name}`,
    company ? `Company: ${company}` : '',
    `Phone: ${form.value.phone.trim()}`,
    `Material: ${material}`,
    `Quantity: ${quantity}`,
    `Finish: ${form.value.finish}`,
    notes ? `Details: ${notes}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  isSubmitting.value = true
  const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
  isSubmitting.value = false
}
</script>

<style scoped>
.field {
  width: 100%;
  background: rgb(var(--color-bg));
  border: 1px solid rgb(var(--color-border));
  padding: 0.65rem 0.75rem;
  font-size: 0.95rem;
  color: rgb(var(--color-text-primary));
}
.field:focus {
  outline: 2px solid rgb(var(--color-accent));
  outline-offset: 1px;
}
</style>
