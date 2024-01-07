'use client';

import ChatBubble from '@/components/atom/ChatBubble';
import React, { useRef, useState } from 'react';
// import ChatbotProfileIcon from '@/public/icons/chatbot-profile.svg';
import AutoResizableTextarea from '@/components/atom/AutoResizableTextarea';

type TChatData = {
  profile: 'me' | 'bot';
  text: string;
};

// const chatData: TChatData[] = [
//   // DUMMY DATA
//   { profile: 'bot', text: '안녕! 나는 금토리라고해!\n무엇이 궁금하니?' },
//   //   { profile: 'me', text: '안녕! 적금이 뭐야?' },
//   //   {
//   //     profile: 'bot',
//   //     text: '적금이란 돈은 지급해서 나중에 쓸 목적으로 만든 저축 계좌 같은거야. 일정한 돈을 정기적으로 거기에 넣고 그 돈에 이자가 붙어서 늘어나는데, 그 이자도 다시 돈에 더해져 더 커지는거야. 그런데 적금은 돈을 끄는데 제한이 있어서 특정한 목표나 기간에 돈을 쓰려면 계획적으로 관리해야 해. 예를 들면, 자동차나 여행을 위해 돈 모으려면 적금이 유용하겠지!',
//   //   },
// ];

const ChatbotProfile = () => <div className='w-50 h-50 bg-white rounded-full'>{/* <ChatbotProfileIcon /> */}</div>;

export default function ChatbotUI() {
  const [chatData, setChatData] = useState<TChatData[]>([
    { profile: 'bot', text: '안녕! 나는 금토리라고해!\n무엇이 궁금하니?' },
  ]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  function handleChatbotSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = textareaRef.current?.value.trim();
    if (!text) return;
    setChatData((prev) => [...prev, { profile: 'me', text }]);
    textareaRef.current!.value = '';
  }
  return (
    <div className='absolute right-[100px] bottom-[100px] max-h-500 h-full rounded-12 overflow-hidden'>
      {/* header */}
      <div className=' w-full flex justify-center items-center heading-large text-white py-10 bg-mainLevel400'>
        금토리에게 물어봐
      </div>
      {/* body */}
      <div className='pt-18 pb-10 bg-mainLevel100 h-[calc(100%-50px)] flex flex-col justify-between'>
        {/* chat */}
        <div className='flex flex-col-reverse gap-20 px-20 pb-50 overflow-scroll'>
          {chatData.toReversed().map(({ profile, text }, i) =>
            profile === 'bot' ? (
              <div key={i} className='flex justify-start gap-10'>
                <ChatbotProfile />
                <ChatBubble profile={profile}>{text}</ChatBubble>
              </div>
            ) : (
              <div key={i} className='flex justify-end'>
                <ChatBubble profile={profile}>{text}</ChatBubble>
              </div>
            ),
          )}
        </div>
        {/* send */}
        <form onSubmit={handleChatbotSubmit} className='flex justify-center items-end gap-5 px-7'>
          <AutoResizableTextarea
            maxRows={2}
            textareaRef={textareaRef}
            autoComplete='off'
            // TODO: 글자 크기에 따라 h-47값 변경 필요 (Button도 동일)
            className=' bg-white text-darkComponent rounded-10 py-10 px-13 resize-none outline-none w-350 h-47'
            onKeyUp={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                handleChatbotSubmit(event as any);
              }
            }}
          ></AutoResizableTextarea>
          <button className=' bg-darkComponent text-white text-16 py-10 px-20 rounded-10 h-47'>전송</button>
        </form>
      </div>
    </div>
  );
}
