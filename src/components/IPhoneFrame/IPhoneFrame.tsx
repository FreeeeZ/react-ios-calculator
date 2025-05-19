import React from 'react';
import styles from './styles.module.css';

type IPhoneFrameProps = {
  children: React.ReactNode;
};

export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ children }) => {
  return (
    <div className={styles.iphoneFrame}>
      <div className={styles.screen}>{children}</div>
    </div>
  );
};
