'use client';

import ChatBubble from '@/components/atom/ChatBubble';
import React, { useRef, useState } from 'react';
import AutoResizableTextarea from '@/components/atom/AutoResizableTextarea';
import { postChatbotNotAdmin } from '@/api/chatbotApi';
import withApi from '@/utils/withApi';
import GoldToriIcon from '@/public/icons/glasses_goldtori.svg';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';
import { TChatData } from '.';
import WithStopPropagation from '@/components/utils/withStopPropagation';
import { useQueryClient } from 'react-query';
import QUERY_KEYS from '@/constants/queryKeys';

export default function ChatbotUI({
  chatData,
  setChatData,
}: {
  chatData: TChatData[];
  setChatData: React.Dispatch<React.SetStateAction<TChatData[]>>;
}) {
  const queryClient = useQueryClient();
  const [textareaValue, setTextareaValue] = useState('');
  const [isSubmitLoading, setIsSubmitLoading] = useState(false); // 전송 버튼 로딩
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isDesktop } = useFinMediaQuery();

  // 답변을 0.5초 간격으로 렌더링 (.을 기준으로 split)
  function splitRenderChatbotAnswer(answer: string) {
    const answers = answer
      .split('.')
      .filter((s) => s.length > 0)
      .map((s) => s.trim() + '.');
    // 0.5초 간격으로 렌더링
    answers.forEach((answer, i) => {
      setTimeout(() => {
        setChatData((prev) => [...prev, { profile: 'bot', text: answer }]);
      }, 1000 * i);
    });
  }

  // 질문 전송
  async function handleChatbotSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = textareaRef.current?.value.trim();
    if (!question) return;

    setIsSubmitLoading(true);
    setChatData((prev) => [...prev, { profile: 'me', text: question }]);
    setTextareaValue('');

    const textAreaHeight = isDesktop ? 47 : 30;
    textareaRef.current!.style.height = `${textAreaHeight}px`;

    await withApi(() => postChatbotNotAdmin(question), {
      onSuccess: ({ answer }) => {
        splitRenderChatbotAnswer(answer);
        queryClient.invalidateQueries(QUERY_KEYS.GET_CHATBOT_MEMORY);
      },
      onError: (error) => {
        // TODO: 에러 처리
      },
    });
    setIsSubmitLoading(false);
  }
  return (
    <div className='fixed z-chatbot right-25 bottom-100 w-275 max-h-450 h-full rounded-12 overflow-hidden desktop:w-430 desktop:max-h-600'>
      {/* header */}
      <div className=' w-full flex justify-center items-center text-white text-13 font-bold py-10 bg-mainLevel400 desktop:text-21'>
        금토리에게 물어봐
      </div>
      {/* body */}
      <div className='pt-18 pb-10 bg-mainLevel100 h-[calc(100%-50px)] flex flex-col justify-between'>
        {/* chat */}
        <div className='flex flex-col-reverse px-13 pb-40 overflow-scroll'>
          {chatDataWithMargin(chatData)
            .toReversed()
            .map(({ profile, text, marginBottom }, i) =>
              profile === 'bot' ? (
                <div key={i} className='flex justify-start gap-7 desktop:gap-10'>
                  <ChatbotProfile />
                  <ChatBubble profile={profile} marginBottom={marginBottom}>
                    {text}
                  </ChatBubble>
                </div>
              ) : (
                <div key={i} className='flex justify-end'>
                  <ChatBubble profile={profile} marginBottom={marginBottom}>
                    {text}
                  </ChatBubble>
                </div>
              ),
            )}
        </div>
        {/* send */}
        <div className='flex justify-center items-end gap-5 px-7'>
          <AutoResizableTextarea
            maxRows={2}
            textareaRef={textareaRef}
            autoComplete='off'
            className=' bg-white text-darkComponent rounded-6 py-5 px-7 text-13 resize-none outline-none w-full h-30 desktop:h-47 desktop:text-18 desktop:py-10 desktop:px-12'
            onKeyDown={(e) => {
              if (!e.nativeEvent.isComposing && e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleChatbotSubmit(e as any);
              }
            }}
            disabled={isSubmitLoading}
            textareaOnChange={(e) => setTextareaValue(e.target.value)}
            value={textareaValue}
          ></AutoResizableTextarea>
          <button
            disabled={isSubmitLoading || !textareaValue.trim().length}
            className='flex justify-center items-center shrink-0 bg-darkComponent text-white text-10 py-7 px-13 rounded-6 h-30 disabled:opacity-50 disabled:cursor-not-allowed desktop:label-medium desktop:py-23 desktop:px-21'
          >
            {isSubmitLoading ? '전송중...' : '전송'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatbotProfile() {
  const { isDesktop } = useFinMediaQuery();
  const iconSize = isDesktop ? 50 : 32;
  return (
    <div className='flex justify-center items-center shrink-0 w-32 h-32 bg-white rounded-full overflow-hidden desktop:w-50 desktop:h-50'>
      <div style={{ transform: 'scaleX(-1)' }} className='mt-15'>
        <GoldToriIcon width={iconSize} height={iconSize} />
      </div>
    </div>
  );
}

function chatDataWithMargin(chatData: TChatData[]) {
  return chatData.map((chat, i) => {
    if (i === chatData.length - 1) return { ...chat, marginBottom: 0 };
    if (chatData[i].profile === chatData[i + 1].profile) {
      return { ...chat, marginBottom: 6 };
    } else {
      return { ...chat, marginBottom: 18 };
    }
  });
}
