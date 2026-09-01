<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">

        <div class="footer__brand">
          <a href="#inicio" class="footer__name">
            John <span>Araya</span>
          </a>

          <p>
            Desarrollador de software enfocado en crear soluciones web
            completas, funcionales y bien estructuradas.
          </p>
        </div>

        <div class="footer__navigation">
          <span class="footer__label">Navegación</span>

          <nav class="footer__links">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div class="footer__social">
          <span class="footer__label">Conecta conmigo</span>

          <div class="footer__social-links">
            <a
              href="https://github.com/JohnArayaE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <UIcon name="i-simple-icons-github" />
            </a>

            <a
              href="https://www.linkedin.com/in/johnaraya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <UIcon name="i-simple-icons-linkedin" />
            </a>

            <a
              href="mailto:johnae1205@gmail.com"
              aria-label="Email"
            >
              <UIcon name="i-lucide-mail" />
            </a>
          </div>
        </div>

      </div>

      <div class="footer__divider"></div>

      <div class="footer__bottom">
        <p>
          © {{ currentYear }} John Araya. Todos los derechos reservados.
        </p>

        <a href="#inicio" class="footer__back">
          <span>Volver arriba</span>
          <UIcon name="i-lucide-arrow-up" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 70px 40px 30px;
  border-top: 1px solid var(--color-border);
  background: #0a0a0c;
}

.footer__container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 0.8fr;
  gap: 80px;
}

.footer__brand {
  max-width: 500px;
}

.footer__name {
  display: inline-block;

  margin-bottom: 18px;

  color: var(--color-white);

  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;

  text-decoration: none;
}

.footer__name span {
  color: var(--color-primary);
}

.footer__brand p {
  margin: 0;

  color: var(--color-text-soft);

  font-size: 0.95rem;
  line-height: 1.7;
}

.footer__label {
  display: block;

  margin-bottom: 20px;

  color: var(--color-white);

  font-size: 0.8rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__links a {
  width: fit-content;

  color: var(--color-text-soft);

  text-decoration: none;

  font-size: 0.95rem;

  transition: color 0.2s ease;
}

.footer__links a:hover {
  color: var(--color-white);
}

.footer__social-links {
  display: flex;
  gap: 12px;
}

.footer__social-links a {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);
  border-radius: 10px;

  background: var(--color-surface);
  color: var(--color-text-soft);

  text-decoration: none;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;
}

.footer__social-links a:hover {
  color: var(--color-white);
  border-color: rgba(124, 58, 237, 0.55);

  background: rgba(124, 58, 237, 0.1);

  transform: translateY(-3px);
}

.footer__social-links :deep(svg) {
  width: 19px;
  height: 19px;
}

.footer__divider {
  width: 100%;
  height: 1px;

  margin: 55px 0 25px;

  background: var(--color-border);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.footer__bottom p {
  margin: 0;

  color: var(--color-text-soft);

  font-size: 0.85rem;
}

.footer__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: var(--color-text-soft);

  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;

  transition: color 0.2s ease;
}

.footer__back:hover {
  color: var(--color-white);
}

.footer__back :deep(svg) {
  width: 16px;
  height: 16px;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .footer {
    padding: 60px 30px 30px;
  }

  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 55px 20px 25px;
  }

  .footer__top {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer__brand {
    grid-column: auto;
  }

  .footer__divider {
    margin: 45px 0 22px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
}
</style>