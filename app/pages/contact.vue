<script setup lang="ts">
import { gsap } from 'gsap'
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

definePageMeta({ layout: 'default' })
useHead({ title: 'Contact — Mylan Mahieddine' })

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simule un envoi — remplace par ton service (Resend, EmailJS, etc.)
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mylanmahieddine@icloud.com',
    href: 'mailto:mylanmahieddine@icloud.com',
    accent: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 7 43 50 46 49',
    href: 'tel:+33743504649',
    accent: 'bg-green-500/10 text-green-500',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Villefontaine (38) · Lyon',
    href: '',
    accent: 'bg-orange-500/10 text-orange-500',
  },
]

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Mylan699',
    accent: 'border-t-4 border-t-slate-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mylan-mahieddine-6a7304201/',
    accent: 'border-t-4 border-t-blue-500',
  },
  {
    icon: MessageSquare,
    label: 'DevNova',
    href: 'https://www.devnova.studio/',
    accent: 'border-t-4 border-t-green-500',
  },
]

onMounted(() => {
  gsap.fromTo('.contact-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )
  gsap.fromTo('.contact-left',
    { opacity: 0, x: -40 },
    { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
  )
  gsap.fromTo('.contact-right',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.3 }
  )
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

    <!-- Header -->
    <div class="contact-header text-center mb-20">
      <p class="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
        Contact
      </p>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Travaillons <span class="text-primary">ensemble</span>
      </h1>
      <p class="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
        Une opportunité, un projet, une question ? Je réponds sous 24h.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-10">

      <!-- Colonne gauche -->
      <div class="contact-left space-y-6">

        <!-- Disponibilité -->
        <Card class="border-t-4 border-t-green-500">
          <CardHeader class="pb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <CardTitle class="text-base">Disponible — Novembre 2026</CardTitle>
            </div>
            <CardDescription class="leading-relaxed">
              Actuellement en alternance chez Coexya (Mastère). Disponible en CDI à partir de
              novembre 2026, partout en France. Ouvert aux missions freelance dès maintenant via DevNova.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">CDI · Nov 2026</Badge>
              <Badge variant="secondary">Partout en France</Badge>
              <Badge variant="secondary">Freelance dispo</Badge>
            </div>
          </CardContent>
        </Card>

        <!-- Infos contact -->
        <div class="space-y-3">
          <NuxtLink v-for="info in contactInfo" :key="info.label" :to="info.href || '#'" :external="!!info.href"
            class="block">
            <Card class="hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <CardContent class="flex items-center gap-4 py-4">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" :class="info.accent">
                  <component :is="info.icon" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-xs text-muted-foreground">{{ info.label }}</p>
                  <p class="text-sm font-medium">{{ info.value }}</p>
                </div>
              </CardContent>
            </Card>
          </NuxtLink>
        </div>

        <!-- Réseaux sociaux -->
        <div class="grid grid-cols-3 gap-3">
          <NuxtLink v-for="social in socials" :key="social.label" :to="social.href" external class="block">
            <Card class="hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              :class="social.accent">
              <CardContent class="flex flex-col items-center justify-center gap-2 py-5">
                <component :is="social.icon" class="w-5 h-5" />
                <span class="text-xs font-medium">{{ social.label }}</span>
              </CardContent>
            </Card>
          </NuxtLink>
        </div>

      </div>

      <!-- Colonne droite — Formulaire -->
      <div class="contact-right">
        <Card class="border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle>Envoyer un message</CardTitle>
            <CardDescription>
              Je vous réponds dans les meilleurs délais.
            </CardDescription>
          </CardHeader>
          <CardContent>

            <!-- Succès -->
            <div v-if="isSubmitted" class="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <Send class="w-7 h-7 text-green-500" />
              </div>
              <div>
                <p class="font-semibold text-lg">Message envoyé !</p>
                <p class="text-sm text-muted-foreground mt-1">Je vous répondrai sous 24h.</p>
              </div>
              <Button variant="outline" size="sm" @click="isSubmitted = false">
                Envoyer un autre message
              </Button>
            </div>

            <!-- Formulaire -->
            <div v-else class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="name">Nom</Label>
                  <Input id="name" v-model="form.name" placeholder="Votre nom" class="h-10" />
                </div>
                <div class="space-y-2">
                  <Label for="email">Email</Label>
                  <Input id="email" v-model="form.email" type="email" placeholder="votre@email.com" class="h-10" />
                </div>
              </div>

              <div class="space-y-2">
                <Label for="subject">Sujet</Label>
                <Input id="subject" v-model="form.subject" placeholder="Opportunité / Projet / Question..."
                  class="h-10" />
              </div>

              <div class="space-y-2">
                <Label for="message">Message</Label>
                <Textarea id="message" v-model="form.message" placeholder="Décrivez votre projet ou votre demande..."
                  class="min-h-32 resize-none" />
              </div>

              <Button class="w-full gap-2" :disabled="isSubmitting || !form.name || !form.email || !form.message"
                @click="handleSubmit">
                <Send class="w-4 h-4" />
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </Button>

              <p class="text-xs text-muted-foreground text-center">
                Ou contactez-moi directement à
                <NuxtLink to="mailto:mylanmahieddine@icloud.com" external
                  class="text-foreground underline underline-offset-2">
                  mylanmahieddine@icloud.com
                </NuxtLink>
              </p>
            </div>

          </CardContent>
        </Card>
      </div>

    </div>

  </div>
</template>