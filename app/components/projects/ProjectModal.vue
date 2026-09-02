<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="project-modal"
        @click.self="emit('close')"
      >
        <div class="project-modal__content">

          <!-- CERRAR -->
          <button
            class="project-modal__close"
            type="button"
            :aria-label="t('projects.modal.close')"
            @click="emit('close')"
          >
            <UIcon name="i-lucide-x" />
          </button>

          <!-- HEADER -->
          <div class="project-modal__header">
            <div>
              <span class="project-modal__eyebrow">
                {{ t('projects.modal.project') }}
              </span>

              <h2>
                {{ t(project.titleKey) }}
              </h2>
            </div>

            <div class="project-modal__header-icon">
              <UIcon name="i-lucide-folder-code" />
            </div>
          </div>

          <!-- DESCRIPCIÓN -->
          <div class="project-modal__section">
            <h3>{{ t('projects.modal.description') }}</h3>

            <p class="project-modal__description">
              {{ t(project.descriptionKey) }}
            </p>
          </div>

          <!-- ARQUITECTURA -->
          <div class="project-modal__section">
            <h3>{{ t('projects.modal.architecture') }}</h3>

            <div class="architecture">
              <div class="architecture__item">
                <div class="architecture__icon">
                  <UIcon name="i-lucide-monitor" />
                </div>

                <span>{{ t('projects.modal.frontend') }}</span>

                <strong>
                  {{ project.architecture.frontend }}
                </strong>
              </div>

              <UIcon
                class="architecture__arrow"
                name="i-lucide-arrow-right"
              />

              <div class="architecture__item">
                <div class="architecture__icon">
                  <UIcon name="i-lucide-server" />
                </div>

                <span>{{ t('projects.modal.backend') }}</span>

                <strong>
                  {{ project.architecture.backend }}
                </strong>
              </div>

              <UIcon
                class="architecture__arrow"
                name="i-lucide-arrow-right"
              />

              <div class="architecture__item">
                <div class="architecture__icon">
                  <UIcon name="i-lucide-database" />
                </div>

                <span>{{ t('projects.modal.database') }}</span>

                <strong>
                  {{ project.architecture.database }}
                </strong>
              </div>
            </div>

            <!-- CLOUD -->
            <div
              v-if="project.architecture.cloud.length"
              class="architecture-cloud"
            >
              <div class="architecture-cloud__title">
                <UIcon name="i-lucide-cloud" />

                <span>
                  {{ t('projects.modal.cloudServices') }}
                </span>
              </div>

              <div class="architecture-cloud__items">
                <span
                  v-for="service in project.architecture.cloud"
                  :key="service"
                >
                  {{ service }}
                </span>
              </div>
            </div>
          </div>

          <!-- FUNCIONALIDADES -->
          <div class="project-modal__section">
            <h3>{{ t('projects.modal.features') }}</h3>

            <div class="features">
              <div
                v-for="featureKey in project.featureKeys"
                :key="featureKey"
                class="feature"
              >
                <UIcon name="i-lucide-check" />

                <span>
                  {{ t(featureKey) }}
                </span>
              </div>
            </div>
          </div>

          <!-- TECNOLOGÍAS -->
          <div class="project-modal__section">
            <h3>{{ t('projects.modal.technologies') }}</h3>

            <div class="technologies">
              <span
                v-for="technology in project.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>

          <!-- LINKS -->
          <div
            v-if="project.repositories?.length || project.demo"
            class="project-modal__actions"
          >
            <a
              v-for="repository in project.repositories"
              :key="repository.url"
              :href="repository.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-modal__button project-modal__button--secondary"
            >
              <UIcon name="i-simple-icons-github" />

              <span>{{ repository.name }}</span>
            </a>

            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="project-modal__button project-modal__button--primary"
            >
              <span>
                {{ t('projects.modal.viewProject') }}
              </span>

              <UIcon name="i-lucide-arrow-up-right" />
            </a>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.project-modal {
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  overflow-y: auto;

  background-color: rgba(5, 5, 7, 0.82);

  backdrop-filter: blur(10px);
}

.project-modal__content {
  position: relative;

  width: min(100%, 1050px);

  max-height: calc(100vh - 60px);
  overflow-y: auto;

  padding: 42px;

  border: 1px solid rgba(124, 58, 237, 0.35);
  border-radius: 22px;

  background:
    radial-gradient(
      circle at 90% 5%,
      rgba(124, 58, 237, 0.12),
      transparent 25%
    ),
    #111114;

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.55);
}

/* =============================
   CERRAR
============================= */

.project-modal__close {
  position: absolute;

  top: 22px;
  right: 22px;

  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: 1px solid var(--color-border);
  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.025);

  color: var(--color-text-soft);

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.project-modal__close:hover {
  color: var(--color-white);

  border-color: rgba(124, 58, 237, 0.45);

  background-color: rgba(124, 58, 237, 0.08);
}

.project-modal__close :deep(svg) {
  width: 20px;
  height: 20px;
}

/* =============================
   HEADER
============================= */

.project-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;

  padding-right: 55px;
  padding-bottom: 30px;

  border-bottom: 1px solid var(--color-border);
}

.project-modal__eyebrow {
  display: block;

  margin-bottom: 9px;

  font-size: 0.72rem;
  font-weight: 750;

  color: var(--color-primary);

  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.project-modal__header h2 {
  margin: 0;

  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.1;

  font-weight: 800;
  letter-spacing: -0.04em;

  color: var(--color-white);
}

.project-modal__header-icon {
  width: 62px;
  height: 62px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 16px;

  background-color: rgba(124, 58, 237, 0.08);

  color: var(--color-primary);
}

.project-modal__header-icon :deep(svg) {
  width: 28px;
  height: 28px;
}

/* =============================
   SECCIONES
============================= */

.project-modal__section {
  padding-top: 34px;
}

.project-modal__section h3 {
  margin-bottom: 18px;

  font-size: 1.05rem;
  font-weight: 700;

  color: var(--color-white);
}

.project-modal__description {
  max-width: 900px;

  font-size: 0.97rem;
  line-height: 1.85;

  color: var(--color-text-soft);
}

/* =============================
   ARQUITECTURA
============================= */

.architecture {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto
    minmax(0, 1fr)
    auto
    minmax(0, 1fr);

  align-items: center;

  gap: 14px;
}

.architecture__item {
  min-height: 145px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;

  border: 1px solid var(--color-border);
  border-radius: 14px;

  background-color: rgba(255, 255, 255, 0.015);

  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease;
}

.architecture__item:hover {
  transform: translateY(-2px);

  border-color: rgba(124, 58, 237, 0.4);

  background-color: rgba(124, 58, 237, 0.05);
}

.architecture__icon {
  margin-bottom: 15px;

  color: var(--color-primary);
}

.architecture__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.architecture__item > span {
  margin-bottom: 5px;

  font-size: 0.67rem;
  font-weight: 700;

  color: var(--color-text-soft);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.architecture__item strong {
  font-size: 0.88rem;
  line-height: 1.45;

  color: var(--color-white);
}

.architecture__arrow {
  width: 18px;
  height: 18px;

  color: var(--color-primary);
}

/* CLOUD */

.architecture-cloud {
  margin-top: 14px;

  padding: 18px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  border: 1px solid var(--color-border);
  border-radius: 14px;

  background-color: rgba(124, 58, 237, 0.035);
}

.architecture-cloud__title {
  display: flex;
  align-items: center;

  gap: 10px;

  font-size: 0.8rem;
  font-weight: 650;

  color: var(--color-white);
}

.architecture-cloud__title :deep(svg) {
  width: 19px;
  height: 19px;

  color: var(--color-primary);
}

.architecture-cloud__items {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
}

.architecture-cloud__items span {
  padding: 7px 10px;

  border: 1px solid rgba(124, 58, 237, 0.25);
  border-radius: 7px;

  background-color: rgba(124, 58, 237, 0.06);

  font-size: 0.72rem;
  font-weight: 600;

  color: #b89cff;
}

/* =============================
   FUNCIONALIDADES
============================= */

.features {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 11px;
}

.feature {
  min-height: 48px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 12px 14px;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.012);
}

.feature :deep(svg) {
  width: 17px;
  height: 17px;

  flex-shrink: 0;

  color: var(--color-primary);
}

.feature span {
  font-size: 0.8rem;
  line-height: 1.45;

  color: var(--color-text);
}

/* =============================
   TECNOLOGÍAS
============================= */

.technologies {
  display: flex;
  flex-wrap: wrap;

  gap: 9px;
}

.technologies span {
  padding: 8px 11px;

  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 8px;

  background-color: rgba(124, 58, 237, 0.055);

  font-size: 0.74rem;
  font-weight: 600;

  color: #b89cff;
}

/* =============================
   BOTONES
============================= */

.project-modal__actions {
  display: flex;
  justify-content: flex-end;

  gap: 12px;

  padding-top: 36px;
}

.project-modal__button {
  min-height: 45px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  padding: 0 18px;

  border-radius: 9px;

  font-size: 0.83rem;
  font-weight: 650;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.project-modal__button:hover {
  transform: translateY(-2px);
}

.project-modal__button--primary {
  border: 1px solid var(--color-primary);

  background-color: var(--color-primary);

  color: var(--color-white);
}

.project-modal__button--primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.project-modal__button--secondary {
  border: 1px solid var(--color-border);

  background-color: transparent;

  color: var(--color-text);
}

.project-modal__button--secondary:hover {
  border-color: var(--color-white);

  color: var(--color-white);
}

.project-modal__button :deep(svg) {
  width: 17px;
  height: 17px;
}

/* =============================
   TRANSICIÓN
============================= */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .project-modal__content,
.modal-leave-active .project-modal__content {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .project-modal__content,
.modal-leave-to .project-modal__content {
  opacity: 0;
  transform: translateY(12px) scale(0.985);
}

/* =============================
   RESPONSIVE
============================= */

@media (max-width: 800px) {
  .project-modal {
    padding: 16px;
  }

  .project-modal__content {
    max-height: calc(100vh - 32px);

    padding: 30px 22px;
  }

  .project-modal__header-icon {
    display: none;
  }

  .architecture {
    grid-template-columns: 1fr;
  }

  .architecture__arrow {
    display: none;
  }

  .architecture__item {
    min-height: auto;
  }

  .architecture-cloud {
    align-items: flex-start;
    flex-direction: column;
  }

  .features {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .project-modal__header {
    padding-right: 45px;
  }

  .project-modal__actions {
    flex-direction: column;
  }

  .project-modal__button {
    width: 100%;
  }
}
</style>