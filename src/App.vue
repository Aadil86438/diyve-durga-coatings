<template>
  <div>
    <AppNavbar />
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <BeforeAfterSection />
      <ProjectsSection />
      <FinishesSection />
      <IndustriesSection />
      <WhyUsSection />
      <FacilitySection />
      <TestimonialsSection />
      <CtaSection />
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
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import FinishesSection from '@/components/sections/FinishesSection.vue'
import IndustriesSection from '@/components/sections/IndustriesSection.vue'
import WhyUsSection from '@/components/sections/WhyUsSection.vue'
import FacilitySection from '@/components/sections/FacilitySection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import QuoteForm from '@/components/sections/QuoteForm.vue'
</script>
