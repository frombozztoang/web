'use client';

import React, { useEffect, useState } from 'react';
import ChatbotUI from './ChatbotUI';
import CloseIcon from '@/public/icons/close2.svg';
import Image from 'next/image';
import GoldtoriIcon from '@/public/icons/think_goldtori.png';
import useChatbotMemory from '@/hooks/useChatMemory';
import { useQueryClient } from 'react-query';
import QUERY_KEYS from '@/constants/queryKeys';

export type TChatData = {
  profile: 'me' | 'bot';
  text: string;
};

export default function Chatbot() {
  const queryClient = useQueryClient();
  const [showChatbot, setShowChatbot] = useState(false);
  const { chatbotMemory } = useChatbotMemory();
  const [chatData, setChatData] = useState<TChatData[]>(
    chatbotMemory ?? [{ profile: 'bot', text: '안녕! 나는 금토리야. 도움이 필요하다면 편하게 말해줘.' }],
  );

  useEffect(() => {
    if (chatbotMemory) {
      setChatData(chatbotMemory);
    }
  }, [chatbotMemory]);

  useEffect(() => {
    queryClient.invalidateQueries(QUERY_KEYS.GET_CHATBOT_MEMORY);
  }, [showChatbot, queryClient]);

  return (
    <>
      {showChatbot && <ChatbotUI chatData={chatData} setChatData={setChatData} />}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className='fixed z-chatbot overflow-hidden right-25 bottom-25 flex justify-center items-center border-2 border-solid border-main rounded-full bg-white w-56 h-56 desktop:w-62 desktop:h-62 dark:bg-dark-secondary'
      >
        {showChatbot ? (
          <CloseIcon className='w-35 h-35 desktop:w-40 desktop:h-40' />
        ) : (
          <Image src={GoldtoriIcon} alt='금토리' className='absolute scale-[133%] right-5 top-11' />
        )}
      </button>
    </>
  );
}
