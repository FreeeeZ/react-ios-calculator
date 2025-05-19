import React from 'react';
import styles from './styles.module.css';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorButton } from './CalculatorButton';
import { useCalculator } from '@hooks/useCalculator';
import { useKeyboardInput } from '@hooks/useKeyboardInput';
import { useSound } from '@hooks/useSound';

export type CalculatorActions =
  | 'addDigit'
  | 'setOperation'
  | 'executeCalculation'
  | 'clearAll'
  | 'deleteLastChar'
  | 'toggleSign'
  | 'applyPercentage';

export const Calculator: React.FC = () => {
  const {
    currentValue,
    previousValue,
    operation,
    showPrevious,
    clearAll,
    deleteLastChar,
    addDigit,
    setOperation,
    executeCalculation,
    toggleSign,
    applyPercentage,
  } = useCalculator();

  const { playClick, playRemove } = useSound();

  const handleAction = (action: CalculatorActions, value?: string) => {
    switch (action) {
      case 'addDigit':
        playClick();
        addDigit(value!);
        break;
      case 'setOperation':
        playClick();
        setOperation(value!);
        break;
      case 'executeCalculation':
        playClick();
        executeCalculation();
        break;
      case 'clearAll':
        playRemove();
        clearAll();
        break;
      case 'deleteLastChar':
        playRemove();
        deleteLastChar();
        break;
      case 'toggleSign':
        playClick();
        toggleSign();
        break;
      case 'applyPercentage':
        playClick();
        applyPercentage();
        break;
    }
  };

  useKeyboardInput(handleAction);

  return (
    <div className={styles.calculator}>
      <CalculatorDisplay
        value={currentValue}
        previousValue={previousValue}
        operation={operation}
        showPrevious={showPrevious}
      />

      <div className={styles.buttonsGrid}>
        <CalculatorButton
          label="AC"
          action="clearAll"
          color="gray"
          onClick={handleAction}
        />
        <CalculatorButton
          label="+/-"
          action="toggleSign"
          color="gray"
          onClick={handleAction}
        />
        <CalculatorButton
          label="%"
          action="applyPercentage"
          color="gray"
          onClick={handleAction}
        />
        <CalculatorButton
          label="÷"
          value="÷"
          action="setOperation"
          color="orange"
          onClick={handleAction}
        />

        <CalculatorButton
          label="7"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="8"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="9"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="×"
          value="×"
          action="setOperation"
          color="orange"
          onClick={handleAction}
        />

        <CalculatorButton
          label="4"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="5"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="6"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="-"
          value="-"
          action="setOperation"
          color="orange"
          onClick={handleAction}
        />

        <CalculatorButton
          label="1"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="2"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="3"
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="+"
          value="+"
          action="setOperation"
          color="orange"
          onClick={handleAction}
        />

        <CalculatorButton
          label="0"
          action="addDigit"
          color="dark"
          wide
          onClick={handleAction}
        />
        <CalculatorButton
          label=","
          action="addDigit"
          color="dark"
          onClick={handleAction}
        />
        <CalculatorButton
          label="="
          action="executeCalculation"
          color="orange"
          onClick={handleAction}
        />
      </div>
    </div>
  );
};
