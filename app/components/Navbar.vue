<script setup lang="ts">
import { Moon, Sun, Menu, X } from 'lucide-vue-next'

const colorMode = useColorMode()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Toggle dark/light
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Détecte le scroll pour l'effet blur
onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})

// Liens de navigation — personnalise selon tes pages
const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Compétences', to: '/skills' },
  { label: 'Projets', to: '/projects' },
  { label: 'Expérience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-transparent'
    ]"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo / Nom — personnalise ici -->
        <NuxtLink
          to="/"
          class="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          M.Mahieddine
          <span class="text-primary">.</span>
        </NuxtLink>

        <!-- Liens desktop -->
        <ul class="hidden md:flex items-center gap-6">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              active-class="text-foreground"
            >
              {{ link.label }}
              <!-- Underline animée -->
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
              />
            </NuxtLink>
          </li>
        </ul>

        <!-- Actions droite -->
        <div class="flex items-center gap-3">
          <!-- Toggle dark mode -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Burger menu mobile -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            <X v-if="isMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>

      </div>

      <!-- Menu mobile -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <ul
          v-if="isMenuOpen"
          class="md:hidden py-4 border-t border-border space-y-1"
        >
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              active-class="text-foreground bg-accent"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </Transition>

    </nav>
  </header>
</template>