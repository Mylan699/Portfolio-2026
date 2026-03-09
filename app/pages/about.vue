<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, GraduationCap, Users, Code2, Shield, Dumbbell } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

useHead({
  title: 'À propos — Mylan Mahieddine',
  meta: [{ name: 'description', content: 'Développeur Web Full Stack, Chef de Projet IT, fondateur de DevNova.' }],
})

const stats = [
  { value: '4+', label: 'ans d\'expérience' },
  { value: '13+', label: 'clients DevNova' },
  { value: '5+', label: 'projets majeurs' },
  { value: '3', label: 'alternances' },
]

const stack = [
  { category: 'Front-end', items: ['Vue.js', 'React', 'Next.js', 'Nuxt 3', 'Tailwind CSS', 'TypeScript'] },
  { category: 'Back-end', items: ['C#', 'Node.js', 'Express.js', 'PHP'] },
  { category: 'Base de données', items: ['SQL', 'MongoDB', 'NoSQL'] },
  { category: 'DevOps & Cloud', items: ['Azure DevOps', 'Docker', 'Git', 'CI/CD', 'Linux'] },
  { category: 'Outils & Méthodes', items: ['Agile/Scrum', 'Squash TM', 'Mantis', 'Figma', 'Canva'] },
]

const facts = [
  {
    icon: Briefcase,
    title: 'DevNova',
    desc: 'Fondateur d\'une agence digitale indépendante — 13+ clients accompagnés dans leur transformation digitale.',
  },
  {
    icon: Shield,
    title: 'Gendarme Réserviste',
    desc: 'Réserviste au Groupement de l\'Isère. Déployé à Paris pour les JO 2024. Assermenté APJA.',
  },
  {
    icon: Dumbbell,
    title: 'Boxe & MMA',
    desc: 'Pratique régulière — discipline, résilience et dépassement de soi au quotidien.',
  },
  {
    icon: Code2,
    title: 'Veille technologique',
    desc: 'Passionné par l\'IA, les LLM et l\'architecture SI. Certifications Azure AZ-900 et AWS en cours.',
  },
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Animation section intro
  gsap.fromTo('.about-intro',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.about-intro', start: 'top 80%' }
    }
  )

  // Animation stats
  gsap.fromTo('.stat-item',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.stats-section', start: 'top 80%' }
    }
  )

  // Animation stack
  gsap.fromTo('.stack-card',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.stack-section', start: 'top 80%' }
    }
  )

  // Animation facts
  gsap.fromTo('.fact-card',
    { opacity: 0, x: -30 },
    {
      opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.15,
      scrollTrigger: { trigger: '.facts-section', start: 'top 80%' }
    }
  )
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

    <!-- Intro -->
    <section class="about-intro mb-20">
      <div class="flex flex-col lg:flex-row items-start gap-12">

        <!-- Texte -->
        <div class="flex-1 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">
            <GraduationCap class="w-4 h-4" />
            Mastère Expert SI · ISITECH Lyon · 2024–2026
          </div>

          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
            À propos
            <span class="text-primary"> de moi</span>
          </h1>

          <p class="text-lg text-muted-foreground leading-relaxed">
            Développeur Web Full Stack en dernière année de Mastère, je combine
            <span class="text-foreground font-medium">compétences techniques avancées</span>
            et vision projet. Mon parcours en alternance depuis 2021 m'a conduit dans
            des environnements variés : e-santé, cloud Azure, édition logicielle.
          </p>

          <p class="text-lg text-muted-foreground leading-relaxed">
            Rigoureux et autonome, je suis constamment à l'affût des nouvelles technologies —
            <span class="text-foreground font-medium">IA, LLM et architecture SI</span> compris.
            En parallèle, je développe
            <span class="text-foreground font-medium">DevNova</span>,
            mon agence digitale dédiée aux commerces de proximité.
          </p>

          <div class="flex flex-wrap gap-3 pt-2">
            <NuxtLink
              to="/experience"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
            >
              <Briefcase class="w-4 h-4" />
              Voir mes expériences
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-accent transition-colors font-medium text-sm"
            >
              Me contacter
            </NuxtLink>
          </div>
        </div>

        <!-- Card infos rapides -->
        <div class="lg:w-72 w-full rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 class="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Infos</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex justify-between">
              <span class="text-muted-foreground">Localisation</span>
              <span class="font-medium">Villefontaine (38)</span>
            </li>
            <li class="flex justify-between">
              <span class="text-muted-foreground">Entreprise</span>
              <span class="font-medium">Coexya · Groupe Talan</span>
            </li>
            <li class="flex justify-between">
              <span class="text-muted-foreground">Formation</span>
              <span class="font-medium">ISITECH Lyon</span>
            </li>
            <li class="flex justify-between">
              <span class="text-muted-foreground">Disponibilité</span>
              <span class="font-medium text-green-500">Alternance</span>
            </li>
            <li class="flex justify-between">
              <span class="text-muted-foreground">Anglais</span>
              <span class="font-medium">B2/C1</span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section mb-20">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stat-item rounded-xl border border-border bg-card p-6 text-center"
        >
          <p class="text-3xl font-bold mb-1">{{ stat.value }}</p>
          <p class="text-sm text-muted-foreground">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Stack technique -->
    <section class="stack-section mb-20">
      <h2 class="text-2xl font-bold mb-8">
        Stack <span class="text-primary">technique</span>
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="group in stack"
          :key="group.category"
          class="stack-card rounded-xl border border-border bg-card p-5 space-y-3"
        >
          <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Facts perso -->
    <section class="facts-section">
      <h2 class="text-2xl font-bold mb-8">
        Au-delà du <span class="text-primary">code</span>
      </h2>
      <div class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="fact in facts"
          :key="fact.title"
          class="fact-card rounded-xl border border-border bg-card p-6 flex gap-4"
        >
          <div class="shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <component :is="fact.icon" class="w-5 h-5" />
          </div>
          <div class="space-y-1">
            <h3 class="font-semibold">{{ fact.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ fact.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>