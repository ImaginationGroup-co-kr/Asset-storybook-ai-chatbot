import React, { useEffect, useState } from 'react';

import './chatItem.css';
import { Bubble } from '../bubble/Bubble';
import { Spinner } from '../spinner/Spinner';
import Image from 'next/image';
import { Markdown } from '../markdown/Markdown';
import { Message } from '@/types';

export interface ChatItemProps {
  /** Message */
  message: Message;
  /** How large should the chat-item be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional typing */
  status?: 'typing' | 'loading' | 'done';
  /** Optional typing end */
  typingEnd?: () => void;
}

/** Primary UI component for user interaction */
export const ChatItem = ({
  message,
  size = 'medium',
  status = 'done',
  typingEnd,
}: ChatItemProps) => {
  const typingTime = 1500; // 타이핑 시간 (밀리초)
  const maxTypingInterval = 25;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (status === 'typing') {
      const typingInterval = Math.min(
        typingTime / message.content.length,
        maxTypingInterval,
      );
      setDisplayedText('');
      let index = 0;

      const interval = setInterval(() => {
        // index가 markdown 길이보다 작을 때만 업데이트
        if (index < message.content.length) {
          setDisplayedText(message.content.slice(0, index + 1)); // 현재 index까지의 문자열을 설정
          index++;
        } else {
          clearInterval(interval);
          if (typingEnd) typingEnd(); // 타이핑이 끝났음을 알림
        }
      }, typingInterval);

      return () => clearInterval(interval);
    } else {
      setDisplayedText(message.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, status]);

  if (message.role === 'user') {
    return (
      <div className={`storybook-chat-item--user-container-${size}`}>
        <Bubble role={message.role} size={size}>
          {message.content}
        </Bubble>
      </div>
    );
  } else {
    // role === 'assistant'
    return (
      <div className={`storybook-chat-item--assistant-container-${size}`}>
        {size === 'large' && (
          <Image
            src="/assistant.png"
            alt="assistant"
            className="storybook-chat-item--assistant-profile"
            width={48}
            height={48}
          />
        )}
        {status === 'loading' ? (
          <Spinner />
        ) : (
          <Bubble role={message.role} size={size}>
            <Markdown
              message={status === 'done' ? message.content : displayedText}
            />
          </Bubble>
        )}
      </div>
    );
  }
};
