import { useEffect, useRef } from 'react';
import clickSoundFile from '/sounds/click.mp3';
import removeSoundFile from '/sounds/remove.mp3';

export const useSound = (enabled: boolean = true) => {
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const removeSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      clickSound.current = new Audio(clickSoundFile);
      removeSound.current = new Audio(removeSoundFile);
    }
  }, []);

  const playClick = () => {
    if (enabled && clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current
        .play()
        .catch((e) => console.log('Sound play failed:', e));
    }
  };

  const playRemove = () => {
    if (enabled && removeSound.current) {
      removeSound.current.currentTime = 0;
      removeSound.current
        .play()
        .catch((e) => console.log('Sound play failed:', e));
    }
  };

  return { playClick, playRemove };
};
