import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { preloadAudio, startAudio } from "../hooks/useAudio";
import { useLang } from "../i18n/LanguageContext";

const INTRO_BG =
  "radial-gradient(circle at top, rgba(255,255,255,0.92), rgba(247,245,242,0.98) 42%, rgba(236,228,219,0.9) 100%), #f7f5f2";

export default function Intro() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [opening, setOpening] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    document.title = t.titles.intro;
    document.body.dataset.page = "intro";
    preloadAudio("/sound.mp3", 0.05, true);

    const open = () => {
      if (document.body.dataset.introOpened === "true") return;
      document.body.dataset.introOpened = "true";
      setOpening(true);
      startAudio("/sound.mp3", 0.05, true);
      timerRef.current = window.setTimeout(() => {
        navigate("/home");
      }, 680);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      window.removeEventListener("keydown", onKey);
      delete document.body.dataset.page;
      delete document.body.dataset.introOpened;
    };
  }, [navigate, t.titles.intro]);

  const openIntro = () => {
    if (document.body.dataset.introOpened === "true") return;
    document.body.dataset.introOpened = "true";
    setOpening(true);
    startAudio("/sound.mp3", 0.05, true);
    timerRef.current = window.setTimeout(() => {
      navigate("/home");
    }, 680);
  };

  return (
    <div
      className={`min-h-screen cursor-pointer grid place-items-center transition-opacity duration-700 ${
        opening ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: INTRO_BG }}
    >
      <main
        className={`min-h-screen w-[min(980px,calc(100%-2rem))] mx-auto grid place-items-center py-12 text-center cursor-inherit tablet:w-[min(100%-1.5rem,980px)] transition-[transform,opacity] duration-[900ms] ${
          opening ? "scale-[1.03] translate-y-2 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={openIntro}
      >
        <div className="max-w-[56rem] hero-reveal">
          <h1 className="m-0 text-text font-script font-normal text-[clamp(3.4rem,9vw,8.2rem)] leading-[1.04]">
            {t.intro.title}
          </h1>
          <p className="mt-[1.2rem] mb-0 font-display font-normal text-[clamp(0.95rem,1.8vw,1.12rem)] leading-[1.8]">
            {t.intro.warning}
          </p>
          <div className="mt-8 mx-auto h-px w-24 bg-text/20" />
        </div>
      </main>
    </div>
  );
}
