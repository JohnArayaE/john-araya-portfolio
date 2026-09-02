<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="sobre-mi" class="about">
    <div class="about__container">

      <!-- COLUMNA IZQUIERDA -->
      <div class="about__content">
        <div class="about__heading">
          <h2 class="about__title">
            {{ t('about.title') }}
            <span>{{ t('about.titleHighlight') }}</span>
          </h2>

          <div class="about__line"></div>
        </div>

        <p class="about__intro">
          {{ t('about.intro.before') }}
          <strong>{{ t('about.intro.highlight') }}</strong>
          {{ t('about.intro.after') }}
        </p>

        <div class="about__text">
          <p>
            {{ t('about.paragraph1.before') }}
            <strong>{{ t('about.paragraph1.highlight') }}</strong>
            {{ t('about.paragraph1.after') }}
          </p>

          <p>
            {{ t('about.paragraph2.before') }}
            <strong>{{ t('about.paragraph2.highlight') }}</strong>
            {{ t('about.paragraph2.after') }}
          </p>

          <p>
            {{ t('about.paragraph3.before') }}
            <strong>{{ t('about.paragraph3.fullStack') }}</strong>
            {{ t('about.paragraph3.middle') }}
            <strong>{{ t('about.paragraph3.cloud') }}</strong>
            {{ t('about.paragraph3.after') }}
          </p>
        </div>
      </div>

      <!-- COLUMNA DERECHA -->
      <div class="about__cards">

        <!-- FORMACIÓN -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-graduation-cap" />
          </div>

          <span class="about-card__label">
            {{ t('about.cards.education.label') }}
          </span>

          <h3>
            {{ t('about.cards.education.title') }}
          </h3>

          <div class="about-card__line"></div>

          <p>
            {{ t('about.cards.education.description') }}
          </p>
        </article>

        <!-- ACTUALMENTE -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-book-open" />
          </div>

          <span class="about-card__label">
            {{ t('about.cards.current.label') }}
          </span>

          <h3>
            {{ t('about.cards.current.title') }}
          </h3>

          <div class="about-card__line"></div>

          <p>
            {{ t('about.cards.current.description') }}
          </p>
        </article>

        <!-- ENFOQUE -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-layers-3" />
          </div>

          <span class="about-card__label">
            {{ t('about.cards.focus.label') }}
          </span>

          <h3>
            {{ t('about.cards.focus.title') }}
          </h3>

          <div class="about-card__line"></div>

          <p>
            {{ t('about.cards.focus.description') }}
          </p>
        </article>

        <!-- INTERÉS -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-cloud" />
          </div>

          <span class="about-card__label">
            {{ t('about.cards.interest.label') }}
          </span>

          <h3>
            {{ t('about.cards.interest.title') }}
          </h3>

          <div class="about-card__line"></div>

          <p>
            {{ t('about.cards.interest.description') }}
          </p>
        </article>

      </div>

    </div>
  </section>
</template>
<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;

  background:
    radial-gradient(
      circle at 12% 45%,
      rgba(124, 58, 237, 0.1),
      transparent 30%
    ),
    var(--color-background);
}

.about__container {
  width: min(100% - 40px, 1400px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(520px, 1fr);
  gap: 90px;
  align-items: center;
}

/* =====================================================
   CONTENIDO IZQUIERDO
===================================================== */

.about__content {
  max-width: 680px;
}

.about__heading {
  margin-bottom: 28px;
}

.about__title {
  margin: 0;

  font-size: clamp(3rem, 5vw, 4.8rem);
  line-height: 1;

  font-weight: 800;
  letter-spacing: -0.045em;

  color: var(--color-white);
}

.about__title span {
  color: var(--color-primary);
}

.about__line {
  width: 90px;
  height: 2px;

  margin-top: 22px;

  background: linear-gradient(
    90deg,
    var(--color-primary),
    transparent
  );
}

.about__intro {
  max-width: 650px;

  margin-bottom: 34px;

  font-size: 1.25rem;
  line-height: 1.7;

  color: var(--color-text);
}

.about__intro strong {
  color: var(--color-primary);
  font-weight: 650;
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.about__text p {
  font-size: 1.02rem;
  line-height: 1.85;

  color: var(--color-text-soft);
}

.about__text strong {
  color: var(--color-white);
  font-weight: 650;
}

/* =====================================================
   TARJETAS
===================================================== */

.about__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.about-card {
  min-height: 280px;

  padding: 28px;

  border: 1px solid var(--color-border);
  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(124, 58, 237, 0.035),
      rgba(255, 255, 255, 0.01)
    ),
    rgba(18, 18, 21, 0.9);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease,
    box-shadow 0.25s ease;
}

.about-card:hover {
  transform: translateY(-4px);

  border-color: rgba(124, 58, 237, 0.5);

  background:
    linear-gradient(
      145deg,
      rgba(124, 58, 237, 0.1),
      rgba(255, 255, 255, 0.018)
    ),
    rgba(18, 18, 21, 0.95);

  box-shadow:
    0 18px 40px rgba(76, 29, 149, 0.12);
}

.about-card__icon {
  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  border: 1px solid rgba(124, 58, 237, 0.35);
  border-radius: 13px;

  background-color: rgba(124, 58, 237, 0.09);

  color: var(--color-primary);

  transition:
    transform 0.25s ease,
    background-color 0.25s ease;
}

.about-card:hover .about-card__icon {
  transform: scale(1.05);
  background-color: rgba(124, 58, 237, 0.15);
}

.about-card__icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.about-card__label {
  display: block;

  margin-bottom: 8px;

  font-size: 0.75rem;
  font-weight: 750;

  color: var(--color-primary);

  text-transform: uppercase;
  letter-spacing: 0.11em;
}

.about-card h3 {
  margin: 0;

  font-size: 1.18rem;
  line-height: 1.35;

  font-weight: 700;

  color: var(--color-white);
}

.about-card__line {
  width: 30px;
  height: 2px;

  margin: 18px 0;

  background-color: var(--color-primary);
}

.about-card p {
  font-size: 0.9rem;
  line-height: 1.7;

  color: var(--color-text-soft);
}

/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1100px) {
  .about {
    min-height: auto;
  }

  .about__container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .about__content {
    max-width: 800px;
  }

  .about__cards {
    max-width: 900px;
  }
}

@media (max-width: 700px) {
  .about {
    padding: 80px 0;
  }

  .about__container {
    width: min(100% - 24px, 1400px);
    gap: 46px;
  }

  .about__title {
    font-size: clamp(2.8rem, 14vw, 4rem);
  }

  .about__intro {
    font-size: 1.08rem;
  }

  .about__text p {
    font-size: 0.96rem;
    line-height: 1.8;
  }

  .about__cards {
    grid-template-columns: 1fr;
  }

  .about-card {
    min-height: auto;
    padding: 24px;
  }
}
</style>