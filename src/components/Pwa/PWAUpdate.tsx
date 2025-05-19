import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const PWAUpdate = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      navigator.serviceWorker.register('/sw.js').then((reg) => {
        setRegistration(reg);

        reg.update().then(() => {
          if (reg.waiting) {
            setUpdateAvailable(true);
          }
        });

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                setUpdateAvailable(true);
              }
            });
          }
        });
      });

      const interval = setInterval(
        () => {
          if (registration) {
            registration.update();
          }
        },
        60 * 60 * 1000
      );

      return () => clearInterval(interval);
    }
  }, []);

  const reloadPage = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    setUpdateAvailable(false);
  };

  if (!updateAvailable) return null;

  return (
    <div className={styles.toast} onClick={reloadPage}>
      <span>Доступно новое обновление! Нажмите для перезагрузки.</span>
    </div>
  );
};
