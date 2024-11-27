import React from 'react';

import './iconButton.css';
import { icons } from 'lucide-react';

export interface IconButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** IconButton icon */
  icon: keyof typeof icons;
  /** IconButton contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const IconButton = ({
  primary = false,
  size = 'medium',
  icon,
  label,
  ...props
}: IconButtonProps) => {
  const IconComponent = icons[icon];
  const mode = primary
    ? 'storybook-icon-button--primary'
    : 'storybook-icon-button--secondary';
  return (
    <button
      type="button"
      className={[
        'storybook-icon-button',
        `storybook-icon-button--${size}`,
        mode,
      ].join(' ')}
      {...props}
    >
      <IconComponent />
      {label}
    </button>
  );
};
