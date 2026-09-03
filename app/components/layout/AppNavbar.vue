<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

const { t, locale } = useI18n()

const isMenuOpen = ref(false)

const cvPath = computed(() => {
  return locale.value === 'es'
    ? '/cv/CV_JohnArayaEcheverria Español.pdf'
    : '/cv/CV_JohnArayaEcheverria.pdf'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const goToMobileSection = async (sectionId: string) => {
  isMenuOpen.value = false

  await nextTick()

  setTimeout(() => {
    const section = document.getElementById(sectionId)

    if (!section) return

    const navbar = document.querySelector('.navbar') as HTMLElement | null

    const navbarHeight = navbar?.offsetHeight ?? 70

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      16

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
  }, 220)
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__container">
      <!-- LOGO -->
      <a
        href="#inicio"
        class="navbar__brand"
        @click="closeMenu"
      >
        John <span>Araya</span>
      </a>

      <!-- MENÚ DESKTOP -->
      <nav class="navbar__menu">
        <a
          href="#sobre-mi"
          class="navbar__link"
        >
          {{ t('navbar.about') }}
        </a>

        <a
          href="#habilidades"
          class="navbar__link"
        >
          {{ t('navbar.skills') }}
        </a>

        <a
          href="#proyectos"
          class="navbar__link"
        >
          {{ t('navbar.projects') }}
        </a>

        <a
          href="#contacto"
          class="navbar__link"
        >
          {{ t('navbar.contact') }}
        </a>
      </nav>

      <!-- ACCIONES DESKTOP -->
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

      <!-- ACCIONES MÓVILES -->
      <div class="navbar__mobile-header-actions">
        <UiLanguageSwitcher />

        <button
          type="button"
          class="navbar__toggle"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menú"
          @click="toggleMenu"
        >
          <UIcon
            :name="
              isMenuOpen
                ? 'i-lucide-x'
                : 'i-lucide-menu'
            "
          />
        </button>
      </div>
    </div>

    <!-- MENÚ MÓVIL -->
    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        class="navbar__mobile"
      >
        <nav class="navbar__mobile-links">
          <button
            type="button"
            class="navbar__mobile-link"
            @click="goToMobileSection('sobre-mi')"
          >
            {{ t('navbar.about') }}
          </button>

          <button
            type="button"
            class="navbar__mobile-link"
            @click="goToMobileSection('habilidades')"
          >
            {{ t('navbar.skills') }}
          </button>

          <button
            type="button"
            class="navbar__mobile-link"
            @click="goToMobileSection('proyectos')"
          >
            {{ t('navbar.projects') }}
          </button>

          <button
            type="button"
            class="navbar__mobile-link"
            @click="goToMobileSection('contacto')"
          >
            {{ t('navbar.contact') }}
          </button>
        </nav>

        <a
          :href="cvPath"
          class="navbar__mobile-cv"
          download
          @click="closeMenu"
        >
          <UIcon name="i-lucide-download" />

          <span>
            {{ t('navbar.downloadCv') }}
          </span>
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;

  background: rgba(13, 13, 15, 0.95);
  backdrop-filter: blur(16px);

  border-bottom: 1px solid var(--color-border);
}

.navbar__container {
  width: min(1400px, calc(100% - 80px));
  min-height: 76px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 32px;
}

/* LOGO */

.navbar__brand {
  flex-shrink: 0;

  color: var(--color-white);

  font-size: 1.3rem;
  font-weight: 700;

  text-decoration: none;
}

.navbar__brand span {
  color: var(--color-primary);
}

/* MENÚ DESKTOP */

.navbar__menu {
  display: flex;
  align-items: center;

  gap: 32px;
}

.navbar__link {
  position: relative;

  padding: 8px 0;

  color: var(--color-text-soft);

  font-size: 0.95rem;
  font-weight: 500;

  text-decoration: none;

  transition: color 0.2s ease;
}

.navbar__link::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: 0;

  width: 0;
  height: 2px;

  background: var(--color-primary);

  transition: width 0.2s ease;
}

.navbar__link:hover {
  color: var(--color-white);
}

.navbar__link:hover::after {
  width: 100%;
}

/* ACCIONES DESKTOP */

.navbar__actions {
  display: flex;
  align-items: center;

  gap: 20px;
}

.navbar__cv {
  padding: 11px 18px;

  border: 1px solid var(--color-primary);
  border-radius: 8px;

  color: var(--color-white);
  background: transparent;

  font-size: 0.9rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.navbar__cv:hover {
  background: var(--color-primary);
  border-color: var(--color-primary-hover);

  transform: translateY(-1px);
}

/* ACCIONES MÓVILES */

.navbar__mobile-header-actions {
  display: none;
  align-items: center;

  gap: 14px;
}

.navbar__toggle {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid var(--color-border);
  border-radius: 8px;

  background: var(--color-surface);
  color: var(--color-white);

  cursor: pointer;
}

.navbar__toggle :deep(svg) {
  width: 24px;
  height: 24px;
}

/* MENÚ MÓVIL */

.navbar__mobile {
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 12px 20px 24px;

  background: rgba(13, 13, 15, 0.98);

  border-top: 1px solid var(--color-border);
}

.navbar__mobile-links {
  display: flex;
  flex-direction: column;
}

.navbar__mobile-link {
  width: 100%;

  padding: 16px 4px;

  border: none;
  border-bottom: 1px solid var(--color-border);

  background: transparent;

  color: var(--color-text);

  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;

  text-align: left;

  cursor: pointer;

  transition:
    color 0.2s ease,
    padding-left 0.2s ease;
}

.navbar__mobile-link:hover {
  color: var(--color-white);

  padding-left: 8px;
}

/* CV MÓVIL */

.navbar__mobile-cv {
  width: 100%;

  margin-top: 22px;
  padding: 12px 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  border-radius: 8px;

  background: var(--color-primary);
  color: var(--color-white);

  font-size: 0.9rem;
  font-weight: 600;

  text-decoration: none;
}

/* ANIMACIÓN */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* TABLET / MOBILE */

@media (max-width: 900px) {
  .navbar__container {
    width: min(100% - 40px, 1400px);
  }

  .navbar__menu,
  .navbar__actions {
    display: none;
  }

  .navbar__mobile-header-actions {
    display: flex;
  }
}

@media (max-width: 500px) {
  .navbar__container {
    width: calc(100% - 32px);
    min-height: 68px;

    gap: 16px;
  }

  .navbar__brand {
    font-size: 1.15rem;
  }

  .navbar__mobile-header-actions {
    gap: 10px;
  }

  .navbar__toggle {
    width: 42px;
    height: 42px;
  }

  .navbar__mobile {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>