<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

definePageMeta({ layout: 'default' })
useHead({ title: 'Expérience — Mylan Mahieddine' })

type EntryType = 'pro' | 'formation'
const activeFilter = ref<'tous' | EntryType>('tous')

const filters = [
  { label: 'Tous', value: 'tous' as const },
  { label: 'Professionnel', value: 'pro' as const },
  { label: 'Formation', value: 'formation' as const },
]

const entries = [
  {
    type: 'pro' as EntryType,
    title: 'Développeur Web Full Stack',
    company: 'Coexya · Groupe Talan',
    location: 'Lyon',
    period: 'Nov 2024 – Aujourd\'hui',
    contract: 'Alternance · Mastère',
    description: 'Développement et maintenance de la plateforme Odycare (PACA & Hauts-de-France). Vue.js front-end, C# back-end, tests Squash TM, Azure DevOps. Scrum Master tournant.',
    tags: ['Vue.js', 'C#', 'Azure DevOps', 'Squash TM', 'Scrum Master'],
    accentClass: 'border-t-4 border-t-blue-500',
  },
  {
    type: 'pro' as EntryType,
    title: 'Fondateur',
    company: 'DevNova',
    location: 'Remote',
    period: 'Fév 2025 – Aujourd\'hui',
    contract: 'Auto-entrepreneur',
    description: '13+ clients accompagnés. Sites vitrines, e-commerce, tunnels de vente Systeme.io. Gestion complète du cycle commercial.',
    tags: ['WordPress', 'Shopify', 'Systeme.io', 'SEO'],
    accentClass: 'border-t-4 border-t-green-500',
  },
  {
    type: 'pro' as EntryType,
    title: 'Développeur Logiciel',
    company: 'Solumag',
    location: 'Région lyonnaise',
    period: 'Août 2023 – Juin 2024',
    contract: 'Alternance · Bachelor',
    description: 'Développement du logiciel de caisse Easy Commerce sous WinDev/WL. Refonte complète d\'EasyBorne en quasi-autonomie.',
    tags: ['WinDev', 'WL', 'Borne interactive'],
    accentClass: 'border-t-4 border-t-orange-500',
  },
  {
    type: 'pro' as EntryType,
    title: 'Analyste Exploitation Cloud',
    company: 'CEGID',
    location: 'Lyon',
    period: 'Juil 2022 – Juil 2023',
    contract: 'Alternance · Bachelor',
    description: 'MCO plateforme SaaS Azure pour grands comptes (LVMH, L\'Oréal, Decathlon). Monitoring Grafana, scripts PowerShell/Python, gestion d\'incidents.',
    tags: ['Azure', 'Grafana', 'PowerShell', 'Python'],
    accentClass: 'border-t-4 border-t-cyan-500',
  },
  {
    type: 'pro' as EntryType,
    title: 'Support Technique Informatique',
    company: 'ACOSS',
    location: 'Île-de-France',
    period: 'Oct 2021 – Juil 2022',
    contract: 'Alternance · Bachelor',
    description: 'Traitement des incidents N2, administration Active Directory, téléphonie Cisco, MDM. Déploiement de projets pour la DSI.',
    tags: ['Active Directory', 'Cisco', 'MDM', 'Support N2'],
    accentClass: 'border-t-4 border-t-yellow-500',
  },
  {
    type: 'formation' as EntryType,
    title: 'Mastère Expert en Systèmes d\'Information',
    company: 'ISITECH Lyon',
    location: 'Lyon',
    period: '2024 – 2026',
    contract: 'Niveau VII',
    description: 'Architecture SI, gestion de projet IT, IA et LLM. Projet Mâat — SaaS RSE avec IA générative. Certifications Azure AZ-900 et AWS en cours.',
    tags: ['Architecture SI', 'IA / LLM', 'Azure AZ-900'],
    accentClass: 'border-t-4 border-t-purple-500',
  },
  {
    type: 'formation' as EntryType,
    title: 'Bachelor Responsable de Projet Informatique',
    company: 'ISITECH Lyon',
    location: 'Lyon',
    period: '2021 – 2024',
    contract: 'Niveau VI',
    description: 'Développement web et gestion de projet. Projets Cosmeet et Urbaide réalisés en autonomie.',
    tags: ['Vue.js', 'PHP', 'Node.js', 'Gestion de projet'],
    accentClass: 'border-t-4 border-t-pink-500',
  },
]

const filteredEntries = computed(() =>
  activeFilter.value === 'tous'
    ? entries
    : entries.filter(e => e.type === activeFilter.value)
)

const setFilter = (filter: 'tous' | EntryType) => {
  activeFilter.value = filter
  nextTick(() => {
    gsap.fromTo('.entry-card',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.07 }
    )
  })
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo('.experience-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )

  setTimeout(() => {
    gsap.fromTo('.entry-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: '.entries-grid', start: 'top 85%' }
      }
    )
    ScrollTrigger.refresh()
  }, 300)
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

    <!-- Header -->
    <div class="experience-header text-center mb-20">
      <p class="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
        Parcours
      </p>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Mon <span class="text-primary">expérience</span>
      </h1>
      <p class="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
        4 ans d'alternance, 3 entreprises, 1 agence fondée et un Mastère en cours.
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
        <Briefcase v-if="filter.value === 'pro'" class="w-3.5 h-3.5" />
        <GraduationCap v-else-if="filter.value === 'formation'" class="w-3.5 h-3.5" />
        {{ filter.label }}
      </Button>
    </div>

    <!-- Grille -->
    <div class="entries-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="(entry, index) in filteredEntries"
        :key="index"
        class="entry-card flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        :class="entry.accentClass"
      >
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <div
                class="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                :class="entry.type === 'pro' ? 'bg-blue-500/10' : 'bg-purple-500/10'"
              >
                <Briefcase v-if="entry.type === 'pro'" class="w-3.5 h-3.5 text-blue-500" />
                <GraduationCap v-else class="w-3.5 h-3.5 text-purple-500" />
              </div>
              <span class="text-xs font-medium text-muted-foreground">
                {{ entry.type === 'pro' ? 'Expérience pro' : 'Formation' }}
              </span>
            </div>
            <Badge variant="secondary" class="text-xs h-5 shrink-0">
              {{ entry.contract }}
            </Badge>
          </div>

          <CardTitle class="text-lg leading-tight">{{ entry.title }}</CardTitle>
          <CardDescription class="font-semibold text-foreground/80 mt-0.5">
            {{ entry.company }}
          </CardDescription>

          <div class="flex flex-wrap items-center gap-3 mt-2">
            <span class="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar class="w-3 h-3" />
              {{ entry.period }}
            </span>
            <span class="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin class="w-3 h-3" />
              {{ entry.location }}
            </span>
          </div>
        </CardHeader>

        <CardContent class="flex-1 space-y-4">
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ entry.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tag in entry.tags"
              :key="tag"
              variant="outline"
              class="text-xs font-normal"
            >
              {{ tag }}
            </Badge>
          </div>
        </CardContent>

      </Card>
    </div>

  </div>
</template>