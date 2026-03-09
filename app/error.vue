<script setup lang="ts">
import { gsap } from 'gsap'
import { Home, ArrowLeft, Search } from 'lucide-vue-next'

const props = defineProps<{ error: { statusCode: number; message: string } }>()
const handleError = () => clearError({ redirect: '/' })

const quickLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Projets', to: '/projects' },
  { label: 'À propos', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

onMounted(() => {
  gsap.fromTo('.error-number', { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' })
  gsap.fromTo('.error-icon',   { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', delay: 0.3 })
  gsap.fromTo('.error-title',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.4 })
  gsap.fromTo('.error-desc',   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.5 })
  gsap.fromTo('.error-btn',    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.1, delay: 0.6 })
  gsap.fromTo('.error-link',   { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.07, delay: 0.8 })
})
</script>

<template>
  <div class="relative min-h-screen bg-background text-foreground flex items-center justify-center px-4 overflow-hidden">

    <!-- Blobs background -->
    <div class="absolute top-[-15rem] left-[-15rem] w-[45rem] h-[45rem] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
    <div class="absolute bottom-[-15rem] right-[-15rem] w-[45rem] h-[45rem] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />

    <!-- Grille -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: linear-gradient(rgba(128,128,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.04) 1px, transparent 1px); background-size: 60px 60px;"
    />

    <!-- Contenu -->
    <div class="relative z-10 flex flex-col items-center text-center" style="gap: 3.5rem;">

      <!-- 404 grand -->
      <div class="error-number select-none font-black leading-none tracking-tighter"
        style="font-size: clamp(8rem, 20vw, 14rem); color: rgba(0,0,0,0.06);">
        {{ error.statusCode }}
      </div>

      <!-- Icône -->
      <div class="error-icon w-20 h-20 rounded-2xl border border-border bg-card shadow-xl flex items-center justify-center"
        style="margin-top: -2rem;">
        <Search class="w-9 h-9 text-primary" />
      </div>

      <!-- Texte -->
      <div style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 32rem;">
        <h1 class="error-title font-bold tracking-tight" style="font-size: clamp(2rem, 5vw, 3rem);">
          {{ error.statusCode === 404 ? 'Page introuvable' : 'Erreur serveur' }}
        </h1>
        <p class="error-desc text-muted-foreground" style="font-size: 1.1rem; line-height: 1.75;">
          {{ error.statusCode === 404
            ? 'Cette page n\'existe pas ou a été déplacée.'
            : 'Une erreur inattendue s\'est produite.' }}
        </p>
      </div>

      <!-- Boutons -->
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
        <button
          class="error-btn inline-flex items-center gap-2 bg-foreground text-background rounded-full font-semibold hover:opacity-80 transition-opacity shadow-lg"
          style="padding: 0.875rem 2rem; font-size: 0.9rem;"
          @click="handleError"
        >
          <Home class="w-4 h-4" />
          Retour à l'accueil
        </button>
        <button
          class="error-btn inline-flex items-center gap-2 border border-border bg-card rounded-full font-medium hover:bg-accent transition-colors"
          style="padding: 0.875rem 2rem; font-size: 0.9rem;"
          @click="() => history.back()"
        >
          <ArrowLeft class="w-4 h-4" />
          Page précédente
        </button>
      </div>

      <!-- Liens rapides -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1.25rem; padding-top: 2rem; border-top: 1px solid hsl(var(--border)); width: 100%;">
        <p style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;" class="text-muted-foreground/50">
          Pages disponibles
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center;">
          <NuxtLink
            v-for="link in quickLinks"
            :key="link.to"
            :to="link.to"
            class="error-link border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-all duration-200"
            style="padding: 0.5rem 1.25rem; font-size: 0.875rem;"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>