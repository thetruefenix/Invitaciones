let audioInstance: HTMLAudioElement | null = null;

function ensureAudio(src: string, volume: number, loop: boolean) {
  if (!audioInstance) {
    audioInstance = new Audio(src);
    audioInstance.loop = loop;
    audioInstance.volume = volume;
    audioInstance.preload = "auto";
  }
  return audioInstance;
}

export function preloadAudio(src: string, volume = 0.1, loop = true) {
  const audio = ensureAudio(src, volume, loop);
  audio.load();
}

export function startAudio(src: string, volume = 0.1, loop = true) {
  const audio = ensureAudio(src, volume, loop);
  audio.play().catch((err) => {
    console.error("Audio play failed:", err);
  });
}
