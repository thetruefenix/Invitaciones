import { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import useCountdown from "../hooks/useCountdown";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LanguageContext";
import foto1 from "../assets/carrucel/foto-1.jpeg";
import foto2 from "../assets/carrucel/foto-2.jpeg";
import foto3 from "../assets/carrucel/foto-3.jpeg";
import foto4 from "../assets/carrucel/foto-4.jpeg";

const WEDDING_DATE = new Date("2027-02-11T16:30:00-03:00");

const tiles = [foto1, foto2, foto3, foto4, foto1, foto2, foto3, foto4];
const ghostTiles = [foto1, foto2, foto3, foto4, foto1, foto2, foto3, foto4];
const infoLineClass =
  "m-0 max-w-full font-serif text-[clamp(0.78rem,1.35vw,0.98rem)] font-bold tracking-[0.06em] normal-case leading-[1.3] text-text whitespace-nowrap tablet:text-[clamp(0.82rem,3.4vw,1.18rem)] mobile:text-[clamp(0.62rem,2.75vw,0.78rem)]";
const easeInOutCubic = (progress: number) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  useReveal();
  const { t } = useLang();
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let cancelled = false;
    const cancelAutoAdvance = () => {
      cancelled = true;
    };
    let animationFrame = 0;
    const timer = window.setTimeout(() => {
      if (cancelled || window.scrollY > 80) return;
      const target = summaryRef.current;
      if (!target) return;

      const startY = window.scrollY;
      const targetY = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - 88
      );
      const distance = targetY - startY;
      const duration = 1800;
      const startTime = performance.now();

      const animateScroll = (now: number) => {
        if (cancelled) return;
        const progress = Math.min((now - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animateScroll);
        }
      };

      animationFrame = window.requestAnimationFrame(animateScroll);
    }, 5600);

    window.addEventListener("wheel", cancelAutoAdvance, { passive: true });
    window.addEventListener("touchstart", cancelAutoAdvance, { passive: true });
    window.addEventListener("keydown", cancelAutoAdvance);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("wheel", cancelAutoAdvance);
      window.removeEventListener("touchstart", cancelAutoAdvance);
      window.removeEventListener("keydown", cancelAutoAdvance);
    };
  }, []);

  return (
    <Layout page="home" title={t.titles.home}>
      <section
        className="reveal w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] pb-[4.5rem] tablet:pb-12"
        id="inicio"
      >
        <div className="hero-reveal relative overflow-hidden h-[min(90vh,980px)] bg-[#f9f9f9] tablet:h-[min(55vh,420px)] mobile:h-[min(48vh,320px)]">
          <div className="flex h-full w-max will-change-transform animate-marquee">
            {tiles.map((src, i) => (
              <figure
                className="flex-[0_0_auto] h-full m-0 overflow-hidden flex items-center justify-center bg-[#f3efe9] tablet:flex-[0_0_78vw] tablet:w-[78vw] mobile:flex-[0_0_88vw] mobile:w-[88vw]"
                key={`t-${i}`}
              >
                <img
                  src={src}
                  alt={`Gabriela y Diego ${(i % 4) + 1}`}
                  className="h-full w-auto max-w-none object-contain object-center tablet:w-full tablet:h-full tablet:max-w-full tablet:object-cover"
                />
              </figure>
            ))}
            {ghostTiles.map((src, i) => (
              <figure
                className="flex-[0_0_auto] h-full m-0 overflow-hidden flex items-center justify-center bg-[#f3efe9] tablet:flex-[0_0_78vw] tablet:w-[78vw] mobile:flex-[0_0_88vw] mobile:w-[88vw]"
                key={`g-${i}`}
                aria-hidden="true"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-auto max-w-none object-contain object-center tablet:w-full tablet:h-full tablet:max-w-full tablet:object-cover"
                />
              </figure>
            ))}
          </div>
          <div className="absolute inset-0 z-[3] flex items-center justify-center px-[clamp(1rem,6vw,5rem)] py-[clamp(1.5rem,5vw,3rem)]">
            <h1
              className="w-full m-0 text-white text-center font-script font-normal text-[clamp(2.8rem,6vw,6rem)] leading-[1.3]"
              style={{ textShadow: "rgba(0,0,0,0.4) 0 0 31px" }}
            >
              {t.home.heroScript}
            </h1>
          </div>
        </div>

        <div
          ref={summaryRef}
          className="reveal scroll-mt-24 relative w-[min(1180px,calc(100%-2rem))] max-w-[760px] mx-auto text-center pt-[65px] tablet:w-[min(100%-1.25rem,680px)] tablet:pt-6"
        >
          <div className="max-w-full mx-auto">
            <h2 className="m-0 font-script font-normal text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.05] text-text whitespace-nowrap tablet:text-[clamp(1.6rem,6vw,2.8rem)] tablet:leading-[1.1] mobile:text-[clamp(1.2rem,7vw,2rem)]">
              Gabriela Herrera Candia
            </h2>
            <p className="my-[0.2rem] font-script text-[clamp(2.2rem,3.8vw,3.2rem)] leading-[1.6] font-normal overflow-visible tablet:my-[0.15rem] tablet:text-[clamp(1.7rem,5.5vw,2.6rem)]">
              &
            </p>
            <h2 className="m-0 font-script font-normal text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.05] text-text whitespace-nowrap tablet:text-[clamp(1.6rem,6vw,2.8rem)] tablet:leading-[1.1] mobile:text-[clamp(1.2rem,7vw,2rem)]">
              Diego Alvarado Zárate
            </h2>
          </div>
          <div className="flex justify-center items-center gap-10 mt-10 tablet:flex-col tablet:gap-[0.35rem] tablet:mt-6 mobile:!flex-row mobile:gap-3">
            <div>
              <h3 className={infoLineClass}>{t.home.location}</h3>
            </div>
            <div>
              <h3 className={infoLineClass}>{t.home.date}</h3>
            </div>
          </div>
          <div
            className="grid grid-cols-4 gap-3 max-w-[560px] mx-auto mt-8 tablet:grid-cols-2 tablet:max-w-full tablet:gap-[0.4rem_0.6rem] tablet:mt-[1.2rem] mobile:grid-cols-4 mobile:gap-1"
            aria-label={t.home.countdownAria}
          >
            {[
              { value: days, label: t.home.days },
              { value: hours, label: t.home.hours },
              { value: minutes, label: t.home.minutes },
              { value: seconds, label: t.home.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="px-2 py-[0.95rem] bg-transparent tablet:px-[0.3rem] tablet:py-[0.65rem]"
              >
                <strong className="block font-serif text-[clamp(1rem,2vw,1.3rem)] font-normal mobile:text-[0.95rem]">
                  {item.value}
                </strong>
                <span className="block mt-[0.2rem] text-[0.82rem] font-serif mobile:text-[0.68rem]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 tablet:gap-3 tablet:mt-8 mobile:grid-cols-1">
            {[
              {
                label: t.home.summaryCeremonyLabel,
                value: t.home.summaryCeremonyValue,
              },
              {
                label: t.home.summaryCelebrationLabel,
                value: t.home.summaryCelebrationValue,
              },
              {
                label: t.home.summaryDressLabel,
                value: t.home.summaryDressValue,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-line bg-white/70 px-4 py-5 shadow-[0_18px_45px_rgba(78,78,78,0.06)]"
              >
                <p className="m-0 font-serif text-[0.8rem] tracking-[0.1em] uppercase text-text/55">
                  {item.label}
                </p>
                <p className="m-0 mt-2 font-serif text-[0.98rem] leading-[1.55] text-text/90">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 tablet:mt-10">
            <p className="m-0 text-center font-serif text-[0.82rem] tracking-[0.16em] uppercase text-text/45">
              {t.home.scriptureTitle}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4 mobile:grid-cols-1">
              {[
                {
                  verse: t.home.scriptureOne,
                  ref: t.home.scriptureOneRef,
                },
                {
                  verse: t.home.scriptureTwo,
                  ref: t.home.scriptureTwoRef,
                },
              ].map((item) => (
                <blockquote
                  key={item.ref}
                  className="m-0 rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,243,238,0.92))] px-5 py-6 text-left shadow-[0_18px_45px_rgba(78,78,78,0.05)]"
                >
                  <p className="m-0 font-serif italic text-[1rem] leading-[1.7] text-text/85">
                    "{item.verse}"
                  </p>
                  <footer className="mt-3 font-serif text-[0.88rem] tracking-[0.08em] uppercase text-text/55">
                    {item.ref}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
