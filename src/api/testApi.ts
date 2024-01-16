// 말그대로 test api

export function testApi() {
  return fetch('https://api.finfellows.co.kr/api/test', {
    method: 'GET',
  });
}

export function testApiEditor({ title, content }: { title: string; content: string }) {
  return fetch('https://api.finfellows.co.kr/api/test', {
    method: 'POST',

    body: JSON.stringify({ title, content }),
  });
}
