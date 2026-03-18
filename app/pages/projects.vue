<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Star } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

definePageMeta({ layout: 'default' })
useHead({ title: 'Projets — Mylan Mahieddine' })

type Category = 'tous' | 'pro' | 'perso' | 'formation'
const activeFilter = ref<Category>('tous')

const filters = [
  { label: 'Tous', value: 'tous' as Category },
  { label: 'Pro', value: 'pro' as Category },
  { label: 'Personnel', value: 'perso' as Category },
  { label: 'Formation', value: 'formation' as Category },
]

const projects = [
  {
    title: 'Odycare',
    category: 'pro' as Category,
    description: 'Plateforme de coordination de soins à domicile pour les régions PACA & Hauts-de-France. Développement front Vue.js, back C#, tests Squash TM.',
    tags: ['Vue.js', 'C#', 'Azure DevOps', 'Squash TM'],
    github: '',
    demo: '',
    accent: 'border-t-4 border-t-blue-500',
    badge: 'Pro · Coexya',
    featured: true,
  },
  {
    title: 'EasyBorne',
    category: 'pro' as Category,
    description: 'Refonte complète d\'une borne interactive de commande en quasi-autonomie sous WinDev/WL pour Solumag.',
    tags: ['WinDev', 'WL', 'Borne interactive'],
    github: '',
    demo: '',
    accent: 'border-t-4 border-t-orange-500',
    badge: 'Pro · Solumag',
    featured: false,
  },
  {
    title: 'Mâat',
    category: 'formation' as Category,
    description: 'SaaS RSE avec IA générative. Aide les entreprises à mesurer et améliorer leur impact RSE via des rapports automatisés.',
    tags: ['Vue.js', 'Node.js', 'IA / LLM', 'SaaS'],
    github: '',
    demo: '',
    accent: 'border-t-4 border-t-purple-500',
    badge: 'Mastère · ISITECH',
    featured: true,
  },
  {
    title: 'Urbaide',
    category: 'formation' as Category,
    description: 'Application de mise en relation citoyens / collectivités pour signaler et suivre des problèmes urbains.',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    github: '',
    demo: '',
    accent: 'border-t-4 border-t-green-500',
    badge: 'Bachelor · ISITECH',
    featured: false,
  },
  {
    title: 'Cosmeet',
    category: 'formation' as Category,
    description: 'Plateforme de mise en relation entre artistes et clients dans le secteur cosmétique. Projet Bachelor réalisé en autonomie.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    github: '',
    demo: '',
    accent: 'border-t-4 border-t-pink-500',
    badge: 'Bachelor · ISITECH',
    featured: false,
  },
  {
    title: 'Cin-Search',
    category: 'perso' as Category,
    description: 'Moteur de recherche de films basé sur l\'API TMDb. Recherche instantanée, fiches détaillées, interface fluide.',
    tags: ['JavaScript', 'TMDb API', 'Netlify'],
    github: 'https://github.com/Mylan699/Cin-Search',
    demo: 'https://cin-search.netlify.app/',
    accent: 'border-t-4 border-t-yellow-500',
    badge: 'Perso',
    featured: false,
  },
  {
    title: 'Recherche Wikipédia',
    category: 'perso' as Category,
    description: 'Interface de recherche Wikipédia optimisée avec affichage rapide des résumés d\'articles via l\'API Wikipedia.',
    tags: ['JavaScript', 'Wikipedia API', 'Netlify'],
    github: 'https://github.com/Mylan699/RechercheWikipedia',
    demo: 'https://recherchewikipedia.netlify.app/',
    accent: 'border-t-4 border-t-cyan-500',
    badge: 'Perso',
    featured: false,
  },
  {
    title: 'Analyse CV ATS',
    category: 'perso' as Category,
    description: 'Outil d\'analyse de CV avec intelligence artificielle via puter.com. Évalue la compatibilité ATS et propose des améliorations.',
    tags: ['IA', 'puter.com', 'ATS', 'JavaScript'],
    github: 'https://github.com/Mylan699/Analyse_CV',
    demo: '',
    accent: 'border-t-4 border-t-violet-500',
    badge: 'Perso · IA',
    featured: true,
  },
  {
    title: 'Hopital Management',
    category: 'formation' as Category,
    description: 'Système de gestion hospitalière avec API REST et interface MVC. TP Entity Framework — gestion patients, médecins, rendez-vous.',
    tags: ['C#', 'Entity Framework', 'API REST', 'MVC'],
    github: 'https://github.com/Mylan699/HopitalManagement',
    demo: '',
    accent: 'border-t-4 border-t-red-500',
    badge: 'Formation',
    featured: false,
  },
  {
    title: 'MVCNightLife',
    category: 'formation' as Category,
    description: 'Application MVC de gestion de soirées. TP Entity Framework — gestion d\'événements, participants et réservations.',
    tags: ['C#', 'Entity Framework', 'MVC', 'SQL'],
    github: 'https://github.com/Mylan699/MVCNightLife',
    demo: '',
    accent: 'border-t-4 border-t-indigo-500',
    badge: 'Formation',
    featured: false,
  },
  {
    title: 'DataSphere',
    category: 'perso' as Category,
    description: 'Template de dashboard analytique moderne avec graphiques interactifs, widgets de données et design épuré.',
    tags: ['Vue.js', 'Charts', 'Dashboard', 'Netlify'],
    github: 'https://github.com/Mylan699/DataSphere',
    demo: 'https://dataspheree.netlify.app/',
    accent: 'border-t-4 border-t-teal-500',
    badge: 'Perso',
    featured: false,
  },
  {
    title: 'Koda',
    category: 'perso' as Category,
    description: 'Dashboard de veille technologique avec agrégation de contenus (GitHub trending, Hacker News, Dev.to). Interface épurée pour rester à jour sur l\'écosystème dev.',
    tags: ['Vue.js', 'Dashboard', 'API', 'Vercel'],
    github: 'https://github.com/Mylan699/KODA',
    demo: 'https://koda-gray.vercel.app/',
    accent: 'border-t-4 border-t-slate-500',
    badge: 'Perso',
    featured: false,
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

  setTimeout(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08,
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' }
      }
    )
    ScrollTrigger.refresh()
  }, 300)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
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
        Projets professionnels, personnels et académiques — du prototype à la prod.
      </p>
    </div>

    <!-- Filtres -->
    <div class="flex flex-wrap justify-center gap-3 mb-16">
      <Button
        v-for="filter in filters"
        :key="filter.value"
        :variant="activeFilter === filter.value ? 'default' : 'outline'"
        size="sm"
        class="rounded-full px-5"
        @click="setFilter(filter.value)"
      >
        {{ filter.label }}
        <span class="ml-1.5 text-xs opacity-60">
          {{ filter.value === 'tous' ? projects.length : projects.filter(p => p.category === filter.value).length }}
        </span>
      </Button>
    </div>

    <!-- Grille -->
    <div class="projects-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="project-card flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        :class="project.accent"
      >
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between gap-2 mb-2">
            <Badge variant="secondary" class="text-xs h-5 shrink-0">
              {{ project.badge }}
            </Badge>
            <Star v-if="project.featured" class="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
          </div>
          <CardTitle class="text-lg leading-tight">{{ project.title }}</CardTitle>
          <CardDescription class="leading-relaxed text-sm mt-1">
            {{ project.description }}
          </CardDescription>
        </CardHeader>

        <CardContent class="flex-1 flex flex-col justify-between gap-4">
          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <Badge
              v-for="tag in project.tags"
              :key="tag"
              variant="outline"
              class="text-xs font-normal"
            >
              {{ tag }}
            </Badge>
          </div>

          <!-- Liens -->
          <div class="flex gap-2 pt-2">
            <NuxtLink
              v-if="project.github"
              :to="project.github"
              external
              class="flex-1"
            >
              <Button variant="outline" size="sm" class="w-full gap-1.5 h-8 text-xs">
                <Github class="w-3.5 h-3.5" />
                Code
              </Button>
            </NuxtLink>
            <NuxtLink
              v-if="project.demo"
              :to="project.demo"
              external
              class="flex-1"
            >
              <Button size="sm" class="w-full gap-1.5 h-8 text-xs">
                <ExternalLink class="w-3.5 h-3.5" />
                Demo
              </Button>
            </NuxtLink>
            <div v-if="!project.github && !project.demo" class="w-full">
              <Badge variant="secondary" class="text-xs w-full justify-center py-1.5">
                Projet privé
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  </div>
</template>