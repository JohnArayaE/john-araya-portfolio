<template>
  <section id="sobre-mi" class="about">
    <div class="about__container">
      <!-- COLUMNA IZQUIERDA -->
      <div class="about__content">
        <div class="about__heading">
          <h2 class="about__title">
            SOBRE <span>MÍ</span>
          </h2>

          <div class="about__line"></div>
        </div>

        <p class="about__intro">
          Me interesa entender una aplicación de
          <strong>principio a fin</strong>, no solamente una parte de ella.
        </p>

        <div class="about__text">
          <p>
            Soy estudiante de <strong>Ingeniería de Software</strong> y
            desarrollador enfocado en construir soluciones web completas.
            Me interesa comprender todo el proceso detrás de una aplicación,
            desde la interfaz y la experiencia del usuario hasta el backend,
            las bases de datos y su despliegue.
          </p>

          <p>
            Disfruto crear <strong>productos digitales</strong> que sean
            funcionales, organizados y pensados para resolver necesidades
            reales. También me motiva aprender nuevas tecnologías,
            enfrentar desafíos y mejorar continuamente mis habilidades.
          </p>

          <p>
            Mi objetivo es desarrollarme como
            <strong>Full Stack Developer</strong>, mientras continúo
            profundizando en áreas que me interesan especialmente, como
            <strong>Cloud Computing</strong>, desarrollo backend y arquitectura
            de aplicaciones.
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
            Formación
          </span>

          <h3>
            Diplomado Universitario
          </h3>

          <div class="about-card__line"></div>

          <p>
            Diplomado en Tecnologías Informáticas, donde fortalecí mis bases
            en desarrollo de software, bases de datos y tecnologías aplicadas.
          </p>
        </article>

        <!-- ACTUALMENTE -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-book-open" />
          </div>

          <span class="about-card__label">
            Actualmente
          </span>

          <h3>
            Ingeniería de Software
          </h3>

          <div class="about-card__line"></div>

          <p>
            Continúo mis estudios universitarios para obtener el Bachillerato
            en Ingeniería de Software y seguir ampliando mis conocimientos.
          </p>
        </article>

        <!-- ENFOQUE -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-layers-3" />
          </div>

          <span class="about-card__label">
            Enfoque
          </span>

          <h3>
            Full Stack Development
          </h3>

          <div class="about-card__line"></div>

          <p>
            Me enfoco en construir soluciones completas, abarcando frontend,
            backend, bases de datos e integración entre diferentes servicios.
          </p>
        </article>

        <!-- INTERÉS -->
        <article class="about-card">
          <div class="about-card__icon">
            <UIcon name="i-lucide-cloud" />
          </div>

          <span class="about-card__label">
            Interés principal
          </span>

          <h3>
            Cloud Computing
          </h3>

          <div class="about-card__line"></div>

          <p>
            Me interesa la infraestructura en la nube, el despliegue de
            aplicaciones, los servicios cloud y la arquitectura de soluciones
            modernas.
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