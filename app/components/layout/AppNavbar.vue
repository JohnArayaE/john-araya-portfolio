<script setup lang="ts">
const { t, locale } = useI18n()

const cvPath = computed(() => {
  return locale.value === 'es'
    ? '/cv/John-Araya-CV-ES.pdf'
    : '/cv/John-Araya-CV-EN.pdf'
})
</script>

<template>
  <header class="navbar">
    <div class="navbar__container">
      <a href="#inicio" class="navbar__brand">
        John <span>Araya</span>
      </a>

      <nav class="navbar__menu">
        <a href="#sobre-mi" class="navbar__link">
          {{ t('navbar.about') }}
        </a>

        <a href="#habilidades" class="navbar__link">
          {{ t('navbar.skills') }}
        </a>

        <a href="#proyectos" class="navbar__link">
          {{ t('navbar.projects') }}
        </a>

        <a href="#contacto" class="navbar__link">
          {{ t('navbar.contact') }}
        </a>
      </nav>

      <div class="navbar__actions">
        <UiLanguageSwitcher />

        <a
          :href="cvPath"
          class="navbar__cv"
          download
        >
          {{ t('navbar.downloadCv') }}
        </a>
      </div>
    </div>
  </header>
</template>