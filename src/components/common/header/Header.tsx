import React from 'react';

import { Button } from '../button/Button';
import './header.css';
import { Expand, Shrink, X } from 'lucide-react';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  onExpand?: () => void;
  onShrink?: () => void;
  onClose?: () => void;
}

export const Header = ({
  title,
  subtitle,
  onExpand,
  onShrink,
  onClose,
}: HeaderProps) => (
  <header className="storybook-header--container">
    <div className="storybook-header--container-texts">
      <h1 className="storybook-header--title">{title}</h1>
      {subtitle && (
        <span className="storybook-header--subtitle">{subtitle}</span>
      )}
    </div>
    <div className="storybook-header--container-button">
      {onExpand && (
        <button onClick={onExpand} className="storybook-header--button">
          <Expand width={24} height={24} />
        </button>
      )}
      {onShrink && (
        <button onClick={onShrink} className="storybook-header--button">
          <Shrink width={24} height={24} />
        </button>
      )}
      {onClose && (
        <button onClick={onClose} className="storybook-header--button">
          <X width={24} height={24} />
        </button>
      )}
    </div>
  </header>
);
