<script setup lang="ts">
const { locale, setLocale } = useI18n()

const changeLanguage = async (language: 'es' | 'en') => {
  if (locale.value !== language) {
    await setLocale(language)
  }
}
</script>

<template>
  <div class="language-switcher">
    <button
      type="button"
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': locale === 'es' }"
      @click="changeLanguage('es')"
    >
      ES
    </button>

    <span class="language-switcher__separator">/</span>

    <button
      type="button"
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': locale === 'en' }"
      @click="changeLanguage('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.language-switcher__button {
  padding: 0;

  border: none;
  background: transparent;

  color: var(--color-text-soft);

  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.language-switcher__button:hover {
  color: var(--color-white);
}

.language-switcher__button--active {
  color: var(--color-primary-hover);
}

.language-switcher__separator {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
}
</style>