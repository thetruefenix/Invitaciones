let audioInstance: HTMLAudioElement | null = null;
let listenersAttached = false;
let shouldResumeWhenVisible = false;

function playAudio(audio: HTMLAudioElement) {
  audio.play().catch((err) => {
    console.error("Audio play failed:", err);
  });
}

function pauseForInactivePage() {
  if (!audioInstance || audioInstance.paused) return;
  shouldResumeWhenVisible = true;
  audioInstance.pause();
}

function resumeForActivePage() {
  if (!audioInstance || !shouldResumeWhenVisible || document.hidden) return;
  shouldResumeWhenVisible = false;
  playAudio(audioInstance);
}

function attachVisibilityListeners() {
  if (listenersAttached || typeof window === "undefined") return;
  listenersAttached = true;

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseForInactivePage();
      return;
    }
    resumeForActivePage();
  });

  window.addEventListener("pagehide", pauseForInactivePage);
  window.addEventListener("blur", pauseForInactivePage);
  window.addEventListener("pageshow", resumeForActivePage);
  window.addEventListener("focus", resumeForActivePage);
}

function ensureAudio(src: string, volume: number, loop: boolean) {
  if (!audioInstance) {
    audioInstance = new Audio(src);
    audioInstance.loop = loop;
    audioInstance.volume = volume;
    audioInstance.preload = "auto";
  }
  attachVisibilityListeners();
  return audioInstance;
}

export function preloadAudio(src: string, volume = 0.1, loop = true) {
  const audio = ensureAudio(src, volume, loop);
  audio.load();
}

export function startAudio(src: string, volume = 0.1, loop = true) {
  const audio = ensureAudio(src, volume, loop);
  shouldResumeWhenVisible = false;
  playAudio(audio);
}
