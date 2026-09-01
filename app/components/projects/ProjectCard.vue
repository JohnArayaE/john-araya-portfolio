<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  open: [project: Project]
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__top">
      <div class="project-card__icon">
        <UIcon name="i-lucide-folder-code" />
      </div>

      <span class="project-card__label">
        Proyecto destacado
      </span>
    </div>

    <div class="project-card__content">
      <h3 class="project-card__title">
        {{ project.title }}
      </h3>

      <p class="project-card__description">
        {{ project.shortDescription }}
      </p>

      <div class="project-card__architecture">
        <div class="architecture-item">
          <UIcon name="i-lucide-monitor" />
          <span>{{ project.architecture.frontend }}</span>
        </div>

        <UIcon
          class="architecture-arrow"
          name="i-lucide-arrow-right"
        />

        <div class="architecture-item">
          <UIcon name="i-lucide-server" />
          <span>{{ project.architecture.backend }}</span>
        </div>

        <UIcon
          class="architecture-arrow"
          name="i-lucide-arrow-right"
        />

        <div class="architecture-item">
          <UIcon name="i-lucide-database" />
          <span>MongoDB Atlas</span>
        </div>
      </div>

      <div class="project-card__technologies">
        <span
          v-for="technology in project.technologies"
          :key="technology"
        >
          {{ technology }}
        </span>
      </div>
    </div>

    <div class="project-card__footer">
      <button
        class="project-card__button"
        type="button"
        @click="emit('open', project)"
      >
        <span>Ver más</span>

        <UIcon name="i-lucide-arrow-up-right" />
      </button>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;

  min-height: 420px;

  display: flex;
  flex-direction: column;

  padding: 30px;

  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 20px;

  background:
    radial-gradient(
      circle at 90% 10%,
      rgba(124, 58, 237, 0.09),
      transparent 28%
    ),
    linear-gradient(
      145deg,
      rgba(124, 58, 237, 0.025),
      rgba(255, 255, 255, 0.01)
    ),
    rgba(18, 18, 21, 0.92);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);

  border-color: rgba(124, 58, 237, 0.5);

  box-shadow:
    0 20px 50px rgba(76, 29, 149, 0.12);
}

/* ================================
   SUPERIOR
================================ */

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 30px;
}

.project-card__icon {
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 14px;

  background-color: rgba(124, 58, 237, 0.09);

  color: var(--color-primary);
}

.project-card__icon :deep(svg) {
  width: 25px;
  height: 25px;
}

.project-card__label {
  padding: 7px 11px;

  border: 1px solid rgba(124, 58, 237, 0.25);
  border-radius: 8px;

  background-color: rgba(124, 58, 237, 0.06);

  font-size: 0.68rem;
  font-weight: 700;

  color: var(--color-primary);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ================================
   CONTENIDO
================================ */

.project-card__content {
  flex: 1;
}

.project-card__title {
  margin: 0;

  font-size: 1.7rem;
  line-height: 1.2;

  font-weight: 750;

  color: var(--color-white);
}

.project-card__description {
  max-width: 650px;

  margin-top: 16px;

  font-size: 0.95rem;
  line-height: 1.75;

  color: var(--color-text-soft);
}

/* ================================
   ARQUITECTURA
================================ */

.project-card__architecture {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 9px;

  margin-top: 28px;
}

.architecture-item {
  min-height: 36px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding: 7px 10px;

  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;

  background-color: rgba(255, 255, 255, 0.02);

  font-size: 0.73rem;
  font-weight: 550;

  color: var(--color-text);
}

.architecture-item :deep(svg) {
  width: 15px;
  height: 15px;

  color: var(--color-primary);
}

.architecture-arrow {
  width: 14px;
  height: 14px;

  color: var(--color-text-soft);
}

/* ================================
   TECNOLOGÍAS
================================ */

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 24px;
}

.project-card__technologies span {
  padding: 6px 9px;

  border-radius: 7px;

  background-color: rgba(124, 58, 237, 0.07);

  font-size: 0.7rem;
  font-weight: 600;

  color: #b89cff;
}

/* ================================
   FOOTER
================================ */

.project-card__footer {
  display: flex;
  justify-content: flex-end;

  padding-top: 28px;
}

.project-card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  min-height: 44px;

  padding: 0 17px;

  cursor: pointer;

  border: 1px solid var(--color-primary);
  border-radius: 9px;

  background-color: transparent;

  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 650;

  color: var(--color-white);

  transition:
    background-color 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease;
}

.project-card__button:hover {
  transform: translateY(-2px);

  background-color: var(--color-primary);
  border-color: var(--color-primary-hover);
}

.project-card__button :deep(svg) {
  width: 17px;
  height: 17px;
}

/* ================================
   RESPONSIVE
================================ */

@media (max-width: 600px) {
  .project-card {
    min-height: auto;

    padding: 23px;
  }

  .project-card__top {
    align-items: flex-start;
  }

  .project-card__label {
    font-size: 0.6rem;
  }

  .project-card__title {
    font-size: 1.45rem;
  }

  .project-card__architecture {
    align-items: flex-start;
  }

  .architecture-arrow {
    display: none;
  }

  .project-card__footer {
    justify-content: stretch;
  }

  .project-card__button {
    width: 100%;
  }
}
</style>