'use client';

import React, { useEffect, useState } from 'react';
import ChatbotUI from './ChatbotUI';
import CloseIcon from '@/public/icons/close2.svg';
import Image from 'next/image';
import GoldtoriIcon from '@/public/icons/think_goldtori.png';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';
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
  const { isDesktop } = useFinMediaQuery();
  const closeIconSize = isDesktop ? 43 : 30; // 닫기 아이콘 사이즈

  useEffect(() => {
    if (chatbotMemory) {
      setChatData(chatbotMemory);
    }
  }, [chatbotMemory]);

  useEffect(() => {
    queryClient.invalidateQueries(QUERY_KEYS.GET_CHATBOT_MEMORY);
  }, [showChatbot, queryClient]);

  function CloseBtn() {
    return (
      <button
        onClick={() => setShowChatbot(false)}
        className='fixed z-chatbot right-25 bottom-25 flex justify-center items-center border-2 border-solid border-main rounded-full bg-white w-40 h-40 tablet:w-62 tablet:h-62'
      >
        <CloseIcon width={'43'} height={closeIconSize} />
      </button>
    );
  }

  return (
    <>
      {showChatbot && (
        <>
          <ChatbotUI chatData={chatData} setChatData={setChatData} />
          <CloseBtn />
        </>
      )}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className='fixed right-25 bottom-25 outline-none border-2 border-solid border-main rounded-full bg-white w-40 h-40 tablet:w-62 tablet:h-62'
        >
          <Image src={GoldtoriIcon} alt='금토리 아이콘' fill sizes='62px' />
        </button>
      )}
    </>
  );
}
