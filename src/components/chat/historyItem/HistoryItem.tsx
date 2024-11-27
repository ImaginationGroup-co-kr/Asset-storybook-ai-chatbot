import React from 'react';

import './historyItem.css';
import { Message } from '@/types';
import { ChatList } from '../chatList/ChatList';

export interface HistoryItemProps {
  messages: Message[];
  /** How large should the history-item be? */
  size?: 'small' | 'medium';
  selected?: boolean;
  /** Optional status of last message */
  status?: 'typing' | 'loading' | 'done';
  /** Optional typing end */
  typingEnd?: () => void;
}

/** Primary UI component for user interaction */
export const HistoryItem = ({
  messages,
  size = 'small',
  selected = false,
  status = 'done',
  typingEnd,
}: HistoryItemProps) => {
  return (
    <div
      className={`storybook-history-item--${size} ${
        selected && 'storybook-history-item--selected'
      }`}
    >
      <ChatList
        messages={messages}
        size={size}
        status={status}
        typingEnd={typingEnd}
      />
    </div>
  );
};
