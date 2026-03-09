<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Briefcase, GraduationCap, Code2, Lock } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

definePageMeta({ layout: 'default' })
useHead({ title: 'Projets — Mylan Mahieddine' })

type Category = 'tous' | 'pro' | 'formation' | 'perso'
const activeFilter = ref<Category>('tous')

const filters = [
  { label: 'Tous', value: 'tous' as Category, icon: Code2 },
  { label: 'Professionnel', value: 'pro' as Category, icon: Briefcase },
  { label: 'Formation', value: 'formation' as Category, icon: GraduationCap },
  { label: 'Personnel', value: 'perso' as Category, icon: Code2 },
]

const projects = [
  {
    title: 'Odycare',
    category: 'pro' as Category,
    period: '2024 - Aujourd\'hui',
    company: 'Coexya · Groupe Talan',
    description: 'Plateforme de coordination de soins pour les régions PACA et Hauts-de-France. Développement Vue.js et C#, tests Squash TM, gestion Azure DevOps.',
    tags: ['Vue.js', 'C#', 'Azure DevOps', 'Squash TM', 'Agile'],
    accentClass: 'border-t-4 border-t-blue-500',
    github: '',
    demo: '',
  },
  {
    title: 'DevNova',
    category: 'perso' as Category,
    period: '2025 - Aujourd\'hui',
    company: 'Auto-entrepreneur',
    description: 'Agence digitale indépendante — 13+ clients accompagnés. Sites vitrines, e-commerce, tunnels de vente pour TPE et commerces de proximité.',
    tags: ['WordPress', 'Shopify', 'Systeme.io', 'SEO'],
    accentClass: 'border-t-4 border-t-green-500',
    github: '',
    demo: 'https://devnova.fr',
  },
  {
    title: 'Maat',
    category: 'formation' as Category,
    period: '2024 - 2026',
    company: 'ISITECH Lyon · Mastère',
    description: 'Plateforme SaaS de mise en conformité RSE pour PME/PMI. Génération automatique de rapports et accompagnement par IA générative.',
    tags: ['SaaS', 'IA Générative', 'RSE', 'Vue.js'],
    accentClass: 'border-t-4 border-t-purple-500',
    github: '',
    demo: '',
  },
  {
    title: 'Urbaide',
    category: 'formation' as Category,
    period: '2023 - 2024',
    company: 'ISITECH Lyon · Bachelor 3',
    description: 'Application citoyenne de signalement des problèmes sur voie publique. Système de reporting inspiré de Waze avec suivi temps réel.',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Maps API'],
    accentClass: 'border-t-4 border-t-orange-500',
    github: 'https://github.com/Mylan699',
    demo: '',
  },
  {
    title: 'Cosmeet',
    category: 'formation' as Category,
    period: '2022 - 2023',
    company: 'ISITECH Lyon · Bachelor 2',
    description: 'Plateforme de mise en relation freelance pour les métiers de la cosmétique, sur le modèle de Malt/Fiverr.',
    tags: ['Vue.js', 'PHP', 'MySQL', 'Stripe'],
    accentClass: 'border-t-4 border-t-pink-500',
    github: 'https://github.com/Mylan699',
    demo: '',
  },
  {
    title: 'EasyBorne',
    category: 'pro' as Category,
    period: '2023 - 2024',
    company: 'Solumag',
    description: 'Refonte complète du logiciel de borne interactive Easy Commerce. Pilotage autonome de l\'analyse du besoin jusqu\'à la livraison.',
    tags: ['WinDev', 'WL', 'Borne interactive', 'UX'],
    accentClass: 'border-t-4 border-t-yellow-500',
    github: '',
    demo: '',
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'tous'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

const setFilter = (filter: Category) => {
  activeFilter.value = filter
  nextTick(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.07 }
    )
  })
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo('.projects-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )
  gsap.fromTo('.project-card',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' }
    }
  )
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

    <!-- Header -->
    <div class="projects-header text-center mb-20">
      <p class="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
        Portfolio
      </p>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Mes <span class="text-primary">projets</span>
      </h1>
      <p class="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
        Projets professionnels, académiques et personnels réalisés depuis 2021.
      </p>
    </div>

    <!-- Filtres -->
    <div class="flex flex-wrap justify-center gap-3 mb-16">
      <Button
        v-for="filter in filters"
        :key="filter.value"
        :variant="activeFilter === filter.value ? 'default' : 'outline'"
        size="sm"
        class="rounded-full gap-2 px-5"
        @click="setFilter(filter.value)"
      >
        <component :is="filter.icon" class="w-3.5 h-3.5" />
        {{ filter.label }}
      </Button>
    </div>

    <!-- Grille -->
    <div class="projects-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="project in filteredProjects"
        :key="project.title"
        class="project-card flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        :class="project.accentClass"
      >
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between gap-2 mb-2">
            <CardTitle class="text-xl">{{ project.title }}</CardTitle>
            <span class="text-xs text-muted-foreground shrink-0 mt-1">{{ project.period }}</span>
          </div>
          <Badge variant="secondary" class="w-fit text-xs">
            {{ project.company }}
          </Badge>
        </CardHeader>

        <CardContent class="flex-1 space-y-4">
          <CardDescription class="text-sm leading-relaxed">
            {{ project.description }}
          </CardDescription>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tag in project.tags"
              :key="tag"
              variant="outline"
              class="text-xs font-normal"
            >
              {{ tag }}
            </Badge>
          </div>
        </CardContent>

        <CardFooter class="pt-4 border-t border-border gap-3">
          <Button
            v-if="project.github"
            variant="ghost"
            size="sm"
            class="gap-1.5 text-xs h-8 px-3"
            as-child
          >
            <NuxtLink :to="project.github" external>
              <Github class="w-3.5 h-3.5" />
              GitHub
            </NuxtLink>
          </Button>
          <Button
            v-if="project.demo"
            variant="ghost"
            size="sm"
            class="gap-1.5 text-xs h-8 px-3"
            as-child
          >
            <NuxtLink :to="project.demo" external>
              <ExternalLink class="w-3.5 h-3.5" />
              Voir le site
            </NuxtLink>
          </Button>
          <div
            v-if="!project.github && !project.demo"
            class="flex items-center gap-1.5 text-xs text-muted-foreground/50"
          >
            <Lock class="w-3 h-3" />
            Projet privé
          </div>
        </CardFooter>

      </Card>
    </div>

  </div>
</template>