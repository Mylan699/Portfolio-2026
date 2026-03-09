<script setup lang="ts">
import { gsap } from 'gsap'
import { Github, Linkedin, Mail, Download } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

const roles = [
  'Développeur Web Full Stack',
  'Chef de Projet IT',
  'Scrum Master',
  'Entrepreneur — DevNova',
]
const currentRole = ref('')
const roleIndex = ref(0)
const isDeleting = ref(false)

let typewriterTimer: ReturnType<typeof setTimeout>

const typewriter = () => {
  const current = roles[roleIndex.value]
  if (!isDeleting.value) {
    currentRole.value = current.slice(0, currentRole.value.length + 1)
    if (currentRole.value === current) {
      isDeleting.value = true
      typewriterTimer = setTimeout(typewriter, 1800)
      return
    }
  } else {
    currentRole.value = current.slice(0, currentRole.value.length - 1)
    if (currentRole.value === '') {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  typewriterTimer = setTimeout(typewriter, isDeleting.value ? 50 : 80)
}

onMounted(() => {
  const tl = gsap.timeline()
  tl.fromTo('.hero-badge',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
  )
  .fromTo('.hero-title',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.2'
  )
  .fromTo('.hero-role',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
    '-=0.2'
  )
  .fromTo('.hero-desc',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
    '-=0.1'
  )
  .fromTo('.hero-cta',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
    '-=0.1'
  )
  .fromTo('.hero-socials',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
    '-=0.2'
  )
  setTimeout(typewriter, 1200)
})

onUnmounted(() => {
  clearTimeout(typewriterTimer)
})
</script>

<template>
  <section class="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">

    <!-- Gradient background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" />
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <!-- Badge disponibilité -->
      <div class="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Disponible — Alternance Mastère · Lyon
      </div>

      <!-- Nom -->
      <h1 class="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
        Mylan
        <span class="text-primary"> Mahieddine</span>
      </h1>

      <!-- Typewriter -->
      <div class="hero-role h-10 flex items-center justify-center mb-6">
        <p class="text-xl sm:text-2xl text-muted-foreground font-medium">
          {{ currentRole }}<span class="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
        </p>
      </div>

      <!-- Description -->
      <p class="hero-desc max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
        Mastère Expert en Systèmes d'Information · ISITECH Lyon.
        Full Stack <span class="text-foreground font-medium">Vue.js · C# · Node.js</span>,
        Scrum Master, fondateur de
        <span class="text-foreground font-medium">DevNova</span>.
        Passionné par la tech, l'IA et les défis collectifs.
      </p>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <NuxtLink
          to="/projects"
          class="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Voir mes projets
          <Download class="w-4 h-4" />
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors font-medium"
        >
          Me contacter
          <Mail class="w-4 h-4" />
        </NuxtLink>
        <NuxtLink
          to="/cv-mylan-mahieddine.pdf"
          external
          class="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors font-medium text-muted-foreground"
        >
          Télécharger CV
          <Download class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Socials -->
      <div class="hero-socials flex items-center justify-center gap-4">
        <NuxtLink
          to="https://github.com/Mylan699"
          external
          class="p-3 rounded-full border border-border hover:bg-accent hover:text-foreground text-muted-foreground transition-colors"
        >
          <Github class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink
          to="https://linkedin.com/in/mylan-mahieddine"
          external
          class="p-3 rounded-full border border-border hover:bg-accent hover:text-foreground text-muted-foreground transition-colors"
        >
          <Linkedin class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink
          to="mailto:mylanmahieddine@icloud.com"
          external
          class="p-3 rounded-full border border-border hover:bg-accent hover:text-foreground text-muted-foreground transition-colors"
        >
          <Mail class="w-5 h-5" />
        </NuxtLink>
      </div>

    </div>

  </section>
</template>