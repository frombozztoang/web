import { user } from '@/class/user';
import { TNewsListApiResponse, TNews } from '@/types/newsTypes';

const accessToken = user.getAccessToken();

export const getNewsListData = async (params: string): Promise<TNewsListApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/api/learn/news?${params}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅fetchNewsListData API Data]', data);
      const NewsData = data.content;
      return data as TNewsListApiResponse;
    } else {
      console.error('[💥fetchNewsListData API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥fetchNewsListData Error]', error);
    return undefined;
  }
};

export const getNewsIdApi = async (id: number): Promise<TNews | undefined> => {
  const url = `https://api.finfellows.co.kr/api/learn/news/${id}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅getNewsIdApi API Data]', data);
      return data as TNews;
    } else {
      console.error('[💥getNewsIdApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getNewsIdApi Error]', error);
    return undefined;
  }
};

export const postNewsApi = async ({ title, content }: { title: string; content: string }): Promise<Response> => {
  const apiEndPoint = 'https://api.finfellows.co.kr/api/learn/news';

  const res = await fetch(apiEndPoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    const data = await res.json();
    console.log('[✅postNewsApi API Data]', data);
  }

  return res;
};

export const deleteNewsApi = async (id: number): Promise<Response> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/learn/news/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    console.log('[✅deleteNewsApi success]');
  }
  return res;
};

export const patchNewsApi = async ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}): Promise<Response> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/learn/news/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    console.log('[✅ patchNewsApi success]');
  }

  return res;
};
