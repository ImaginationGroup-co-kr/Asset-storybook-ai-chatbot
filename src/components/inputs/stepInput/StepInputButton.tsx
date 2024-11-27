import React from 'react';

import './stepInput.css';
import { Button } from '@/components/common/button/Button';

export interface StepInputButtonProps {
  nextStep: string;
  prevStep: string;
  onNext: () => void;
  onPrev: () => void;
}

/** Primary UI component for user interaction */
export const StepInputButton = ({
  nextStep,
  prevStep,
  onNext,
  onPrev,
  ...props
}: StepInputButtonProps) => {
  return (
    <div className="storybook-step-input--container" {...props}>
      <Button primary={false} label={prevStep} onClick={onPrev} />
      <Button primary={true} label={nextStep} onClick={onNext} />
    </div>
  );
};
