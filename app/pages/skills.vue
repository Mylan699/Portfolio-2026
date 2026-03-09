<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

definePageMeta({ layout: 'default' })

useHead({
  title: 'Compétences — Mylan Mahieddine',
  meta: [{ name: 'description', content: 'Stack technique et compétences de Mylan Mahieddine.' }],
})

const skillGroups = [
  {
    category: 'Front-end',
    color: 'bg-blue-500',
    skills: [
      { name: 'Vue.js / Nuxt', level: 90 },
      { name: 'React / Next.js', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    category: 'Back-end',
    color: 'bg-green-500',
    skills: [
      { name: 'C# / .NET', level: 75 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'PHP', level: 65 },
      { name: 'REST API', level: 85 },
    ],
  },
  {
    category: 'Base de données',
    color: 'bg-orange-500',
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'NoSQL', level: 65 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    color: 'bg-purple-500',
    skills: [
      { name: 'Azure DevOps', level: 75 },
      { name: 'Docker', level: 65 },
      { name: 'Git / CI-CD', level: 85 },
      { name: 'Linux', level: 70 },
    ],
  },
  {
    category: 'Gestion de projet',
    color: 'bg-pink-500',
    skills: [
      { name: 'Agile / Scrum', level: 90 },
      { name: 'Analyse des besoins', level: 85 },
      { name: 'Squash TM / Mantis', level: 75 },
      { name: 'Azure DevOps Boards', level: 80 },
    ],
  },
  {
    category: 'Outils créatifs',
    color: 'bg-yellow-500',
    skills: [
      { name: 'Figma', level: 70 },
      { name: 'Adobe Illustrator', level: 65 },
      { name: 'After Effects', level: 60 },
      { name: 'Canva', level: 85 },
    ],
  },
]

const softSkills = [
  'Autonomie',
  'Rigueur',
  'Leadership',
  'Communication',
  'Adaptabilité',
  'Esprit d\'équipe',
  'Gestion de crise',
  'Prise de décision',
  'Curiosité technologique',
  'Sens des responsabilités',
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Animation titre
  gsap.fromTo('.skills-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )

  // Animation cards
  gsap.fromTo('.skill-group',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }
    }
  )

  // Animation barres de progression
  gsap.utils.toArray<HTMLElement>('.progress-bar').forEach((bar) => {
    const target = bar.dataset.level ?? '0'
    gsap.fromTo(bar,
      { width: '0%' },
      {
        width: `${target}%`,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: bar, start: 'top 90%' }
      }
    )
  })

  // Animation soft skills
  gsap.fromTo('.soft-skill',
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)', stagger: 0.05,
      scrollTrigger: { trigger: '.soft-skills-section', start: 'top 85%' }
    }
  )
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

    <!-- Header -->
    <div class="skills-header text-center mb-16">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Mes <span class="text-primary">compétences</span>
      </h1>
      <p class="text-lg text-muted-foreground max-w-xl mx-auto">
        Stack technique construite au fil de 4 ans d'alternance et de projets personnels.
      </p>
    </div>

    <!-- Grille compétences -->
    <div class="skills-grid grid sm:grid-cols-2 gap-6 mb-20">
      <div
        v-for="group in skillGroups"
        :key="group.category"
        class="skill-group rounded-xl border border-border bg-card p-6 space-y-5"
      >
        <!-- Titre catégorie -->
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full" :class="group.color" />
          <h2 class="font-semibold">{{ group.category }}</h2>
        </div>

        <!-- Barres -->
        <div class="space-y-4">
          <div
            v-for="skill in group.skills"
            :key="skill.name"
            class="space-y-1.5"
          >
            <div class="flex justify-between text-sm">
              <span class="text-foreground">{{ skill.name }}</span>
              <span class="text-muted-foreground">{{ skill.level }}%</span>
            </div>
            <div class="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div
                class="progress-bar h-full rounded-full"
                :class="group.color"
                :data-level="skill.level"
                style="width: 0%"
              />
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Soft skills -->
    <section class="soft-skills-section">
      <h2 class="text-2xl font-bold mb-8 text-center">
        Soft <span class="text-primary">skills</span>
      </h2>
      <div class="flex flex-wrap justify-center gap-3">
        <span
          v-for="skill in softSkills"
          :key="skill"
          class="soft-skill px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:bg-accent transition-colors cursor-default"
        >
          {{ skill }}
        </span>
      </div>
    </section>

  </div>
</template>