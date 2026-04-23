import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";

export default function Regalos() {
  useReveal();

  return (
    <Layout page="regalos" title="Regalos | Gabriela & Diego">
      <section className="registry-section reveal">
        <div className="section-heading">
          <p className="section-kicker">Regalos</p>
          <h2>Lista de novios</h2>
          <p className="section-copy">Aquí está el acceso a nuestra lista de novios.</p>
        </div>

        <div className="registry-card reveal">
          <div className="registry-actions">
            <a
              className="button-link"
              href="https://novios.falabella.com/info-evento/evento?codigoEvento=2104394"
              target="_blank"
              rel="noreferrer"
            >
              Abrir lista completa
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
