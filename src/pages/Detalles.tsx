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

const headingStyle = "m-0 text-text font-serif font-bold text-[clamp(1.6rem,2.5vw,2.2rem)] mb-2 leading-tight";
const subHeadingStyle = "mt-6 text-text font-serif font-bold text-[1.15rem] tracking-wide uppercase";
const bodyStyle = "mt-2 font-serif text-[1.05rem] leading-[1.6] text-text/80";
const btn = "inline-flex items-center justify-center min-h-[3rem] px-6 py-3 bg-[#5d5957] text-white no-underline font-serif text-[0.98rem] font-bold hover:bg-[#474341] transition-colors tablet:w-full rounded-sm text-center";

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
      <section className="relative max-w-[1100px] mx-auto pt-20 pb-28 tablet:pt-16 tablet:pb-20 mobile:pt-12 mobile:pb-16 px-6 mobile:px-4">
        
        <div className="text-center mb-24 tablet:mb-16">
          <h1 className="m-0 text-text font-script font-normal text-[clamp(3.5rem,6vw,5.5rem)] leading-[1.1]">
            {t.detalles.titleDate}
          </h1>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[40px] tablet:left-[20px] top-[40px] bottom-[40px] w-[2px] bg-line-strong z-0"></div>

          <div className="flex flex-col gap-28 tablet:gap-20">
            
            {/* Ceremony Event */}
            <div className="relative pl-[100px] tablet:pl-[60px] mobile:pl-[50px]">
              {/* Timeline Dot */}
              <div className="absolute left-[31px] tablet:left-[11px] top-[40px] w-5 h-5 rounded-full bg-surface border-[4px] border-line-strong z-10 shadow-sm"></div>
              
              {/* Card Container (Photo Left, Data Right) */}
              <article className="reveal flex flex-row tablet:flex-col bg-surface rounded-[2rem] shadow-soft border border-line overflow-hidden">
                
                {/* Left Side: Photo */}
                <div className="w-1/2 tablet:w-full relative min-h-[450px] tablet:min-h-[350px] mobile:min-h-[280px]">
                  <img src={ceremoniaPhoto} alt={t.detalles.ceremonyPhotoAlt} className="absolute inset-0 w-full h-full object-cover" />
                </div>

                {/* Right Side: Data */}
                <div className="w-1/2 tablet:w-full p-12 tablet:p-10 mobile:p-7 flex flex-col justify-center bg-surface">
                  <div className="mb-4 text-line-strong text-2xl tracking-widest">♡♡</div>
                  <h2 className={headingStyle}>{t.detalles.ceremony}</h2>
                  <p className={bodyStyle}>{t.detalles.ceremonyTime}</p>
                  
                  <h3 className={subHeadingStyle}>{t.detalles.ceremonyPlace}</h3>
                  <p className={`${bodyStyle} italic`}>{t.detalles.ceremonyAddress}</p>
                  <p className={bodyStyle}>{t.detalles.dressCodeFormal}</p>

                  <div className="flex flex-col xl:flex-row gap-4 mt-8">
                    <a className={btn} href="https://maps.app.goo.gl/YuzAGxufDY8RTAY28" target="_blank" rel="noreferrer">
                      {t.detalles.map}
                    </a>
                    <a className={btn} href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ceremonia%20Gabriela%20y%20Diego&dates=20270211T193000Z/20270211T210000Z&details=Ceremonia%20de%20matrimonio&location=Calle%20Nueva%201970%2C%20San%20Pedro%20de%20la%20Paz%2C%20Biob%C3%ADo%2C%20Chile" target="_blank" rel="noreferrer">
                      {t.detalles.addToCalendar}
                    </a>
                  </div>

                  {/* Map */}
                  <div className="mt-8 rounded-xl overflow-hidden border border-line h-48 w-full shadow-sm">
                    <iframe
                      title={t.detalles.churchMapTitle}
                      src="https://www.google.com/maps?q=Primera%20Iglesia%20Bautista%20San%20Pedro%20de%20la%20Paz%2C%20Calle%20Nueva%201970%2C%20San%20Pedro%20de%20la%20Paz%2C%20Biob%C3%ADo&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>

              </article>
            </div>

            {/* Celebration Event */}
            <div className="relative pl-[100px] tablet:pl-[60px] mobile:pl-[50px]">
              {/* Timeline Dot */}
              <div className="absolute left-[31px] tablet:left-[11px] top-[40px] w-5 h-5 rounded-full bg-surface border-[4px] border-line-strong z-10 shadow-sm"></div>
              
              {/* Card Container (Zig-Zag: Data Left, Photo Right on Desktop) */}
              <article className="reveal flex flex-row-reverse tablet:flex-col bg-surface rounded-[2rem] shadow-soft border border-line overflow-hidden">
                
                {/* Right Side: Photo Carousel */}
                <div className="w-1/2 tablet:w-full relative min-h-[450px] tablet:min-h-[350px] mobile:min-h-[280px]" aria-label={t.detalles.celebrationCarouselAria}>
                  <div
                    className="flex w-full h-full transition-transform duration-[500ms] ease-in-out absolute inset-0"
                    style={{ transform: `translateX(-${celebrationIndex * 100}%)` }}
                  >
                    {celebrationPhotos.map((photo, index) => (
                      <div className="flex-[0_0_100%] w-full h-full relative" key={photo}>
                        <img
                          src={photo}
                          alt={`${t.detalles.celebrationPhotoAlt} ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
                  <button
                    className="absolute top-1/2 left-4 z-[2] w-11 h-11 border-0 rounded-full bg-text/50 text-white text-2xl flex items-center justify-center cursor-pointer -translate-y-1/2 hover:bg-text/80 transition-colors backdrop-blur-sm"
                    type="button"
                    aria-label={t.detalles.prevPhoto}
                    onClick={previousCelebrationPhoto}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute top-1/2 right-4 z-[2] w-11 h-11 border-0 rounded-full bg-text/50 text-white text-2xl flex items-center justify-center cursor-pointer -translate-y-1/2 hover:bg-text/80 transition-colors backdrop-blur-sm"
                    type="button"
                    aria-label={t.detalles.nextPhoto}
                    onClick={nextCelebrationPhoto}
                  >
                    ›
                  </button>

                  {/* Carousel Indicators */}
                  <div
                    className="absolute left-1/2 bottom-4 z-[2] flex gap-2 -translate-x-1/2"
                    aria-label={t.detalles.dotsAria}
                  >
                    {celebrationPhotos.map((_, index) => (
                      <button
                        key={`dot-${index}`}
                        type="button"
                        className={`w-2.5 h-2.5 p-0 border-0 rounded-full cursor-pointer transition-all ${
                          index === celebrationIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`${t.detalles.goToPhoto} ${index + 1}`}
                        onClick={() => setCelebrationIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Left Side: Data */}
                <div className="w-1/2 tablet:w-full p-12 tablet:p-10 mobile:p-7 flex flex-col justify-center bg-surface">
                  <div className="mb-4 text-line-strong text-2xl tracking-widest">♡♡</div>
                  <h2 className={headingStyle}>{t.detalles.celebration}</h2>
                  <p className={bodyStyle}>{t.detalles.celebrationTime}</p>
                  
                  <h3 className={subHeadingStyle}>{t.detalles.celebrationPlace}</h3>
                  <p className={`${bodyStyle} italic`}>{t.detalles.celebrationAddress}</p>
                  <p className={bodyStyle}>{t.detalles.celebrationDressCode}</p>
                  <p className={bodyStyle}>{t.detalles.celebrationDesc}</p>

                  <div className="flex flex-col xl:flex-row gap-4 mt-8">
                    <a className={btn} href="https://www.google.com/maps/search/?api=1&query=Pura+Lodge+Callej%C3%B3n+Lagunillas+5385+San+Pedro+de+la+Paz+Chile" target="_blank" rel="noreferrer">
                      {t.detalles.map}
                    </a>
                    <a className={btn} href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Celebraci%C3%B3n%20Gabriela%20y%20Diego&dates=20270211T220000Z/20270212T070000Z&details=Celebraci%C3%B3n%20y%20fiesta&location=Pura%20Lodge%2C%20Callej%C3%B3n%20Lagunillas%205385%2C%20San%20Pedro%20de%20la%20Paz%2C%20Chile" target="_blank" rel="noreferrer">
                      {t.detalles.addToCalendar}
                    </a>
                  </div>

                  {/* Map */}
                  <div className="mt-8 rounded-xl overflow-hidden border border-line h-48 w-full shadow-sm">
                    <iframe
                      title={t.detalles.lodgeMapTitle}
                      src="https://www.google.com/maps?q=Pura%20Lodge%2C%20Callej%C3%B3n%20Lagunillas%205385%2C%20Laguna%20Grande%2C%20San%20Pedro%20de%20la%20Paz%2C%20Chile&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>

              </article>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
