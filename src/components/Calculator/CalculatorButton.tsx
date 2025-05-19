import React from 'react';
import styles from './styles.module.css';
import { type CalculatorActions } from '@components/Calculator/Calculator';

type CalculatorButtonProps = {
  label: string;
  action: CalculatorActions;
  /* eslint-disable */
  onClick: (action: CalculatorActions, value?: string) => void;
  /* eslint-enable */
  value?: string;
  color?: 'gray' | 'orange' | 'dark';
  wide?: boolean;
};

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  action,
  onClick,
  value = label,
  color = 'gray',
  wide = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${wide ? styles.wide : ''}`}
      onClick={() => onClick(action, value)}
      aria-label={label}
    >
      {label}
    </button>
  );
};
