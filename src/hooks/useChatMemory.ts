import { getChatbotMemory } from '@/api/chatbotApi';
import { TChatData } from '@/components/templates/chatbot';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from 'react-query';

function proccessingChatbotMemory(memory: { greeting: string; question: string; answer: string }[]): TChatData[] {
  const result: TChatData[] = [];
  memory.forEach((chat, i) => {
    if (i === 0) {
      result.push({ profile: 'bot', text: chat.greeting });
      return;
    }
    if (chat.question) {
      result.push({ profile: 'me', text: chat.question });
    }
    if (chat.answer) {
      result.push({ profile: 'bot', text: chat.answer });
    }
  });
  return result;
}

export default function useChatbotMemory() {
  const {
    data: chatbotMemory,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_CHATBOT_MEMORY],
    queryFn: getChatbotMemory,
    refetchOnMount: 'always',
    select: proccessingChatbotMemory,
  });
  return { chatbotMemory, isLoading, isError };
}
