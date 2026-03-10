<script setup lang="ts">
import { Music, ChevronDown, ChevronUp } from 'lucide-vue-next'

const isOpen = ref(false)
const isMinimized = ref(false)
</script>

<template>
  <div class="fixed bottom-6 left-6 z-50">

    <!-- Bouton toggle fermé -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-75 translate-y-4"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-75 translate-y-4"
    >
      <button
        v-if="!isOpen"
        class="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-border bg-card/90 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
        @click="isOpen = true"
      >
        <div class="relative w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
          <Music class="w-4 h-4 text-green-500" />
          <!-- Equalizer animé -->
          <span class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div class="text-left">
          <p class="text-xs font-semibold leading-none mb-0.5">Ma playlist</p>
          <p class="text-[10px] text-muted-foreground leading-none">Spotify · Écouter</p>
        </div>
      </button>
    </Transition>

    <!-- Player ouvert -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-90 translate-y-4"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden"
        style="width: 320px;"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-border">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-md bg-green-500/10 flex items-center justify-center">
              <Music class="w-3.5 h-3.5 text-green-500" />
            </div>
            <span class="text-xs font-semibold">Ma playlist</span>
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div class="flex items-center gap-1">
            <button
              class="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              @click="isMinimized = !isMinimized"
            >
              <ChevronDown v-if="!isMinimized" class="w-3.5 h-3.5" />
              <ChevronUp v-else class="w-3.5 h-3.5" />
            </button>
            <button
              class="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-xs font-medium"
              @click="isOpen = false"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Embed Spotify -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="!isMinimized">
            <iframe
              src="https://open.spotify.com/embed/playlist/7bu7BZEusLNJSaAuUUZBKn?utm_source=generator&theme=0"
              width="320"
              height="352"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style="display: block;"
            />
          </div>
        </Transition>

      </div>
    </Transition>

  </div>
</template>