import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preloadAudio, startAudio } from "../hooks/useAudio";
import { useLang } from "../i18n/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function Intro() {
  const navigate = useNavigate();
  const { t } = useLang();

  useEffect(() => {
    document.title = t.titles.intro;
    const body = document.body;
    body.classList.add("intro-page", "intro-message-page");
    body.dataset.page = "intro";
    preloadAudio("/sound.mp3", 0.05, true);

    const open = () => {
      if (body.classList.contains("intro-opened")) return;
      body.classList.add("intro-opened");
      startAudio("/sound.mp3", 0.05, true);
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
  }, [navigate, t.titles.intro]);

  const openIntro = () => {
    if (document.body.classList.contains("intro-opened")) return;
    document.body.classList.add("intro-opened");
    startAudio("/sound.mp3", 0.05, true);
    navigate("/home");
  };

  return (
    <>
      <div
        className="intro-lang-toggle"
        onClick={(e) => e.stopPropagation()}
      >
        <LanguageToggle />
      </div>
      <main className="intro-message-shell" onClick={openIntro}>
        <div className="intro-message-block hero-reveal">
          <h1>{t.intro.title}</h1>
          <p className="intro-warning">{t.intro.warning}</p>
        </div>
      </main>
    </>
  );
}
