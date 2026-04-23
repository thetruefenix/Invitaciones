import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Gabriela & Diego";
    const body = document.body;
    body.classList.add("intro-page", "intro-message-page");
    body.dataset.page = "intro";

    const open = () => {
      if (body.classList.contains("intro-opened")) return;
      body.classList.add("intro-opened");
      navigate("/home");
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      body.classList.remove("intro-page", "intro-message-page", "intro-opened");
      delete body.dataset.page;
    };
  }, [navigate]);

  const openIntro = () => {
    if (document.body.classList.contains("intro-opened")) return;
    document.body.classList.add("intro-opened");
    navigate("/home");
  };

  return (
    <main className="intro-message-shell" onClick={openIntro}>
      <div className="intro-message-block hero-reveal">
        <h1>Te invitamos a nuestro Matrimonio</h1>
        <p className="intro-warning">Esta invitación es personal e intransferible</p>
      </div>
    </main>
  );
}
