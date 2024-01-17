import { user } from '@/class/user';

export const getAllEuesApi = async () => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/learn/edu`;
};

export const getEduDetailApi = async (id: number) => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/learn/edu/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data: {
    id: number;
    title: string;
    content: string;
    bookmarked: boolean;
  } = await res.json();
  return data;
};

export const postEduApi = async ({ title, content }: { title: string; content: string }): Promise<Response> => {
  const apiEndPoint = 'https://api.finfellows.co.kr/api/learn/edu';

  const res = await fetch(apiEndPoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.getAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    const data = await res.json();
    console.log('[✅postNoticeApi API Data]', data);
  }

  return res;
};

export const deleteEduApi = async (id: number): Promise<Response> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/learn/edu/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    console.log('[✅ deletePostApi success]');
  }
  return res;
};

export const patchEduApi = async ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}): Promise<Response> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/learn/edu/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.getAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    console.log('[✅ patchPostApi success]');
  }

  return res;
};
