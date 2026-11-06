<template>
  <div>
    <AppNavbar />
    <main>
      <HeroSection />
      <IntroSection />
      <ProcessSection />
      <IndustriesSection />
      <ElectricOvenSection />
      <FacilitySection />
      <QuoteForm />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import IndustriesSection from '@/components/sections/IndustriesSection.vue'
import ElectricOvenSection from '@/components/sections/ElectricOvenSection.vue'
import FacilitySection from '@/components/sections/FacilitySection.vue'
import QuoteForm from '@/components/sections/QuoteForm.vue'
</script>
