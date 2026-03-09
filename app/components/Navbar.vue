<script setup lang="ts">
import { gsap } from 'gsap'
import { Moon, Sun, Menu, X, Download } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const colorMode = useColorMode()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Animation d'entrée GSAP
  const tl = gsap.timeline()
  tl.fromTo('.navbar-logo',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
  )
  .fromTo('.navbar-link',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.07 },
    '-=0.2'
  )
  .fromTo('.navbar-actions',
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' },
    '-=0.3'
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Compétences', to: '/skills' },
  { label: 'Projets', to: '/projects' },
  { label: 'Expérience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5'
        : 'bg-transparent'
    ]"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink
          to="/"
          class="navbar-logo flex items-center gap-1 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span>M.Mahieddine</span>
          <span class="text-primary text-2xl leading-none">.</span>
        </NuxtLink>

        <!-- Liens desktop -->
        <ul class="hidden md:flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="navbar-link relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              :class="isActive(link.to)
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'"
            >
              {{ link.label }}
              <!-- Indicateur actif -->
              <span
                v-if="isActive(link.to)"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 rounded-full bg-primary"
              />
            </NuxtLink>
          </li>
        </ul>

        <!-- Actions -->
        <div class="navbar-actions flex items-center gap-2">

          <!-- Bouton CV -->
          <Button
            variant="outline"
            size="sm"
            class="hidden md:inline-flex gap-1.5 h-8 px-3 text-xs rounded-full"
            as-child
          >
            <NuxtLink to="/cv-mylan-mahieddine.pdf" external>
              <Download class="w-3.5 h-3.5" />
              CV
            </NuxtLink>
          </Button>

          <!-- Toggle theme -->
          <Button
            variant="ghost"
            size="icon"
            class="h-9 w-9 rounded-full"
            @click="toggleTheme"
          >
            <Sun v-if="colorMode.value === 'dark'" class="w-4 h-4" />
            <Moon v-else class="w-4 h-4" />
          </Button>

          <!-- Burger mobile -->
          <Button
            variant="ghost"
            size="icon"
            class="md:hidden h-9 w-9 rounded-full"
            @click="isMenuOpen = !isMenuOpen"
          >
            <X v-if="isMenuOpen" class="w-4 h-4" />
            <Menu v-else class="w-4 h-4" />
          </Button>

        </div>
      </div>

      <!-- Menu mobile -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden py-3 border-t border-border space-y-1"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive(link.to)
              ? 'bg-accent text-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
            <span
              v-if="isActive(link.to)"
              class="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </NuxtLink>

          <!-- CV mobile -->
          <div class="px-2 pt-2 border-t border-border mt-2">
            <Button variant="outline" size="sm" class="w-full gap-2" as-child>
              <NuxtLink to="/cv-mylan-mahieddine.pdf" external>
                <Download class="w-4 h-4" />
                Télécharger mon CV
              </NuxtLink>
            </Button>
          </div>
        </div>
      </Transition>

    </nav>
  </header>
</template>