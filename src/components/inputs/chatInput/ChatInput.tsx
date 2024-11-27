import React, { useState } from 'react';
import { CircleArrowUp } from 'lucide-react';

import './chatInput.css';

export interface ChatInputProps {
  /** Is this the principal call to action on the page? */
  disabled?: boolean;
  /** placeholder */
  placeholder?: string;
  /** submit handler */
  onSubmit?: (message: string) => void;
}

/** Primary UI component for user interaction */
export const ChatInput = ({
  disabled = false,
  placeholder = '메시지를 입력하세요',
  onSubmit,
  ...props
}: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled && onSubmit) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <div className="storybook-chat-input--container" {...props}>
      <form className="storybook-chat-input--form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="storybook-chat-input--text-input"
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
        />
        <button
          className="storybook-chat-input--submit-input"
          type="submit"
          disabled={disabled}
        >
          <CircleArrowUp size={24} />
        </button>
      </form>
    </div>
  );
};
