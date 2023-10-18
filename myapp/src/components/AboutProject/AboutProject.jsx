export default function AboutProject() {
  return (
    <section className="about" id="aboutproject">
      <h2 className="about__title">О проекте</h2>
      <div className="about__info">
        <div className="about__steps">
          <h3 className="about__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__steps">
          <h3 className="about__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__timeline">
        <div className="about__column-left">
          <p className="about__step">1 неделя</p>
          <p className="about__step-text">Back-end</p>
        </div>
        <div className="about__column-right">
          <p className="about__step">4 недели</p>
          <p className="about__step-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}
