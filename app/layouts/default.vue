<script setup lang="ts">
import { gsap } from 'gsap'

const route = useRoute()

// Animation de transition entre pages
const onEnter = (el: Element) => {
  gsap.fromTo(el,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
  )
}

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    y: -16,
    duration: 0.25,
    ease: 'power2.in',
    onComplete: done
  })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">

    <Navbar />

    <!-- Transitions de pages via GSAP -->
    <Transition
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
    >
      <main :key="route.path" class="flex-1 pt-16">
        <slot />
      </main>
    </Transition>

    <Footer />

  </div>
</template>