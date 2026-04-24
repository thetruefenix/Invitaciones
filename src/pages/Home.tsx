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

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  useReveal();
  const { t } = useLang();

  return (
    <Layout page="home" title={t.titles.home}>
      <section className="hero reveal" id="inicio">
        <div className="hero-marquee hero-reveal">
          <div className="marquee-track">
            {tiles.map((src, i) => (
              <figure className="hero-tile" key={`t-${i}`}>
                <img src={src} alt={`Gabriela y Diego ${(i % 4) + 1}`} />
              </figure>
            ))}
            {ghostTiles.map((src, i) => (
              <figure className="hero-tile" key={`g-${i}`} aria-hidden="true">
                <img src={src} alt="" />
              </figure>
            ))}
          </div>
          <div className="hero-overlay">
            <h1 className="hero-script">{t.home.heroScript}</h1>
          </div>
        </div>

        <div className="hero-copy reveal">
          <div className="names-block">
            <h2>Gabriela Herrera Candia</h2>
            <p className="ampersand">&</p>
            <h2>Diego Alvarado Zárate</h2>
          </div>
          <div className="date-location-row">
            <div className="date-location-card">
              <h3>{t.home.location}</h3>
            </div>
            <div className="date-location-card">
              <h3>{t.home.date}</h3>
            </div>
          </div>
          <div className="countdown-card" aria-label={t.home.countdownAria}>
            <div className="countdown-item">
              <strong>{days}</strong>
              <span>{t.home.days}</span>
            </div>
            <div className="countdown-item">
              <strong>{hours}</strong>
              <span>{t.home.hours}</span>
            </div>
            <div className="countdown-item">
              <strong>{minutes}</strong>
              <span>{t.home.minutes}</span>
            </div>
            <div className="countdown-item">
              <strong>{seconds}</strong>
              <span>{t.home.seconds}</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
