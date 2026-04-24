import { useState } from "react";
import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import ceremoniaPhoto from "../ceremonia.jpg";
import celebracionPhoto1 from "../celebracion.jpeg";
import celebracionPhoto2 from "../celebracion2.jpeg";
import celebracionPhoto3 from "../celebracion3.jpeg";
import celebracionPhoto4 from "../celebracion4.jpeg";

const celebrationPhotos = [
  celebracionPhoto1,
  celebracionPhoto2,
  celebracionPhoto3,
  celebracionPhoto4,
];

export default function Detalles() {
  useReveal();
  const [celebrationIndex, setCelebrationIndex] = useState(0);

  const previousCelebrationPhoto = () => {
    setCelebrationIndex((current) =>
      current === 0 ? celebrationPhotos.length - 1 : current - 1
    );
  };

  const nextCelebrationPhoto = () => {
    setCelebrationIndex((current) =>
      current === celebrationPhotos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <Layout page="detalles" title="Detalles | Gabriela & Diego">
      <section className="schedule-page reveal">
        <div className="schedule-heading">
          <h1>Jueves, 11 de Febrero, 2027</h1>
        </div>

        <div className="schedule-list">
          <article className="schedule-item reveal">
            <div className="schedule-left schedule-left-top">
              <div className="schedule-icon">♡♡</div>
              <h2>Ceremonia</h2>
              <p>4:30 pm - 6:00 pm</p>
            </div>

            <div className="schedule-right schedule-right-top">
              <h3>Iglesia Evangélica Bautista de San Pedro</h3>
              <p className="schedule-address">San Pedro de la Paz, Bío Bío, Chile</p>
              <p>Código de vestimenta Formal/Etiqueta opcional</p>

              <div className="schedule-actions">
                <a
                  className="schedule-button"
                  href="https://maps.app.goo.gl/YuzAGxufDY8RTAY28"
                  target="_blank"
                  rel="noreferrer"
                >
                  Map
                </a>
                <a
                  className="schedule-button schedule-button-secondary"
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ceremonia%20Gabriela%20y%20Diego&dates=20270211T193000Z/20270211T210000Z&details=Ceremonia%20de%20matrimonio&location=Calle%20Nueva%201970%2C%20San%20Pedro%20de%20la%20Paz%2C%20Biob%C3%ADo%2C%20Chile"
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to calendar
                </a>
              </div>
            </div>

            <figure className="schedule-photo schedule-photo-left">
              <img src={ceremoniaPhoto} alt="Ceremonia" />
            </figure>

            <div className="schedule-map schedule-map-right">
              <iframe
                title="Mapa de la iglesia"
                src="https://www.google.com/maps?q=Primera%20Iglesia%20Bautista%20San%20Pedro%20de%20la%20Paz%2C%20Calle%20Nueva%201970%2C%20San%20Pedro%20de%20la%20Paz%2C%20Biob%C3%ADo&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          <article className="schedule-item reveal">
            <div className="schedule-left schedule-left-top">
              <div className="schedule-icon">♡♡</div>
              <h2>Celebración</h2>
              <p>Thu, Feb 11, 2027, 6:00 pm - Fri, Feb 12, 2027, 4:00 am</p>
            </div>

            <div className="schedule-right schedule-right-top">
              <h3>Centro de eventos PuraLodge</h3>
              <p className="schedule-address">
                Lagunillas Callejón, 5385, Biobío, Bío Bío, Chile
              </p>
              <p>Código de Vestimenta Formal/etiqueta opcional</p>
              <p>
                Nuestra celebración contará con un cóctel extendido, seguido de una fiesta
                inolvidable
              </p>

              <div className="schedule-actions">
                <a
                  className="schedule-button"
                  href="https://www.google.com/maps/search/?api=1&query=Pura+Lodge+Callej%C3%B3n+Lagunillas+5385+San+Pedro+de+la+Paz+Chile"
                  target="_blank"
                  rel="noreferrer"
                >
                  Map
                </a>
                <a
                  className="schedule-button schedule-button-secondary"
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Celebraci%C3%B3n%20Gabriela%20y%20Diego&dates=20270211T220000Z/20270212T070000Z&details=Celebraci%C3%B3n%20y%20fiesta&location=Pura%20Lodge%2C%20Callej%C3%B3n%20Lagunillas%205385%2C%20San%20Pedro%20de%20la%20Paz%2C%20Chile"
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to calendar
                </a>
              </div>
            </div>

            <div className="schedule-photo schedule-photo-left schedule-carousel" aria-label="Fotos de celebración">
              <div
                className="schedule-carousel-track"
                style={{ transform: `translateX(-${celebrationIndex * 100}%)` }}
              >
                {celebrationPhotos.map((photo, index) => (
                  <div className="schedule-carousel-slide" key={photo}>
                    <img src={photo} alt={`Celebración ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className="schedule-carousel-button schedule-carousel-button-prev"
                type="button"
                aria-label="Foto anterior"
                onClick={previousCelebrationPhoto}
              >
                ‹
              </button>
              <button
                className="schedule-carousel-button schedule-carousel-button-next"
                type="button"
                aria-label="Foto siguiente"
                onClick={nextCelebrationPhoto}
              >
                ›
              </button>

              <div className="schedule-carousel-dots" aria-label="Indicadores de foto">
                {celebrationPhotos.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    className={`schedule-carousel-dot${
                      index === celebrationIndex ? " is-active" : ""
                    }`}
                    aria-label={`Ir a foto ${index + 1}`}
                    onClick={() => setCelebrationIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="schedule-map schedule-map-right">
              <iframe
                title="Mapa de Pura Lodge"
                src="https://www.google.com/maps?q=Pura%20Lodge%2C%20Callej%C3%B3n%20Lagunillas%205385%2C%20Laguna%20Grande%2C%20San%20Pedro%20de%20la%20Paz%2C%20Chile&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
