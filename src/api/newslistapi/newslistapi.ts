import { TNewsListApiResponse } from '@/components/molecules/News/NewsList';

export const getNewsListData = async (params: string): Promise<TNewsListApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/api/learn/news?${params}`;
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';

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

export const postNewsBookmarkApi = async (id: number, contentType: 'NEWS_CONTENT') => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/bookmarks/posts/${id}?contentType=${contentType}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅postNewsBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥postNewsBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postNewsBookmarkApi Error]', error);
    return undefined;
  }
};

export const deleteNewsBookmarkApi = async (id: number, contentType: 'NEWS_CONTENT') => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/bookmarks/posts/${id}?contentType=${contentType}`;
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅deleteNewsBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deleteNewsBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deleteNewsBookmarkApi Error]', error);
    return undefined;
  }
};
