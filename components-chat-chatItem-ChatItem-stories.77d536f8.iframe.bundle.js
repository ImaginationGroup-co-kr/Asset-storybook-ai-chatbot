"use strict";(self.webpackChunkui_library=self.webpackChunkui_library||[]).push([[802],{"./src/components/chat/chatItem/ChatItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Assistant:()=>Assistant,Large:()=>Large,Small:()=>Small,User:()=>User,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Chat/ChatItem",component:__webpack_require__("./src/components/chat/chatItem/ChatItem.tsx").G,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},User={args:{message:{role:"user",content:"ChatItem"}}},Assistant={args:{message:{role:"assistant",content:"# 제목 1\n## 제목 2\n### 제목 3\n#### 제목 4\n\n---\n\n## 텍스트 스타일\n\n- **굵게**: **굵은 텍스트**\n- *기울임*: *기울임 텍스트*\n- ~~취소선~~: ~~취소된 텍스트~~\n- **굵고 *기울임* 혼합**: **굵고 *기울임* 텍스트**\n\n---\n\n## 목록\n\n1. 첫 번째 항목\n2. 두 번째 항목\n   - 하위 항목 1\n   - 하위 항목 2\n3. 세 번째 항목\n\n- 점 목록\n  - 하위 점 1\n  - 하위 점 2\n"}}},Large={args:{size:"large",message:{role:"user",content:"ChatItem"}}},Small={args:{size:"small",message:{role:"user",content:"ChatItem"}}},__namedExportsOrder=["User","Assistant","Large","Small"];User.parameters={...User.parameters,docs:{...User.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: {\n      role: 'user',\n      content: 'ChatItem'\n    }\n  }\n}",...User.parameters?.docs?.source}}},Assistant.parameters={...Assistant.parameters,docs:{...Assistant.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: {\n      role: 'assistant',\n      content: example\n    }\n  }\n}",...Assistant.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    message: {\n      role: 'user',\n      content: 'ChatItem'\n    }\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    message: {\n      role: 'user',\n      content: 'ChatItem'\n    }\n  }\n}",...Small.parameters?.docs?.source}}}}}]);