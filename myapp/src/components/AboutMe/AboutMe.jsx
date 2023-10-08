import photo from '../../images/photo.jpg'

export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__text">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__position">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове,
            закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке,
            начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <a
            href="https://github.com/AlloSpokoina"
            className="aboutme__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt={photo} className="aboutme__image" />
      </div>
    </section>
  )
}
