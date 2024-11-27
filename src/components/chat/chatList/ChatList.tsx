import React from 'react';

import './chatList.css';
import { Spinner } from '../spinner/Spinner';
import { Message } from '@/types';
import { ChatItem } from '../chatItem/ChatItem';

export interface ChatListProps {
  messages: Message[];
  /** How large should the chat-list be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional status of last message */
  status?: 'typing' | 'loading' | 'done';
  /** Optional typing end */
  typingEnd?: () => void;
}

/** Primary UI component for user interaction */
export const ChatList = ({
  messages,
  size = 'medium',
  status = 'done',
  typingEnd,
}: ChatListProps) => {
  return (
    <ul className={`storybook-chat-list--list-${size}`}>
      {messages.map((message, index) => (
        <li key={index} className={`storybook-chat-list--item`}>
          {message.role === 'user' ? (
            <ChatItem size={size} message={message} />
          ) : status === 'typing' && index === messages.length - 1 ? (
            <ChatItem
              size={size}
              status={status}
              typingEnd={typingEnd}
              message={message}
            />
          ) : (
            <ChatItem size={size} status={'done'} message={message} />
          )}
        </li>
      ))}
      {status === 'loading' && (
        <li key={messages.length} className={`storybook-chat-list--item`}>
          <Spinner size={size} />
        </li>
      )}
    </ul>
  );
};
