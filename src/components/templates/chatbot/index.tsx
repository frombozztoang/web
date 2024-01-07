'use client';

import React, { useState } from 'react';
import ChatbotUI from './ChatbotUI';

export default function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {showChatbot && <ChatbotUI />}
      <button className=' absolute right-[50px] bottom-[50px]' onClick={() => setShowChatbot((prev) => !prev)}>
        챗봇
      </button>
    </>
  );
}
