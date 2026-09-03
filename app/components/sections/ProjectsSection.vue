<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

const { t } = useI18n()

const selectedProject = ref<Project | null>(null)

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="proyectos" class="projects">
    <div class="projects__container">

      <!-- ENCABEZADO -->
      <div class="projects__heading">
        <h2 class="projects__title">
          {{ t('projects.title') }}
        </h2>

        <div class="projects__line"></div>

        <p class="projects__intro">
          {{ t('projects.intro') }}
        </p>
      </div>

      <!-- TARJETAS -->
      <div class="projects__grid">
        <ProjectsProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @open="openProject"
        />
      </div>

    </div>

    <!-- MODAL -->
    <ProjectsProjectModal
      :project="selectedProject"
      @close="closeProject"
    />
  </section>
</template>

<style scoped>
.projects {
  min-height: 100vh;

  display: flex;
  align-items: center;

  padding: 100px 0;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(124, 58, 237, 0.08),
      transparent 28%
    ),
    var(--color-background);
}

.projects__container {
  width: min(100% - 40px, 1400px);

  margin: 0 auto;
}

/* ================================
   ENCABEZADO
================================ */

.projects__heading {
  max-width: 760px;

  margin-bottom: 52px;
}

.projects__title {
  margin: 0;

  font-size: clamp(3rem, 5vw, 4.8rem);
  line-height: 1;

  font-weight: 800;

  letter-spacing: -0.045em;

  color: var(--color-white);
}

.projects__line {
  width: 90px;
  height: 2px;

  margin-top: 22px;

  background: linear-gradient(
    90deg,
    var(--color-primary),
    transparent
  );
}

.projects__intro {
  max-width: 700px;

  margin-top: 24px;

  font-size: 1.02rem;
  line-height: 1.75;

  color: var(--color-text-soft);
}

/* ================================
   GRID
================================ */

.projects__grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 22px;
}

/* ================================
   TABLET
================================ */

/*
  Importante:
  1024px entra aquí.

  En tablets dejamos de obligar a Projects
  a ocupar 100vh y dejamos de centrar
  verticalmente todo el contenido.
*/
@media (max-width: 1100px) {
  .projects {
    min-height: auto;

    align-items: flex-start;

    padding: 80px 0;
  }

  .projects__heading {
    margin-bottom: 44px;
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }
}

/* ================================
   MOBILE
================================ */

@media (max-width: 600px) {
  .projects {
    padding: 70px 0;
  }

  .projects__container {
    width: min(100% - 24px, 1400px);
  }

  .projects__heading {
    margin-bottom: 40px;
  }

  .projects__title {
    font-size: clamp(2.8rem, 14vw, 4rem);
  }

  .projects__intro {
    margin-top: 20px;

    font-size: 0.98rem;
    line-height: 1.7;
  }
}
</style>