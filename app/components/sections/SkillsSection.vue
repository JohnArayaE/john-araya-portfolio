<template>
  <section id="habilidades" class="skills">
    <div class="skills__container">
      <!-- ENCABEZADO -->
      <div class="skills__heading">
        <h2 class="skills__title">
          HABILIDADES
        </h2>

        <div class="skills__line"></div>

        <p class="skills__intro">
          Capacidades profesionales y técnicas que aplico durante el desarrollo
          de proyectos y el trabajo en equipo.
        </p>
      </div>

      <!-- CONTENIDO -->
      <div class="skills__grid">
        <!-- HABILIDADES BLANDAS -->
        <article class="skills-card">
          <div class="skills-card__header">
            <div class="skills-card__icon">
              <UIcon name="i-lucide-users" />
            </div>

            <div>

              <h3>
                Habilidades blandas
              </h3>
            </div>
          </div>

          <div class="skills-card__content skills-card__content--soft">
            <div class="skill-item">
              <UIcon name="i-lucide-users-round" />

              <div>
                <h4>Trabajo en equipo</h4>
                <p>
                  Colaboración efectiva para alcanzar objetivos comunes.
                </p>
              </div>
            </div>

            <div class="skill-item">
              <UIcon name="i-lucide-crown" />

              <div>
                <h4>Liderazgo</h4>
                <p>
                  Capacidad para coordinar, orientar y apoyar al equipo.
                </p>
              </div>
            </div>

            <div class="skill-item">
              <UIcon name="i-lucide-refresh-cw" />

              <div>
                <h4>Adaptabilidad</h4>
                <p>
                  Facilidad para afrontar nuevos retos y formas de trabajo.
                </p>
              </div>
            </div>

            <div class="skill-item">
              <UIcon name="i-lucide-target" />

              <div>
                <h4>Disciplina</h4>
                <p>
                  Constancia, organización y compromiso con los objetivos.
                </p>
              </div>
            </div>

            <div class="skill-item skill-item--wide">
              <UIcon name="i-lucide-handshake" />

              <div>
                <h4>Excelentes relaciones interpersonales</h4>
                <p>
                  Comunicación y colaboración efectiva dentro de diferentes
                  equipos de trabajo.
                </p>
              </div>
            </div>
          </div>
        </article>

        <!-- HABILIDADES TÉCNICAS -->
        <article class="skills-card skills-card--technical">
          <div class="skills-card__header">
            <div class="skills-card__icon">
              <UIcon name="i-lucide-code-2" />
            </div>

            <div>
              <h3>
                Habilidades técnicas
              </h3>
            </div>
          </div>

          <div class="technical-list">
            <div class="technical-item">
              <UIcon name="i-lucide-layers-3" />
              <span>Desarrollo Full Stack</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-braces" />
              <span>Desarrollo de APIs REST</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-database" />
              <span>Diseño y gestión de bases de datos</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-terminal-square" />
              <span>SQL y consultas de datos</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-unplug" />
              <span>Integración de servicios</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-git-branch" />
              <span>Control de versiones</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-box" />
              <span>Containerización</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-cloud" />
              <span>Cloud Computing</span>
            </div>

            <div class="technical-item">
              <UIcon name="i-lucide-monitor-smartphone" />
              <span>Diseño responsivo</span>
            </div>
          </div>
        </article>

        <!-- IDIOMAS -->
        <article class="skills-card skills-card--languages">
          <div class="skills-card__header">
            <div class="skills-card__icon">
              <UIcon name="i-lucide-languages" />
            </div>

            <div>
              <h3>
                Idiomas
              </h3>
            </div>
          </div>

          <div class="languages">
            <!-- ESPAÑOL -->
            <div class="language">
              <div class="language__top">
                <div>
                  <span class="language__label">
                    Idioma
                  </span>

                  <h4>
                    Español
                  </h4>
                </div>

                <span class="language__level">
                  Nativo
                </span>
              </div>

              <div class="language__bar">
                <span class="language__progress language__progress--native"></span>
              </div>

              <p>
                Dominio nativo para comunicación profesional y cotidiana.
              </p>
            </div>

            <!-- INGLÉS -->
            <div class="language">
              <div class="language__top">
                <div>
                  <span class="language__label">
                    Idioma
                  </span>

                  <h4>
                    Inglés
                  </h4>
                </div>

                <span class="language__level">
                  B1 · Intermedio
                </span>
              </div>

              <div class="language__bar">
                <span class="language__progress language__progress--b1"></span>
              </div>

              <p>
                Nivel intermedio para lectura, comunicación y comprensión de
                documentación técnica.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  min-height: 100vh;
  display: flex;
  align-items: center;

  padding: 100px 0;

  background:
    radial-gradient(
      circle at 85% 25%,
      rgba(124, 58, 237, 0.08),
      transparent 28%
    ),
    #101012;
}

.skills__container {
  width: min(100% - 40px, 1400px);
  margin: 0 auto;
}

/* =====================================================
   ENCABEZADO
===================================================== */

.skills__heading {
  max-width: 750px;
  margin-bottom: 52px;
}

.skills__title {
  margin: 0;

  font-size: clamp(3rem, 5vw, 4.8rem);
  line-height: 1;

  font-weight: 800;
  letter-spacing: -0.045em;

  color: var(--color-white);
}

.skills__line {
  width: 90px;
  height: 2px;

  margin-top: 22px;

  background: linear-gradient(
    90deg,
    var(--color-primary),
    transparent
  );
}

.skills__intro {
  max-width: 680px;

  margin-top: 24px;

  font-size: 1.02rem;
  line-height: 1.75;

  color: var(--color-text-soft);
}

/* =====================================================
   GRID PRINCIPAL
===================================================== */

.skills__grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(0, 1.15fr)
    minmax(300px, 0.8fr);

  gap: 18px;

  align-items: stretch;
}

/* =====================================================
   TARJETAS
===================================================== */

.skills-card {
  min-height: 560px;

  padding: 28px;

  border: 1px solid var(--color-border);
  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(124, 58, 237, 0.03),
      rgba(255, 255, 255, 0.01)
    ),
    rgba(18, 18, 21, 0.9);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.skills-card:hover {
  transform: translateY(-4px);

  border-color: rgba(124, 58, 237, 0.45);

  box-shadow:
    0 18px 40px rgba(76, 29, 149, 0.1);
}

.skills-card__header {
  display: flex;
  align-items: center;
  gap: 16px;

  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid var(--color-border);
}

.skills-card__icon {
  width: 50px;
  height: 50px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 13px;

  background-color: rgba(124, 58, 237, 0.08);

  color: var(--color-primary);
}

.skills-card__icon :deep(svg) {
  width: 23px;
  height: 23px;
}

.skills-card__eyebrow {
  display: block;

  margin-bottom: 4px;

  font-size: 0.68rem;
  font-weight: 750;

  color: var(--color-primary);

  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.skills-card__header h3 {
  margin: 0;

  font-size: 1.15rem;
  font-weight: 700;

  color: var(--color-white);
}

/* =====================================================
   HABILIDADES BLANDAS
===================================================== */

.skills-card__content--soft {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;
}

.skill-item {
  padding: 17px;

  display: flex;
  align-items: flex-start;
  gap: 12px;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;

  background-color: rgba(255, 255, 255, 0.015);

  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease;
}

.skill-item:hover {
  transform: translateY(-2px);

  border-color: rgba(124, 58, 237, 0.35);

  background-color: rgba(124, 58, 237, 0.06);
}

.skill-item--wide {
  grid-column: 1 / -1;
}

.skill-item > :deep(svg) {
  width: 19px;
  height: 19px;

  flex-shrink: 0;

  margin-top: 2px;

  color: var(--color-primary);
}

.skill-item h4 {
  margin: 0;

  font-size: 0.91rem;
  line-height: 1.4;

  font-weight: 650;

  color: var(--color-white);
}

.skill-item p {
  margin-top: 5px;

  font-size: 0.76rem;
  line-height: 1.55;

  color: var(--color-text-soft);
}

/* =====================================================
   HABILIDADES TÉCNICAS
===================================================== */

.technical-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 12px;
}

.technical-item {
  min-height: 58px;

  display: flex;
  align-items: center;

  gap: 11px;

  padding: 13px 14px;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 11px;

  background-color: rgba(255, 255, 255, 0.014);

  color: var(--color-text);

  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease,
    color 0.22s ease;
}

.technical-item:hover {
  transform: translateY(-2px);

  border-color: rgba(124, 58, 237, 0.4);

  background-color: rgba(124, 58, 237, 0.07);

  color: var(--color-white);
}

.technical-item :deep(svg) {
  width: 18px;
  height: 18px;

  flex-shrink: 0;

  color: var(--color-primary);
}

.technical-item span {
  font-size: 0.8rem;
  line-height: 1.4;

  font-weight: 550;
}

/* =====================================================
   IDIOMAS
===================================================== */

.languages {
  display: flex;
  flex-direction: column;

  gap: 20px;
}

.language {
  padding: 21px;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;

  background-color: rgba(255, 255, 255, 0.015);

  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease;
}

.language:hover {
  transform: translateY(-2px);

  border-color: rgba(124, 58, 237, 0.4);

  background-color: rgba(124, 58, 237, 0.06);
}

.language__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 14px;
}

.language__label {
  display: block;

  margin-bottom: 4px;

  font-size: 0.65rem;
  font-weight: 700;

  color: var(--color-text-soft);

  text-transform: uppercase;
  letter-spacing: 0.09em;
}

.language h4 {
  margin: 0;

  font-size: 1.05rem;
  font-weight: 700;

  color: var(--color-white);
}

.language__level {
  flex-shrink: 0;

  padding: 6px 9px;

  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 7px;

  background-color: rgba(124, 58, 237, 0.08);

  font-size: 0.68rem;
  font-weight: 650;

  color: var(--color-primary);
}

.language__bar {
  width: 100%;
  height: 5px;

  margin: 18px 0;

  overflow: hidden;

  border-radius: 20px;

  background-color: rgba(255, 255, 255, 0.06);
}

.language__progress {
  display: block;

  height: 100%;

  border-radius: 20px;

  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-primary-hover)
  );
}

.language__progress--native {
  width: 100%;
}

.language__progress--b1 {
  width: 55%;
}

.language p {
  font-size: 0.77rem;
  line-height: 1.6;

  color: var(--color-text-soft);
}

/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1150px) {
  .skills {
    min-height: auto;
  }

  .skills__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skills-card--languages {
    grid-column: 1 / -1;
    min-height: auto;
  }

  .languages {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }

  .skills-card,
  .skills-card--languages {
    grid-column: auto;
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .skills {
    padding: 80px 0;
  }

  .skills__container {
    width: min(100% - 24px, 1400px);
  }

  .skills__heading {
    margin-bottom: 40px;
  }

  .skills__title {
    font-size: clamp(2.8rem, 14vw, 4rem);
  }

  .skills-card {
    padding: 22px;
  }

  .skills-card__content--soft,
  .technical-list,
  .languages {
    grid-template-columns: 1fr;
  }

  .skill-item--wide {
    grid-column: auto;
  }

  .language__top {
    flex-direction: column;
  }
}
</style>