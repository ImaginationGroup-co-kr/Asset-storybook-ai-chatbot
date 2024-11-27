import React from 'react';

import './tag.css';

export interface TagProps {
  /** Is this the principal call to action on the page? */
  selected?: boolean;
  /** How large should the Tag be? */
  size?: 'small' | 'medium' | 'large';
  /** Tag contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Tag = ({
  selected = false,
  size = 'medium',
  label,
  ...props
}: TagProps) => {
  const mode = selected ? 'storybook-tag--selected' : 'storybook-tag--normal';
  return (
    <button
      type="button"
      className={['storybook-tag', `storybook-tag--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
