<template>
  <section id="quote" class="py-20 sm:py-28 lg:py-36 bg-bg-elevated relative overflow-hidden">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-display font-medium tracking-widest uppercase mb-4 shadow-sm">
          <span>🧾 INSTANT MATERIAL QUOTATION GENERATOR</span>
        </div>
        <h2
          class="font-display font-bold tracking-tight text-text-primary leading-[1.15]"
          style="font-size: clamp(2.2rem, 4vw, 3.2rem);"
        >
          Generate Your Official Coating Bill & Estimate ✨
        </h2>
        <p class="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed">
          Fill in your project details to see your live <strong class="text-text-primary">Original Bill Estimate Card</strong> below. Get instant rates with zero waiting time! 🚀
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        <!-- Left: Form Controls (7 cols on large screens) -->
        <div class="lg:col-span-7 bg-bg/80 backdrop-blur-md border border-border p-6 sm:p-8 rounded-2xl shadow-xl">
          <div class="flex items-center justify-between pb-6 mb-6 border-b border-border/80">
            <div>
              <h3 class="text-lg font-display font-bold text-text-primary flex items-center gap-2">
                <span>📝 Job Specifications</span>
              </h3>
              <p class="text-xs text-text-muted mt-1">Select presets or type custom details below</p>
            </div>
            <span class="text-xs font-mono px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 font-semibold">
              Step 1 of 2
            </span>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            
            <!-- Customer Info Group -->
            <div>
              <label class="block text-xs font-display font-semibold tracking-wider uppercase text-text-secondary mb-3 flex items-center gap-1.5">
                <span>👤 Customer Details</span>
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted"
                    placeholder="Your Full Name *"
                  />
                </div>
                <div>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted"
                    placeholder="Company Name (Optional)"
                  />
                </div>
                <div>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted"
                    placeholder="Mobile / WhatsApp No. *"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted"
                    placeholder="Email Address (Optional)"
                  />
                </div>
              </div>
            </div>

            <!-- Material Selection & Presets -->
            <div class="pt-2">
              <label class="block text-xs font-display font-semibold tracking-wider uppercase text-text-secondary mb-2 flex items-center justify-between">
                <span class="flex items-center gap-1.5">⚙️ Material Type & Category</span>
                <span class="text-[11px] text-accent font-normal">Click to quick-select ⚡</span>
              </label>
              
              <!-- Quick Select Pills -->
              <div class="flex flex-wrap gap-2 mb-3">
                <button
                  type="button"
                  v-for="preset in materialPresets"
                  :key="preset.name"
                  @click="selectMaterial(preset.name)"
                  :class="[
                    'text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5 cursor-pointer',
                    form.material === preset.name
                      ? 'bg-accent/20 border-accent text-accent font-medium shadow-sm'
                      : 'bg-bg-card border-border text-text-secondary hover:border-text-secondary hover:text-text-primary'
                  ]"
                >
                  <span>{{ preset.icon }}</span>
                  <span>{{ preset.name }}</span>
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    id="material"
                    v-model="form.material"
                    type="text"
                    required
                    class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted"
                    placeholder="e.g. CRCA Sheet Metal, Aluminium..."
                  />
                </div>
                <div>
                  <input
                    id="quantity"
                    v-model="form.quantity"
                    type="text"
                    required
                    class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted"
                    placeholder="Batch Quantity (e.g. 100 Pcs / 500 Kg)"
                  />
                </div>
              </div>
            </div>

            <!-- Finish Selection & Color Options -->
            <div class="pt-2">
              <label class="block text-xs font-display font-semibold tracking-wider uppercase text-text-secondary mb-2 flex items-center justify-between">
                <span class="flex items-center gap-1.5">🎨 Required Powder Finish</span>
              </label>

              <!-- Finish Options Pills -->
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                <button
                  type="button"
                  v-for="opt in finishOptionsList"
                  :key="opt.name"
                  @click="form.finish = opt.name"
                  :class="[
                    'p-2.5 rounded-xl border text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer',
                    form.finish === opt.name
                      ? 'bg-accent/20 border-accent text-accent font-medium ring-1 ring-accent'
                      : 'bg-bg-card border-border text-text-secondary hover:border-text-secondary'
                  ]"
                >
                  <span class="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20" :style="{ backgroundColor: opt.color }"></span>
                  <div class="truncate">
                    <div class="text-xs font-medium truncate text-text-primary">{{ opt.name }}</div>
                    <div class="text-[10px] text-text-muted truncate">{{ opt.tag }}</div>
                  </div>
                </button>
              </div>

              <select
                id="finish"
                v-model="form.finish"
                class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="" class="bg-bg-card text-text-muted">Or pick custom finish option...</option>
                <option v-for="finish in finishOptions" :key="finish" :value="finish" class="bg-bg-card text-text-primary">
                  {{ finish }}
                </option>
              </select>
            </div>

            <!-- Project Details / Notes -->
            <div class="pt-2">
              <label class="block text-xs font-display font-semibold tracking-wider uppercase text-text-secondary mb-2 flex items-center justify-between">
                <span class="flex items-center gap-1.5">📝 Project Notes & Specs</span>
                <span class="text-[11px] text-text-muted">Dimensions, RAL shades, target delivery...</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                class="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-200 placeholder:text-text-muted resize-y min-h-[90px]"
                placeholder="Add special notes like dimensions, RAL color code, anti-corrosion requirement, or deadline..."
              />
            </div>

            <!-- Trust Highlights Checkboxes -->
            <div class="p-4 bg-bg-card/50 border border-border rounded-xl space-y-2">
              <div class="text-xs font-display font-semibold text-text-primary flex items-center gap-1.5 mb-2">
                <span>🛡️ Included Quality Standards (Included Free):</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span>7-Tank Anti-Rust Pretreatment 🧼</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span>180°C Curing Chamber Process 🔥</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span>100% Surface Adhesion Checked 🔬</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span>24-48 HR Express Batch Support ⚡</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                class="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-display font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-accent-hover active:scale-[0.99] transition-all duration-300 shadow-lg shadow-accent/25 min-h-[52px] cursor-pointer group"
              >
                <span>Send Official Bill via WhatsApp 💬</span>
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                type="button"
                @click="copyTextQuote"
                class="inline-flex items-center justify-center gap-2 px-5 py-4 bg-bg-card border border-border hover:border-accent/50 text-text-primary font-display font-medium text-xs tracking-wider uppercase rounded-xl hover:bg-bg-hover transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>{{ copied ? 'Copied! ✅' : 'Copy Quote Text 📋' }}</span>
              </button>
            </div>

          </form>
        </div>

        <!-- Right: Live "Original Bill & Estimate Invoice Card" (5 cols on large screens) -->
        <div class="lg:col-span-5 sticky top-28">
          
          <div id="printable-bill" class="relative bg-[#0F141C] border-2 border-accent/40 rounded-2xl p-6 shadow-2xl overflow-hidden font-body text-text-primary">
            
            <!-- Top Bill Decorative Accent Line -->
            <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-amber-400 to-accent"></div>
            
            <!-- Background Watermark -->
            <div class="absolute -right-8 -bottom-8 opacity-5 text-accent font-display font-bold text-8xl pointer-events-none select-none">
              DDCW
            </div>

            <!-- Bill Header -->
            <div class="border-b border-border/80 pb-5 mb-5">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="inline-flex items-center gap-1.5 text-accent text-[11px] font-mono uppercase tracking-widest font-semibold bg-accent/15 px-2.5 py-0.5 rounded border border-accent/30 mb-2">
                    <span>🛡️ OFFICIAL ESTIMATE BILL</span>
                  </div>
                  <h4 class="font-display font-bold text-lg text-white tracking-tight flex items-center gap-2">
                    DIVYE DURGA COATING WORKS
                  </h4>
                  <p class="text-[11px] text-text-secondary mt-0.5">
                    Porur, Coimbatore, Tamil Nadu • 📞 +91 8643839796
                  </p>
                </div>

                <!-- Authentic Stamp Graphic -->
                <div class="w-14 h-14 rounded-full border-2 border-dashed border-amber-500/60 bg-amber-500/10 flex flex-col items-center justify-center text-center rotate-12 shrink-0 select-none">
                  <span class="text-[9px] font-black uppercase text-amber-400 tracking-tighter leading-none">ORIGINAL</span>
                  <span class="text-[8px] font-bold text-white/90">BILL</span>
                  <span class="text-[7px] text-amber-300">ESTIMATE</span>
                </div>
              </div>

              <!-- Bill Reference & Date Row -->
              <div class="mt-4 pt-3 border-t border-dashed border-border/60 flex items-center justify-between text-xs text-text-secondary font-mono">
                <div>
                  <span class="text-text-muted">REF #: </span>
                  <span class="text-accent font-bold">{{ quoteRefNo }}</span>
                </div>
                <div>
                  <span class="text-text-muted">DATE: </span>
                  <span class="text-text-primary font-medium">{{ currentDate }}</span>
                </div>
              </div>
            </div>

            <!-- Customer Billed To Box -->
            <div class="bg-bg/70 border border-border rounded-xl p-3.5 mb-5 space-y-1">
              <div class="text-[10px] font-mono tracking-widest text-text-muted uppercase font-semibold">CUSTOMER DETAILS / BILLED TO</div>
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-white flex items-center gap-1.5">
                  <span>👤</span>
                  <span>{{ form.name || 'Valued Customer' }}</span>
                </span>
                <span class="text-text-secondary text-[11px]" v-if="form.phone">📞 {{ form.phone }}</span>
              </div>
              <div class="text-xs text-amber-300/90 font-medium" v-if="form.company">
                🏢 {{ form.company }}
              </div>
              <div class="text-[11px] text-text-secondary truncate" v-if="form.email">
                📧 {{ form.email }}
              </div>
            </div>

            <!-- Itemized Quotation Table -->
            <div class="mb-5">
              <div class="text-[10px] font-mono tracking-widest text-text-muted uppercase font-semibold mb-2">ITEMIZED SPECIFICATIONS</div>
              
              <div class="border border-border/80 rounded-xl overflow-hidden bg-bg/50 text-xs">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-bg-elevated border-b border-border/80 text-[10px] text-text-muted uppercase tracking-wider font-mono">
                      <th class="py-2.5 px-3">Item / Service</th>
                      <th class="py-2.5 px-3">Specification</th>
                      <th class="py-2.5 px-3 text-right">Qty</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border/60 text-text-primary">
                    <tr>
                      <td class="py-3 px-3 font-semibold text-white">
                        <div class="flex items-center gap-1.5">
                          <span>🏭</span>
                          <span>Powder Coating</span>
                        </div>
                        <div class="text-[10px] text-emerald-400 font-normal font-mono">ISO Standard Grade</div>
                      </td>
                      <td class="py-3 px-3">
                        <div class="font-medium text-amber-300">
                          {{ form.material || 'Material pending...' }}
                        </div>
                        <div class="text-[11px] text-text-secondary flex items-center gap-1 mt-0.5">
                          <span>🎨</span>
                          <span>{{ form.finish || 'Finish pending...' }}</span>
                        </div>
                      </td>
                      <td class="py-3 px-3 text-right font-mono font-bold text-accent">
                        {{ form.quantity || '1 Batch' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Special Notes Display -->
            <div class="mb-5 bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 text-xs" v-if="form.message">
              <div class="text-[10px] font-mono text-amber-400 uppercase font-semibold mb-1 flex items-center gap-1">
                <span>📝 CUSTOMER REQUIREMENT NOTES:</span>
              </div>
              <p class="text-text-secondary italic text-[11px] leading-relaxed">
                "{{ form.message }}"
              </p>
            </div>

            <!-- Trust Badges & Guarantee Banner -->
            <div class="mb-6 p-3 rounded-xl bg-gradient-to-r from-accent/15 via-amber-500/10 to-accent/15 border border-accent/30 text-center">
              <div class="text-xs font-display font-bold text-white flex items-center justify-center gap-1.5">
                <span>🛡️ 100% Quality & Anti-Rust Guarantee</span>
              </div>
              <p class="text-[10px] text-text-secondary mt-1">
                7-Tank Phosphating • High Durability • Fast Turnaround
              </p>
            </div>

            <!-- Instant Bill Summary Bottom Action (Hidden when printing) -->
            <div class="space-y-2 no-print">
              <button
                type="button"
                @click="submitForm"
                class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-200 shadow-lg shadow-emerald-900/40 cursor-pointer"
              >
                <span>🚀 Confirm & Send to WhatsApp Now</span>
              </button>

              <button
                type="button"
                @click="printReceipt"
                class="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-bg-card hover:bg-bg-hover text-text-secondary hover:text-white border border-border text-[11px] font-mono rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <span>🖨️ Print / Download Official Bill Ticket</span>
              </button>
            </div>

            <!-- Footer Lock Text -->
            <div class="mt-4 pt-3 border-t border-border/50 text-center text-[10px] text-text-muted">
              <span>✨ Thank you for choosing Divye Durga Coating Works! ✨</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteContent } from '@/data/siteContent.js'

const quote = siteContent.quote
const brand = siteContent.brand
const finishOptions = siteContent.finishes.items.map((f) => f.name)

// Unique Estimate Reference ID
const quoteRefNo = computed(() => {
  const code = Math.floor(1000 + Math.random() * 9000)
  return `DDCW-EST-2026-${code}`
})

// Form state
const form = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  material: '',
  quantity: '',
  finish: 'Pure White Satin',
  message: '',
})

const copied = ref(false)

// Date display
const currentDate = computed(() => {
  const d = new Date()
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
})

// Material Presets
const materialPresets = [
  { name: 'Sheet Metal Panels', icon: '📦' },
  { name: 'Aluminium Profiles', icon: '🏗️' },
  { name: 'Electrical Enclosures', icon: '⚡' },
  { name: 'CRCA Cabinets', icon: '🗄️' },
  { name: 'Automotive Parts', icon: '🚗' },
  { name: 'Custom Fabrication', icon: '🛠️' },
]

// Visual Finish Options List
const finishOptionsList = [
  { name: 'Matte Finish', tag: 'Smooth & Sleek', color: '#2D2D2D' },
  { name: 'Pure White Satin', tag: 'Architectural Premium', color: '#F5F5F5' },
  { name: 'High Gloss Finish', tag: 'Maximum Shine', color: '#6A6A6A' },
  { name: 'Textured Anti-Scratch', tag: 'Heavy Duty', color: '#3A3530' },
  { name: 'Maroon / Burgundy', tag: 'Industrial Signature', color: '#6B1D2F' },
  { name: 'Metallic Finish', tag: 'Custom Sparkle', color: '#8A8580' },
]

function selectMaterial(matName) {
  form.value.material = matName
}

function generateFormattedText() {
  const name = form.value.name ? form.value.name.trim() : 'Valued Client'
  const company = form.value.company ? `\n├ 🏢 *Organization:* ${form.value.company.trim()}` : ''
  const phone = form.value.phone ? `\n├ 📞 *Direct Phone:* ${form.value.phone.trim()}` : ''
  const email = form.value.email ? `\n└ 📧 *Email Contact:* ${form.value.email.trim()}` : ''
  const material = form.value.material ? form.value.material.trim() : 'Steel / Metal Substrate'
  const quantity = form.value.quantity ? form.value.quantity.trim() : '1 Batch Requirement'
  const finish = form.value.finish ? form.value.finish.trim() : 'Metallic Coating Finish'
  const notes = form.value.message ? `\n\n📝 *CLIENT SPECIAL INSTRUCTIONS / NOTES:*\n"${form.value.message.trim()}"` : ''

  return `🌟 *DIVYE DURGA COATING WORKS* 🌟
🏛️ *PRECISION POWDER COATING • INDUSTRIAL FINISHING STUDIO*
━━━━━━━━━━━━━━━━━━━━━━━━━━
🧾 *OFFICIAL MATERIAL QUOTATION & BILL ESTIMATE*
📌 *Estimate Ref ID:* #${quoteRefNo.value}
📅 *Date:* ${currentDate.value}

👑 *VALUED CLIENT PROFILE:*
├ 👤 *Client Name:* ${name}${company}${phone}${email}

⚙️ *EXECUTIVE JOB SPECIFICATIONS:*
├ 🛠️ *Material Type:* ${material}
├ 📦 *Batch Volume:* ${quantity}
└ 🎨 *Finish Requested:* ${finish}
${notes}

🛡️ *DIVYE DURGA COMPLIMENTARY LUXURY GUARANTEES:*
✅ *7-Tank Pre-Treatment:* Full Degreasing & Anti-Rust Phosphating 🧼
✅ *Electrostatic Precision Coating:* 100% Uniform Powder Adhesion ⚡
✅ *Thermal Chamber Curing:* Bonded at 180°C Curing Standards 🔥
✅ *Quality Assurance:* Salt Spray & Scratch Tested Finish 🔬
✅ *Express Service:* Priority 24-48 HR Batch Turnaround ⚡

💎 *STATUS:* Ready for Instant Rate & Production Confirmation!
━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 *Respected Divye Durga Team, please confirm our custom rate estimate, color shade availability, and priority batch slot! Looking forward to working with you!* 🙏✨`
}

function submitForm() {
  const text = generateFormattedText()
  const phone = brand.whatsapp.replace(/[^0-9]/g, '')
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

function copyTextQuote() {
  const text = generateFormattedText()
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  })
}

function printReceipt() {
  window.print()
}
</script>

<style scoped>
/* Print styles are handled globally in src/index.css to ensure
   they can suppress other Vue components (header, footer, sections).
   Scoped CSS cannot reach outside this component's DOM tree. */
</style>


