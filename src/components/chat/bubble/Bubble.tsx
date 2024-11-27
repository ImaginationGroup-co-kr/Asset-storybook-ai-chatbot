import React from 'react';

import './bubble.css';

export interface BubbleProps {
  /** Is this the principal call to action on the page? */
  role: 'user' | 'assistant';
  /** How large should the bubble be? */
  size?: 'small' | 'medium' | 'large';
  /** Bubble contents */
  children: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Bubble = ({
  role,
  size = 'medium',
  children,
  ...props
}: BubbleProps) => {
  const mode =
    role === 'user' ? 'storybook-bubble--user' : 'storybook-bubble--assistant';
  return (
    <div
      className={[mode, 'storybook-bubble', `storybook-bubble--${size}`].join(
        ' ',
      )}
      {...props}
    >
      {children}
    </div>
  );
};
