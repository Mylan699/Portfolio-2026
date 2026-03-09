<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const socials = [
  { icon: Github, href: 'https://github.com/ton-profil', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ton-profil', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ton@email.com', label: 'Email' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted-foreground">
          {{ year }} M.Mahieddine
        </p>
        <div class="flex items-center gap-3">
          <NuxtLink
            v-for="social in socials"
            :key="social.label"
            :to="social.href"
            external
            class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <component :is="social.icon" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>