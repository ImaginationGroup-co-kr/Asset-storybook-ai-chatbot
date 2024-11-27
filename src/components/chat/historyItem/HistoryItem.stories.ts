import type { Meta, StoryObj } from '@storybook/react';

import { HistoryItem } from './HistoryItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Chat/HistoryItem',
  component: HistoryItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof HistoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chat: Story = {
  args: {
    messages: [
      {
        role: 'user',
        content: '고양어울림누리로 어떻게 갈 수 있나요?',
      },
      {
        role: 'assistant',
        content:
          '고양어울림누리 체육센터에 가는 방법은 다음과 같습니다:\n\n1. **버스**: 고양어울림, 달빛마을1단지 정류소에서 하차\n2. **전철**: 3호선 원당역 또는 화정역에서 하차 후 도보 이동\n\n자세한 위치는 고양어울림누리 체육센터가 경기도 고양시 덕양구 어울림로 33(성사동)에 위치하고 있습니다.',
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    messages: [
      {
        role: 'user',
        content: '고양어울림누리로 어떻게 갈 수 있나요?',
      },
    ],
    status: 'loading',
  },
};

export const Typing: Story = {
  args: {
    messages: [
      {
        role: 'user',
        content: '고양어울림누리로 어떻게 갈 수 있나요?',
      },
      {
        role: 'assistant',
        content:
          '고양어울림누리 체육센터에 가는 방법은 다음과 같습니다:\n\n1. **버스**: 고양어울림, 달빛마을1단지 정류소에서 하차\n2. **전철**: 3호선 원당역 또는 화정역에서 하차 후 도보 이동\n\n자세한 위치는 고양어울림누리 체육센터가 경기도 고양시 덕양구 어울림로 33(성사동)에 위치하고 있습니다.',
      },
    ],
    status: 'typing',
  },
};

export const Courses: Story = {
  args: {
    messages: [
      { role: 'user', content: '강좌 검색하기' },
      {
        role: 'assistant',
        content:
          '어느 센터에서 강좌를 예약하고 싶으신가요?\n만약 센터를 모르시겠다면 하단의 전체 버튼을 눌러주세요.',
      },
      { role: 'user', content: '고양체육관' },
      {
        role: 'assistant',
        content:
          '어떤 종목을 예약하고 싶으신가요?\n여러 종목을 동시에 선택할 수 있습니다.',
      },
      { role: 'user', content: '아쿠아로빅, 헬스' },
      {
        role: 'assistant',
        content:
          '접수여부를 알려주세요.\n준비중이거나 접수 종료된 강좌는 현재 예약할 수 없습니다.',
      },
      { role: 'user', content: '접수중' },
      {
        role: 'assistant',
        content: '원하시는 요일을 알려주세요.\n중복 선택이 가능합니다.',
      },
      { role: 'user', content: '월, 수, 금' },
      {
        role: 'assistant',
        content: '원하시는 시간을 알려주세요.\n중복 선택이 가능합니다.',
      },
      { role: 'user', content: '전체' },
      {
        role: 'assistant',
        content:
          '추가로 알려주실 사항이 있으시다면 입력해주세요.\n예) 요리 강좌 찾아주세요.',
      },
    ],
  },
};

export const Waitings: Story = {
  args: {
    messages: [
      { role: 'user', content: '대기 순서 조회하기' },
      {
        role: 'assistant',
        content:
          '대기 순서를 조회하고싶은 분의 성함을 입력해주세요.\n예) 홍길동',
      },
      { role: 'user', content: '김상경' },
      {
        role: 'assistant',
        content: '김상경님이 대기 신청하신 강습반 목록입니다.',
      },
      { role: 'user', content: '수영 초급반A' },
      {
        role: 'assistant',
        content:
          '김상경님은 수영 초급반A(정원 20명)의 41번째 대기자입니다. 예상 대기 시간은 약 6개월입니다.',
      },
    ],
  },
};
