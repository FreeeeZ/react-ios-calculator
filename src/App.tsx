import React from 'react';
import { Calculator } from '@components/Calculator/Calculator';
import { IPhoneFrame } from '@components/IPhoneFrame/IPhoneFrame';
import { PWAUpdate } from '@components/Pwa/PWAUpdate';
import '@assets/styles/global.css';

const App: React.FC = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="app">
      {isMobile ? (
        <Calculator />
      ) : (
        <IPhoneFrame>
          <Calculator />
        </IPhoneFrame>
      )}
      <PWAUpdate />
    </div>
  );
};

export default App;
