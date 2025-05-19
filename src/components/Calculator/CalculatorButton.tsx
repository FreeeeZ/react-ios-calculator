import React from 'react';
import styles from './styles.module.css';
import { type CalculatorActions } from '@components/Calculator/Calculator';

type CalculatorButtonProps = {
  label: string;
  onClick: (action: CalculatorActions, value?: string) => void;
  value?: string;
  action?: string;
  color?: 'gray' | 'orange' | 'dark';
  wide?: boolean;
};

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
  value = label,
  action = 'addDigit',
  color = 'gray',
  wide = false,
}) => {
  const handleClick = () => {
    onClick(action, value);
  };

  return (
    <button
      className={`${styles.button} ${styles[color]} ${wide ? styles.wide : ''}`}
      onClick={handleClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};
