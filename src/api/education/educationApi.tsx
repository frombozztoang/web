import { TEducationsApiResponse } from '@/components/molecules/Education/EducationList';

export const getEducationsData = async (params: string): Promise<TEducationsApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/api/learn/edu?${params}`;
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
      console.log('[✅fetchEducationsData API Data]', data);
      return data as TEducationsApiResponse;
    } else {
      console.error('[💥fetchEducationsData API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥fetchEducationsData Error]', error);
    return undefined;
  }
};

export const postEducationBookmarkApi = async (id: number, contentType: 'EDU_CONTENT') => {
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
      console.log('[✅posEducationBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥posEducationBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥posEducationBookmarkApi Error]', error);
    return undefined;
  }
};

export const deleteEducationBookmarkApi = async (id: number, contentType: 'EDU_CONTENT') => {
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
      console.log('[✅deleteEducationBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deleteEducationBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deleteEducationBookmarkApi Error]', error);
    return undefined;
  }
};
