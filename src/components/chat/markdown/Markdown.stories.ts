import type { Meta, StoryObj } from '@storybook/react';

import { Markdown } from './Markdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Chat/Markdown',
  component: Markdown,
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
} satisfies Meta<typeof Markdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const example = `# 제목 1
## 제목 2
### 제목 3
#### 제목 4

---

## 텍스트 스타일

- **굵게**: **굵은 텍스트**
- *기울임*: *기울임 텍스트*
- ~~취소선~~: ~~취소된 텍스트~~
- **굵고 *기울임* 혼합**: **굵고 *기울임* 텍스트**

---

## 목록

1. 첫 번째 항목
2. 두 번째 항목
   - 하위 항목 1
   - 하위 항목 2
3. 세 번째 항목

- 점 목록
  - 하위 점 1
  - 하위 점 2
`;

export const Base: Story = {
  args: {
    message: example,
  },
};
