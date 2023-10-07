export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about_project__info">
        <div className="about-project__steps">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__steps">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__column-left">
          <p className="about-project__step">1 неделя</p>
          <p className="about-project__step-text">Back-end</p>
        </div>
        <div className="about-project__column-right">
          <p className="about-project__step">4 недели</p>
          <p className="about-project__step-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}
