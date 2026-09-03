<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="contacto" class="contact">
    <div class="contact__container">

      <div class="contact__heading">
        <h2 class="contact__title">
          {{ t('contact.title') }}<span>{{ t('contact.titleHighlight') }}</span>
        </h2>

        <div class="contact__line"></div>
      </div>

      <div class="contact__content">

        <div class="contact__main">
          <span class="contact__eyebrow">
            {{ t('contact.eyebrow') }}
          </span>

          <h3>
            {{ t('contact.heading') }}
          </h3>

          <p>
            {{ t('contact.description') }}
          </p>

          <a
            href="mailto:johnae1205@gmail.com"
            class="contact__button"
          >
            <UIcon name="i-lucide-mail" />

            <span>{{ t('contact.sendEmail') }}</span>

            <UIcon name="i-lucide-arrow-up-right" />
          </a>
        </div>

        <div class="contact__links">

          <a
            href="mailto:johnae1205@gmail.com"
            class="contact-card"
          >
            <div class="contact-card__icon">
              <UIcon name="i-lucide-mail" />
            </div>

            <div class="contact-card__content">
              <span>Email</span>
              <strong>johnae1205@gmail.com</strong>
            </div>

            <UIcon
              class="contact-card__arrow"
              name="i-lucide-arrow-up-right"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/johnaraya/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <div class="contact-card__icon">
              <UIcon name="i-simple-icons-linkedin" />
            </div>

            <div class="contact-card__content">
              <span>LinkedIn</span>
              <strong>John Araya</strong>
            </div>

            <UIcon
              class="contact-card__arrow"
              name="i-lucide-arrow-up-right"
            />
          </a>

          <a
            href="https://github.com/JohnArayaE"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <div class="contact-card__icon">
              <UIcon name="i-simple-icons-github" />
            </div>

            <div class="contact-card__content">
              <span>GitHub</span>
              <strong>JohnArayaE</strong>
            </div>

            <UIcon
              class="contact-card__arrow"
              name="i-lucide-arrow-up-right"
            />
          </a>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 40px;
}

.contact__container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.contact__heading {
  margin-bottom: 70px;
}

.contact__title {
  margin: 0;
  font-size: clamp(3rem, 6vw, 4.8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--color-white);
}

.contact__title span {
  color: var(--color-primary);
}

.contact__line {
  width: 100%;
  height: 1px;
  margin-top: 28px;
  background:
    linear-gradient(
      90deg,
      var(--color-primary),
      rgba(124, 58, 237, 0.2),
      transparent
    );
}

.contact__content {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 100px;
  align-items: center;
}

/* LEFT */

.contact__main {
  max-width: 600px;
}

.contact__eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--color-primary-hover);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.contact__main h3 {
  margin: 0 0 24px;
  color: var(--color-white);
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.contact__main p {
  max-width: 560px;
  margin: 0 0 34px;
  color: var(--color-text-soft);
  font-size: 1.05rem;
  line-height: 1.8;
}

.contact__button {
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 12px;

  padding: 15px 22px;

  border-radius: 10px;

  background: var(--color-primary);
  color: var(--color-white);

  text-decoration: none;
  font-weight: 700;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.contact__button:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
}

.contact__button :deep(svg) {
  width: 18px;
  height: 18px;
}

/* RIGHT */

.contact__links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  min-height: 105px;

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 22px 26px;

  border: 1px solid var(--color-border);
  border-radius: 16px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.04),
      transparent
    ),
    var(--color-surface);

  text-decoration: none;

  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;
}

.contact-card:hover {
  border-color: rgba(124, 58, 237, 0.55);
  transform: translateY(-3px);

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.1),
      transparent
    ),
    var(--color-surface);
}

.contact-card__icon {
  width: 52px;
  height: 52px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(124, 58, 237, 0.25);
  border-radius: 12px;

  background: rgba(124, 58, 237, 0.08);
  color: var(--color-primary-hover);
}

.contact-card__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.contact-card__content {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 7px;
}

.contact-card__content span {
  color: var(--color-text-soft);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-card__content strong {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 700;
}

.contact-card__arrow {
  flex-shrink: 0;

  color: var(--color-text-soft);
  font-size: 20px;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.contact-card:hover .contact-card__arrow {
  color: var(--color-primary-hover);
  transform: translate(3px, -3px);
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .contact {
    min-height: auto;
    align-items: flex-start;
    padding: 90px 30px;
  }

  .contact__content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .contact__main {
    max-width: 700px;
  }
}

@media (max-width: 600px) {
  .contact {
    padding: 80px 20px;
  }

  .contact__heading {
    margin-bottom: 50px;
  }

  .contact-card {
    min-height: 95px;
    padding: 18px;
    gap: 15px;
  }

  .contact-card__icon {
    width: 46px;
    height: 46px;
  }

  .contact-card__content strong {
    font-size: 0.9rem;
    word-break: break-word;
  }

  .contact__button {
    width: 100%;
    justify-content: center;
  }
}
</style>