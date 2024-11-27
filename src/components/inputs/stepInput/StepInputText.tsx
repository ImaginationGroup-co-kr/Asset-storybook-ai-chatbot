import React, { useState } from 'react';

import './stepInput.css';
import { Button } from '@/components/common/button/Button';

export interface StepInputTextProps {
  nextStep: string;
  onNext: (message: string) => void;
}

/** Primary UI component for user interaction */
export const StepInputText = ({
  nextStep,
  onNext,
  ...props
}: StepInputTextProps) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (onNext) {
      onNext(message);
      setMessage('');
    }
  };

  return (
    <form className="storybook-step-input--container" {...props}>
      <input
        className="storybook-step-input--text-input"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <Button primary={true} label={nextStep} onClick={handleSubmit} />
    </form>
  );
};
