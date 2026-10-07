<template>
  <section id="quote" class="py-16 sm:py-24 bg-bg-elevated relative overflow-hidden">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-display font-medium tracking-widest uppercase mb-3">
          <span>Official Quotation Request</span>
        </div>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-tight"
          style="font-size: clamp(2rem, 3.5vw, 2.75rem);"
        >
          Request a Custom Coating Quote
        </h2>
        <p class="mt-3 text-text-secondary text-sm sm:text-base leading-relaxed">
          Fill in your project details below to connect with our technical team for custom pricing and fast batch turnaround.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        
        <!-- Left: Clean Quotation Form (7 cols) -->
        <div class="lg:col-span-7 bg-bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-xl">
          <form @submit.prevent="handleSubmit" novalidate class="space-y-5">
            
            <!-- Contact Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Full Name -->
              <div>
                <label for="name" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                  Full Name <span class="text-accent">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  @blur="touchField('name')"
                  @input="validateField('name')"
                  :class="inputClass('name')"
                  placeholder="Your Full Name"
                  autocomplete="name"
                />
                <transition name="fade">
                  <p v-if="touched.name && errors.name" class="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                    {{ errors.name }}
                  </p>
                </transition>
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                  Mobile / WhatsApp <span class="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  @blur="touchField('phone')"
                  @input="validateField('phone')"
                  :class="inputClass('phone')"
                  placeholder="+91 98765 43210"
                  autocomplete="tel"
                />
                <transition name="fade">
                  <p v-if="touched.phone && errors.phone" class="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                    {{ errors.phone }}
                  </p>
                </transition>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Company -->
              <div>
                <label for="company" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                  Company Name <span class="text-text-muted text-[10px]">(Optional)</span>
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  :class="inputClassBase"
                  placeholder="Company Name"
                  autocomplete="organization"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                  Email Address <span class="text-text-muted text-[10px]">(Optional)</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  @blur="touchField('email')"
                  @input="validateField('email')"
                  :class="inputClass('email')"
                  placeholder="name@example.com"
                  autocomplete="email"
                />
                <transition name="fade">
                  <p v-if="touched.email && errors.email" class="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                    {{ errors.email }}
                  </p>
                </transition>
              </div>
            </div>

            <!-- Material & Quantity -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <!-- Material -->
              <div>
                <label for="material" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                  Material Type <span class="text-accent">*</span>
                </label>
                <input
                  id="material"
                  v-model="form.material"
                  type="text"
                  @blur="touchField('material')"
                  @input="validateField('material')"
                  :class="inputClass('material')"
                  placeholder="e.g. CRCA Sheet, Aluminium"
                />
                <transition name="fade">
                  <p v-if="touched.material && errors.material" class="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                    {{ errors.material }}
                  </p>
                </transition>
              </div>

              <!-- Quantity -->
              <div>
                <label for="quantity" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                  Batch Quantity <span class="text-accent">*</span>
                </label>
                <input
                  id="quantity"
                  v-model="form.quantity"
                  type="text"
                  @blur="touchField('quantity')"
                  @input="validateField('quantity')"
                  :class="inputClass('quantity')"
                  placeholder="e.g. 50 Pcs / 200 Kg"
                />
                <transition name="fade">
                  <p v-if="touched.quantity && errors.quantity" class="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                    {{ errors.quantity }}
                  </p>
                </transition>
              </div>
            </div>

            <!-- Finish Dropdown -->
            <div>
              <label for="finish" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                Required Powder Finish <span class="text-accent">*</span>
              </label>
              <select
                id="finish"
                v-model="form.finish"
                :class="inputClassBase"
                class="cursor-pointer"
              >
                <option v-for="finish in finishOptions" :key="finish" :value="finish">
                  {{ finish }}
                </option>
              </select>
            </div>

            <!-- Message / Notes -->
            <div>
              <label for="message" class="block text-xs font-display font-medium text-text-secondary mb-1.5">
                Project Details & Notes <span class="text-text-muted text-[10px]">(Optional)</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                @blur="touchField('message')"
                @input="validateField('message')"
                :class="[inputClassBase, 'resize-none']"
                placeholder="Dimensions, RAL color shade, anti-corrosion requirement, or deadline..."
                maxlength="500"
              />
              <div class="mt-1 flex items-center justify-between">
                <transition name="fade">
                  <p v-if="touched.message && errors.message" class="text-[11px] text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
                    {{ errors.message }}
                  </p>
                </transition>
                <span class="text-[10px] text-text-muted ml-auto">{{ form.message.length }} / 500</span>
              </div>
            </div>

            <!-- Global Form Error -->
            <transition name="fade">
              <div v-if="formError" class="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <span>{{ formError }}</span>
              </div>
            </transition>

            <!-- Form Submit CTA -->
            <div class="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                :disabled="isSubmitting"
                :class="[
                  'flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-display font-bold text-xs tracking-wider uppercase rounded-lg transition-all duration-200 shadow-md cursor-pointer group',
                  isSubmitting
                    ? 'bg-accent/60 text-bg-dark/60 cursor-wait'
                    : 'bg-accent text-bg-dark hover:bg-accent-light'
                ]"
              >
                <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <span v-else>Submit Quotation via WhatsApp</span>
                <svg v-if="!isSubmitting" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                type="button"
                @click="copyTextQuote"
                :disabled="!isFormValid"
                :class="[
                  'px-4 py-3.5 font-display font-medium text-xs rounded-lg transition-all shrink-0',
                  isFormValid
                    ? 'bg-bg border border-border hover:border-accent/40 text-text-secondary hover:text-text-primary cursor-pointer'
                    : 'bg-bg border border-border text-text-muted/40 cursor-not-allowed'
                ]"
              >
                {{ copied ? 'Copied! ✓' : 'Copy Quote Text' }}
              </button>
            </div>

          </form>
        </div>

        <!-- Right: Ultra-Premium Technical Leadership Head Card (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <LeadershipSection />

          <!-- Plant Quality Commitments Card -->
          <div class="bg-bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h4 class="font-display font-bold text-sm text-text-primary flex items-center gap-2 mb-3">
              <svg class="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Facility & Quality Assurance</span>
            </h4>
            
            <div class="space-y-3 text-xs text-text-secondary">
              <div class="flex items-start gap-2.5">
                <span class="text-accent font-bold mt-0.5">•</span>
                <span><strong>7-Tank Pre-Treatment:</strong> Full chemical degreasing and anti-rust phosphating prior to coating.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-accent font-bold mt-0.5">•</span>
                <span><strong>Electrostatic Curing:</strong> Oven-cured at 180°C for maximum adhesion & durability.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-accent font-bold mt-0.5">•</span>
                <span><strong>Express Batch Support:</strong> Priority 24–48 hour turnaround for urgent industrial orders.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { siteContent } from '@/data/siteContent.js'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'

const brand = siteContent.brand
const finishOptions = siteContent.finishes.items.map((f) => f.name)

// ─── Form State ───
const form = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  material: '',
  quantity: '',
  finish: 'Matte',
  message: '',
})

const touched = reactive({
  name: false,
  phone: false,
  email: false,
  material: false,
  quantity: false,
  message: false,
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  material: '',
  quantity: '',
  message: '',
})

const formError = ref('')
const copied = ref(false)
const isSubmitting = ref(false)

// ─── Validation Rules ───
const PHONE_REGEX = /^[+]?[\d\s\-()]{10,15}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_MIN = 2
const NAME_MAX = 80
const FIELD_MIN = 2
const FIELD_MAX = 120
const MSG_MAX = 500

// Base input class string
const inputClassBase = 'w-full bg-bg border rounded-lg px-3.5 py-2.5 text-text-primary text-sm focus:outline-none transition-all duration-200 placeholder:text-text-muted/60 border-border focus:border-accent focus:ring-1 focus:ring-accent'

// Dynamic input class based on validation state
function inputClass(field) {
  if (!touched[field]) return inputClassBase
  if (errors[field]) return inputClassBase.replace('border-border', 'border-red-400/70') + ' ring-1 ring-red-400/30'
  return inputClassBase.replace('border-border', 'border-emerald-500/50') + ' ring-1 ring-emerald-500/20'
}

// ─── Field Validators ───
function validateField(field) {
  const val = form.value[field]?.trim() ?? ''

  switch (field) {
    case 'name':
      if (!val) { errors.name = 'Full name is required.'; return false }
      if (val.length < NAME_MIN) { errors.name = `Name must be at least ${NAME_MIN} characters.`; return false }
      if (val.length > NAME_MAX) { errors.name = `Name must not exceed ${NAME_MAX} characters.`; return false }
      if (/\d/.test(val)) { errors.name = 'Name should not contain numbers.'; return false }
      if (/[^a-zA-Z\s.''-]/.test(val)) { errors.name = 'Name contains invalid characters.'; return false }
      errors.name = ''; return true

    case 'phone':
      if (!val) { errors.phone = 'Phone number is required.'; return false }
      // strip all spaces/dashes for digit count check
      const digits = val.replace(/[^\d]/g, '')
      if (digits.length < 10) { errors.phone = 'Phone number must have at least 10 digits.'; return false }
      if (digits.length > 13) { errors.phone = 'Phone number is too long (max 13 digits).'; return false }
      if (!PHONE_REGEX.test(val)) { errors.phone = 'Enter a valid phone number (digits, +, spaces, dashes).'; return false }
      errors.phone = ''; return true

    case 'email':
      if (!val) { errors.email = ''; return true } // optional
      if (!EMAIL_REGEX.test(val)) { errors.email = 'Enter a valid email address (e.g. name@company.com).'; return false }
      errors.email = ''; return true

    case 'material':
      if (!val) { errors.material = 'Material type is required.'; return false }
      if (val.length < FIELD_MIN) { errors.material = `Material must be at least ${FIELD_MIN} characters.`; return false }
      if (val.length > FIELD_MAX) { errors.material = `Material must not exceed ${FIELD_MAX} characters.`; return false }
      errors.material = ''; return true

    case 'quantity':
      if (!val) { errors.quantity = 'Batch quantity is required.'; return false }
      if (val.length < FIELD_MIN) { errors.quantity = `Quantity must be at least ${FIELD_MIN} characters.`; return false }
      if (val.length > FIELD_MAX) { errors.quantity = `Quantity must not exceed ${FIELD_MAX} characters.`; return false }
      errors.quantity = ''; return true

    case 'message':
      if (val.length > MSG_MAX) { errors.message = `Notes must not exceed ${MSG_MAX} characters.`; return false }
      errors.message = ''; return true

    default:
      return true
  }
}

function touchField(field) {
  touched[field] = true
  validateField(field)
}

// ─── Full Validation ───
function validateAll() {
  const requiredFields = ['name', 'phone', 'material', 'quantity']
  const optionalValidated = ['email', 'message']
  let allValid = true

  for (const f of [...requiredFields, ...optionalValidated]) {
    touched[f] = true
    if (!validateField(f)) allValid = false
  }

  return allValid
}

const isFormValid = computed(() => {
  const requiredFilled =
    form.value.name.trim().length >= NAME_MIN &&
    form.value.phone.replace(/[^\d]/g, '').length >= 10 &&
    form.value.material.trim().length >= FIELD_MIN &&
    form.value.quantity.trim().length >= FIELD_MIN

  const noErrors = !errors.name && !errors.phone && !errors.email && !errors.material && !errors.quantity && !errors.message

  return requiredFilled && noErrors
})

// ─── WhatsApp Message Generator ───
function generateFormattedText() {
  const name = form.value.name.trim()
  const company = form.value.company.trim() ? `\n- Company: ${form.value.company.trim()}` : ''
  const phone = form.value.phone.trim() ? `\n- Mobile: ${form.value.phone.trim()}` : ''
  const email = form.value.email.trim() ? `\n- Email: ${form.value.email.trim()}` : ''
  const material = form.value.material.trim()
  const quantity = form.value.quantity.trim()
  const finish = form.value.finish.trim()
  const notes = form.value.message.trim() ? `\n\nNotes: "${form.value.message.trim()}"` : ''

  return `Hello Sivashakthi Powder Coating Team,

I would like to request a custom quotation for the following requirement:

- Client Name: ${name}${company}${phone}${email}
- Material Type: ${material}
- Batch Quantity: ${quantity}
- Required Finish: ${finish}${notes}

Please confirm rate details and estimated delivery schedule. Thank you!`
}

// ─── Submit Handler ───
function handleSubmit() {
  formError.value = ''

  if (!validateAll()) {
    formError.value = 'Please fix the highlighted errors above before submitting.'
    // Scroll to first error field
    const firstErrorField = ['name', 'phone', 'material', 'quantity', 'email', 'message'].find(f => errors[f])
    if (firstErrorField) {
      const el = document.getElementById(firstErrorField)
      if (el) el.focus({ preventScroll: false })
    }
    return
  }

  isSubmitting.value = true
  formError.value = ''

  // Small delay to show feedback, then open WhatsApp
  setTimeout(() => {
    const text = generateFormattedText()
    const phoneNum = brand.whatsapp.replace(/[^0-9]/g, '')
    const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    isSubmitting.value = false
  }, 400)
}

// ─── Copy Handler ───
function copyTextQuote() {
  if (!isFormValid.value) return

  const text = generateFormattedText()
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
