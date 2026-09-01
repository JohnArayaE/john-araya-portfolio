<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero__container">

      <!-- LADO IZQUIERDO -->
      <div class="hero__content">
        <p class="hero__eyebrow">
          {{ t('hero.eyebrow') }}
        </p>

        <h1 class="hero__title">
          John Araya
        </h1>

        <h2 class="hero__role">
          {{ t('hero.role') }}
        </h2>

        <p class="hero__description">
          {{ t('hero.description') }}
        </p>

        <div class="hero__actions">
          <a
            href="#proyectos"
            class="hero__button hero__button--primary"
          >
            {{ t('hero.viewProjects') }}
          </a>

          <a
            href="#contacto"
            class="hero__button hero__button--secondary"
          >
            {{ t('hero.contactMe') }}
          </a>
        </div>

        <div class="hero__socials">
          <a
            href="https://github.com/JohnArayaE"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <span></span>

          <a
            href="https://www.linkedin.com/in/johnaraya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <!-- LADO DERECHO -->
      <aside class="focus-card">
        <div class="focus-card__header">
          <div class="focus-card__title">
            <UIcon name="i-lucide-sparkles" />
            <span>{{ t('hero.focus.title') }}</span>
          </div>
        </div>

        <div class="focus-card__list">

          <!-- DESARROLLO WEB -->
          <article class="focus-item">
            <div class="focus-item__icon">
              <UIcon name="i-lucide-code-xml" />
            </div>

            <div class="focus-item__content">
              <h3>{{ t('hero.focus.web.title') }}</h3>

              <p>
                {{ t('hero.focus.web.description') }}
              </p>

              <div class="focus-item__badges">
                <span>
                  <UIcon
                    class="tech-logo tech-logo--vue"
                    name="i-simple-icons-vuedotjs"
                  />
                  Vue
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--nuxt"
                    name="i-simple-icons-nuxtdotjs"
                  />
                  Nuxt
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--typescript"
                    name="i-simple-icons-typescript"
                  />
                  TypeScript
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--javascript"
                    name="i-simple-icons-javascript"
                  />
                  JavaScript
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--html"
                    name="i-simple-icons-html5"
                  />
                  HTML5
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--css"
                    name="i-simple-icons-css3"
                  />
                  CSS3
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--tailwind"
                    name="i-simple-icons-tailwindcss"
                  />
                  Tailwind CSS
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--pinia"
                    name="i-simple-icons-pinia"
                  />
                  Pinia
                </span>
              </div>
            </div>
          </article>

          <!-- BACKEND -->
          <article class="focus-item">
            <div class="focus-item__icon">
              <UIcon name="i-lucide-server" />
            </div>

            <div class="focus-item__content">
              <h3>{{ t('hero.focus.backend.title') }}</h3>

              <p>
                {{ t('hero.focus.backend.description') }}
              </p>

              <div class="focus-item__badges">
                <span>
                  <UIcon
                    class="tech-logo tech-logo--fastapi"
                    name="i-simple-icons-fastapi"
                  />
                  FastAPI
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--laravel"
                    name="i-simple-icons-laravel"
                  />
                  Laravel
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--node"
                    name="i-simple-icons-nodedotjs"
                  />
                  Node.js
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--express"
                    name="i-simple-icons-express"
                  />
                  Express.js
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--django"
                    name="i-simple-icons-django"
                  />
                  Django
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--python"
                    name="i-simple-icons-python"
                  />
                  Python
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--php"
                    name="i-simple-icons-php"
                  />
                  PHP
                </span>
              </div>
            </div>
          </article>

          <!-- BASES DE DATOS -->
          <article class="focus-item">
            <div class="focus-item__icon">
              <UIcon name="i-lucide-database" />
            </div>

            <div class="focus-item__content">
              <h3>{{ t('hero.focus.database.title') }}</h3>

              <p>
                {{ t('hero.focus.database.description') }}
              </p>

              <div class="focus-item__badges">
                <span>
                  <UIcon
                    class="tech-logo tech-logo--postgresql"
                    name="i-simple-icons-postgresql"
                  />
                  PostgreSQL
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--sqlserver"
                    name="i-simple-icons-microsoftsqlserver"
                  />
                  SQL Server
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--mongodb"
                    name="i-simple-icons-mongodb"
                  />
                  MongoDB
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--firebase"
                    name="i-simple-icons-firebase"
                  />
                  Firebase
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--qdrant"
                    name="i-simple-icons-qdrant"
                  />
                  Qdrant
                </span>
              </div>
            </div>
          </article>

          <!-- CLOUD -->
          <article class="focus-item">
            <div class="focus-item__icon">
              <UIcon name="i-lucide-cloud" />
            </div>

            <div class="focus-item__content">
              <h3>{{ t('hero.focus.cloud.title') }}</h3>

              <p>
                {{ t('hero.focus.cloud.description') }}
              </p>

              <div class="focus-item__badges">
                <span>
                  <UIcon
                    class="tech-logo tech-logo--aws"
                    name="i-simple-icons-amazonwebservices"
                  />
                  AWS
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--azure"
                    name="i-simple-icons-microsoftazure"
                  />
                  Azure
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--docker"
                    name="i-simple-icons-docker"
                  />
                  Docker
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--git"
                    name="i-simple-icons-git"
                  />
                  Git
                </span>

                <span>
                  <UIcon
                    class="tech-logo tech-logo--github"
                    name="i-simple-icons-github"
                  />
                  GitHub
                </span>
              </div>
            </div>
          </article>

        </div>
      </aside>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  padding: 70px 0;

  background:
    radial-gradient(
      circle at 82% 30%,
      rgba(124, 58, 237, 0.1),
      transparent 32%
    ),
    var(--color-background);
}

.hero__container {
  width: min(100% - 40px, 1400px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(460px, 0.9fr);
  align-items: center;
  gap: 70px;
}

.hero__content {
  max-width: 720px;
}

.hero__eyebrow {
  margin-bottom: 14px;

  font-size: 1rem;
  font-weight: 600;

  color: var(--color-primary);

  letter-spacing: 0.04em;
}

.hero__title {
  margin: 0;

  font-size: clamp(3.5rem, 8vw, 6.2rem);
  line-height: 0.95;

  font-weight: 800;
  letter-spacing: -0.05em;

  color: var(--color-white);
}

.hero__role {
  margin-top: 20px;

  font-size: clamp(1.7rem, 4vw, 2.6rem);
  line-height: 1.1;

  font-weight: 600;

  color: var(--color-text);
}

.hero__description {
  max-width: 680px;

  margin-top: 28px;

  font-size: 1.08rem;
  line-height: 1.8;

  color: var(--color-text-soft);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  margin-top: 36px;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: 0 22px;

  border-radius: 8px;

  font-size: 0.95rem;
  font-weight: 600;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.hero__button:hover {
  transform: translateY(-2px);
}

.hero__button--primary {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);

  color: var(--color-white);
}

.hero__button--primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.hero__button--secondary {
  background-color: transparent;
  border: 1px solid var(--color-border);

  color: var(--color-text);
}

.hero__button--secondary:hover {
  border-color: var(--color-white);
  color: var(--color-white);
}

.hero__socials {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 28px;

  font-size: 0.9rem;
  font-weight: 500;

  color: var(--color-text-soft);
}

.hero__socials a {
  transition: color 0.2s ease;
}

.hero__socials a:hover {
  color: var(--color-white);
}

.hero__socials span {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background-color: var(--color-primary);
}

/* PANEL DERECHO */

.focus-card {
  padding: 26px;

  border: 1px solid rgba(124, 58, 237, 0.5);
  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(124, 58, 237, 0.07),
      rgba(255, 255, 255, 0.01)
    ),
    rgba(15, 15, 18, 0.88);

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.28);
}

.focus-card__header {
  margin-bottom: 22px;
}

.focus-card__title {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--color-primary);

  font-size: 0.86rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.focus-card__title :deep(svg) {
  width: 18px;
  height: 18px;
}

.focus-card__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.focus-item {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 18px;

  padding: 18px;

  border: 1px solid transparent;
  border-radius: 14px;

  background-color: rgba(255, 255, 255, 0.015);

  transition:
    border-color 0.25s ease,
    background-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.focus-item:hover {
  transform: translateY(-2px);

  border-color: rgba(124, 58, 237, 0.5);

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.12),
      rgba(255, 255, 255, 0.02)
    );

  box-shadow:
    0 12px 30px rgba(76, 29, 149, 0.14);
}

.focus-item__icon {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 14px;

  background-color: rgba(124, 58, 237, 0.08);

  color: var(--color-primary);

  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

.focus-item:hover .focus-item__icon {
  transform: scale(1.05);

  background-color: rgba(124, 58, 237, 0.16);
}

.focus-item__icon :deep(svg) {
  width: 26px;
  height: 26px;
}

.focus-item__content h3 {
  margin-bottom: 5px;

  font-size: 1.05rem;
  font-weight: 700;

  color: var(--color-white);
}

.focus-item__content p {
  margin-bottom: 12px;

  font-size: 0.86rem;
  line-height: 1.55;

  color: var(--color-text-soft);
}

/* BADGES */

.focus-item__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/*
 * El > es MUY importante.
 * Solo aplica estilos al badge principal,
 * no al span interno que utiliza Nuxt Icon.
 */
.focus-item__badges > span {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  min-height: 30px;
  padding: 5px 10px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;

  background-color: rgba(255, 255, 255, 0.02);

  font-size: 0.74rem;
  font-weight: 500;

  color: #d4d4d8;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.focus-item__badges > span:hover {
  color: var(--color-white);

  border-color: rgba(124, 58, 237, 0.45);

  background-color: rgba(124, 58, 237, 0.08);

  transform: translateY(-1px);
}

/* LOGOS */

.tech-logo {
  width: 15px;
  height: 15px;

  display: inline-block;

  flex: 0 0 15px;

  background-color: currentColor;
}

/* COLORES DE TECNOLOGÍAS */

/* WEB */

.tech-logo--vue {
  color: #42b883;
}

.tech-logo--nuxt {
  color: #00dc82;
}

.tech-logo--typescript {
  color: #3178c6;
}

.tech-logo--javascript {
  color: #f7df1e;
}

.tech-logo--html {
  color: #e34f26;
}

.tech-logo--css {
  color: #1572b6;
}

.tech-logo--tailwind {
  color: #06b6d4;
}

.tech-logo--pinia {
  color: #ffd859;
}

/* BACKEND */

.tech-logo--fastapi {
  color: #009688;
}

.tech-logo--laravel {
  color: #ff2d20;
}

.tech-logo--node {
  color: #5fa04e;
}

.tech-logo--express {
  color: #ffffff;
}

.tech-logo--django {
  color: #44b78b;
}

.tech-logo--python {
  color: #3776ab;
}

.tech-logo--php {
  color: #777bb4;
}

/* BASES DE DATOS */

.tech-logo--postgresql {
  color: #4169e1;
}

.tech-logo--sqlserver {
  color: #cc2927;
}

.tech-logo--mongodb {
  color: #47a248;
}

.tech-logo--firebase {
  color: #ffca28;
}

.tech-logo--qdrant {
  color: #dc244c;
}

/* CLOUD */

.tech-logo--aws {
  color: #ff9900;
}

.tech-logo--azure {
  color: #0078d4;
}

.tech-logo--docker {
  color: #2496ed;
}

.tech-logo--git {
  color: #f05032;
}

.tech-logo--github {
  color: #ffffff;
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .focus-card {
    max-width: 760px;
  }
}

@media (max-width: 700px) {
  .hero {
    padding: 64px 0 50px;
  }

  .hero__container {
    width: min(100% - 24px, 1400px);
  }

  .hero__title {
    font-size: clamp(3rem, 16vw, 4.4rem);
  }

  .hero__role {
    font-size: 1.5rem;
  }

  .hero__description {
    font-size: 1rem;
    line-height: 1.7;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__button {
    width: 100%;
  }

  .focus-card {
    padding: 18px;
  }

  .focus-item {
    grid-template-columns: 1fr;
  }

  .focus-item__icon {
    width: 48px;
    height: 48px;
  }
}
</style>