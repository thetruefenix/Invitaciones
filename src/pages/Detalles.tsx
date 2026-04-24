import { useState } from "react";
import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LanguageContext";
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

const itemGrid =
  "grid grid-cols-2 gap-10 items-start [grid-template-areas:'left_right''photo_map'] tablet:grid-cols-1 tablet:gap-0 tablet:[grid-template-areas:'left''right''photo''map']";
const leftCol =
  "[grid-area:left] text-center px-4 py-8 tablet:px-2 tablet:py-5";
const rightCol =
  "[grid-area:right] px-4 py-8 pl-12 border-l border-[#8a8178] tablet:px-2 tablet:py-5 tablet:pl-2 tablet:pt-6 tablet:border-l-0 tablet:border-t";
const photoCol =
  "[grid-area:photo] m-0 overflow-hidden aspect-[5/4] tablet:mt-4";
const mapCol =
  "[grid-area:map] overflow-hidden border border-line bg-[#f3efe9] aspect-[5/4] shadow-soft pl-12 border-l border-[#8a8178] tablet:pl-0 tablet:mt-4 tablet:border-l-0";
const headingLeft =
  "m-0 text-[#3f3a35] font-serif font-bold text-[clamp(1.6rem,2.5vw,2.6rem)] mb-4";
const headingRight =
  "m-0 text-[#3f3a35] font-serif font-bold text-[clamp(1.1rem,1.8vw,1.45rem)] leading-[1.5]";
const bodyP = "mt-[0.8rem] font-serif text-base leading-[1.55]";
const btn =
  "inline-flex items-center justify-center min-h-10 px-5 py-[0.85rem] bg-[#5d5957] text-white no-underline font-serif text-[0.98rem] font-bold hover:bg-[#474341] tablet:w-full";

export default function Detalles() {
  useReveal();
  const { t } = useLang();
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
    <Layout page="detalles" title={t.titles.detalles}>
      <section className="reveal max-w-[980px] mx-auto pt-16 pb-20 tablet:pt-12 tablet:pb-12 mobile:pt-8 mobile:pb-10">
        <div className="text-center mb-10 tablet:mb-6">
          <h1 className="m-0 text-[#3f3a35] font-script font-normal text-[clamp(2.6rem,5vw,4.8rem)] leading-[1.2]">
            {t.detalles.titleDate}
          </h1>
        </div>

        <div className="grid gap-12 mobile:gap-8">
          <article className={`reveal ${itemGrid}`}>
            <div className={leftCol}>
              <div className="mb-5 text-[#73685e] text-2xl tracking-[-0.14em]">
                ♡♡
              </div>
              <h2 className={headingLeft}>{t.detalles.ceremony}</h2>
              <p className={bodyP}>{t.detalles.ceremonyTime}</p>
            </div>

            <div className={rightCol}>
              <h3 className={headingRight}>{t.detalles.ceremonyPlace}</h3>
              <p className={`${bodyP} italic underline`}>
                {t.detalles.ceremonyAddress}
              </p>
              <p className={bodyP}>{t.detalles.dressCodeFormal}</p>

              <div className="flex flex-col gap-[0.65rem] w-[min(100%,190px)] mx-auto mt-6 tablet:w-full tablet:mt-[1.2rem]">
                <a
                  className={btn}
                  href="https://maps.app.goo.gl/YuzAGxufDY8RTAY28"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.detalles.map}
                </a>
                <a
                  className={btn}
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ceremonia%20Gabriela%20y%20Diego&dates=20270211T193000Z/20270211T210000Z&details=Ceremonia%20de%20matrimonio&location=Calle%20Nueva%201970%2C%20San%20Pedro%20de%20la%20Paz%2C%20Biob%C3%ADo%2C%20Chile"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.detalles.addToCalendar}
                </a>
              </div>
            </div>

            <figure className={photoCol}>
              <img
                src={ceremoniaPhoto}
                alt={t.detalles.ceremonyPhotoAlt}
                className="w-full h-full object-cover object-center"
              />
            </figure>

            <div className={mapCol}>
              <iframe
                title={t.detalles.churchMapTitle}
                src="https://www.google.com/maps?q=Primera%20Iglesia%20Bautista%20San%20Pedro%20de%20la%20Paz%2C%20Calle%20Nueva%201970%2C%20San%20Pedro%20de%20la%20Paz%2C%20Biob%C3%ADo&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </article>

          <article className={`reveal ${itemGrid}`}>
            <div className={leftCol}>
              <div className="mb-5 text-[#73685e] text-2xl tracking-[-0.14em]">
                ♡♡
              </div>
              <h2 className={headingLeft}>{t.detalles.celebration}</h2>
              <p className={bodyP}>{t.detalles.celebrationTime}</p>
            </div>

            <div className={rightCol}>
              <h3 className={headingRight}>{t.detalles.celebrationPlace}</h3>
              <p className={`${bodyP} italic underline`}>
                {t.detalles.celebrationAddress}
              </p>
              <p className={bodyP}>{t.detalles.celebrationDressCode}</p>
              <p className={bodyP}>{t.detalles.celebrationDesc}</p>

              <div className="flex flex-col gap-[0.65rem] w-[min(100%,190px)] mx-auto mt-6 tablet:w-full tablet:mt-[1.2rem]">
                <a
                  className={btn}
                  href="https://www.google.com/maps/search/?api=1&query=Pura+Lodge+Callej%C3%B3n+Lagunillas+5385+San+Pedro+de+la+Paz+Chile"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.detalles.map}
                </a>
                <a
                  className={btn}
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Celebraci%C3%B3n%20Gabriela%20y%20Diego&dates=20270211T220000Z/20270212T070000Z&details=Celebraci%C3%B3n%20y%20fiesta&location=Pura%20Lodge%2C%20Callej%C3%B3n%20Lagunillas%205385%2C%20San%20Pedro%20de%20la%20Paz%2C%20Chile"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.detalles.addToCalendar}
                </a>
              </div>
            </div>

            <div
              className={`${photoCol} relative`}
              aria-label={t.detalles.celebrationCarouselAria}
            >
              <div
                className="flex w-full h-full transition-transform duration-[420ms] ease-[ease]"
                style={{ transform: `translateX(-${celebrationIndex * 100}%)` }}
              >
                {celebrationPhotos.map((photo, index) => (
                  <div className="flex-[0_0_100%] w-full h-full" key={photo}>
                    <img
                      src={photo}
                      alt={`${t.detalles.celebrationPhotoAlt} ${index + 1}`}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-[0.85rem] z-[2] w-10 h-10 border-0 rounded-full bg-[rgba(78,78,78,0.72)] text-white text-2xl leading-none cursor-pointer -translate-y-1/2 hover:bg-[rgba(62,62,62,0.9)] tablet:w-[2.2rem] tablet:h-[2.2rem] tablet:text-[1.35rem]"
                type="button"
                aria-label={t.detalles.prevPhoto}
                onClick={previousCelebrationPhoto}
              >
                ‹
              </button>
              <button
                className="absolute top-1/2 right-[0.85rem] z-[2] w-10 h-10 border-0 rounded-full bg-[rgba(78,78,78,0.72)] text-white text-2xl leading-none cursor-pointer -translate-y-1/2 hover:bg-[rgba(62,62,62,0.9)] tablet:w-[2.2rem] tablet:h-[2.2rem] tablet:text-[1.35rem]"
                type="button"
                aria-label={t.detalles.nextPhoto}
                onClick={nextCelebrationPhoto}
              >
                ›
              </button>

              <div
                className="absolute left-1/2 bottom-[0.9rem] z-[2] flex gap-[0.45rem] -translate-x-1/2"
                aria-label={t.detalles.dotsAria}
              >
                {celebrationPhotos.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    className={`w-[0.7rem] h-[0.7rem] p-0 border-0 rounded-full cursor-pointer ${
                      index === celebrationIndex
                        ? "bg-white"
                        : "bg-white/55"
                    }`}
                    aria-label={`${t.detalles.goToPhoto} ${index + 1}`}
                    onClick={() => setCelebrationIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className={mapCol}>
              <iframe
                title={t.detalles.lodgeMapTitle}
                src="https://www.google.com/maps?q=Pura%20Lodge%2C%20Callej%C3%B3n%20Lagunillas%205385%2C%20Laguna%20Grande%2C%20San%20Pedro%20de%20la%20Paz%2C%20Chile&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
