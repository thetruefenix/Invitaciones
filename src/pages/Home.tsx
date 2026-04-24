import Layout from "../components/Layout";
import useCountdown from "../hooks/useCountdown";
import useReveal from "../hooks/useReveal";
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

  return (
    <Layout page="home" title="Home | Gabriela & Diego">
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
            <h1 className="hero-script">we're getting married!</h1>
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
              <h3>San Pedro de la Paz</h3>
            </div>
            <div className="date-location-card">
              <h3>February 11, 2027</h3>
            </div>
          </div>
          <div className="countdown-card" aria-label="Cuenta regresiva para la boda">
            <div className="countdown-item">
              <strong>{days}</strong>
              <span>days</span>
            </div>
            <div className="countdown-item">
              <strong>{hours}</strong>
              <span>hours</span>
            </div>
            <div className="countdown-item">
              <strong>{minutes}</strong>
              <span>minutes</span>
            </div>
            <div className="countdown-item">
              <strong>{seconds}</strong>
              <span>seconds</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
