import { user } from '@/class/user';
import { TChatData } from '@/components/templates/chatbot';

export async function postChatbotNotAdmin(question: string) {
  const response = await fetch('https://api.finfellows.co.kr/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.getAccessToken()}`,
    },
    body: JSON.stringify({ question }),
  });
  const { answer }: { answer: string } = await response.json();
  const { status } = response;

  return { status, answer };
}

export async function getChatbotMemory() {
  const response = await fetch('https://api.finfellows.co.kr/api/chatbot', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.getAccessToken()}`,
    },
  });
  const memory: { greeting: string; question: string; answer: string }[] = await response.json();
  console.log(memory);
  return memory;
}
