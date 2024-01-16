import { TPostNotice } from './../types/noticeTypes';
import { TGetNoticeListApiProps, TNoticeApiResponse, TNoticeProps } from '@/types/noticeTypes';
import { TEditorUploadFn } from '@/types/editor/editorUploadFnType';
import { user } from '@/class/user';

const accessToken = user.getAccessToken();
export const getNoticeListApi = async ({
  pageNum,
  size,
}: TGetNoticeListApiProps): Promise<TNoticeApiResponse | undefined> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/post?page=${pageNum}&size=${size}`;

  try {
    const res = await fetch(apiEndPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log('[✅getNoticeListApi API Data]', data);
      return data as TNoticeApiResponse;
    } else {
      console.error('[💥getNoticeListApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getNoticeListApi Error]', error);
    return undefined;
  }
};

export const getNoticeApi = async (id: number): Promise<TNoticeProps | undefined> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/post/${id}`;

  try {
    const res = await fetch(apiEndPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log('[✅getNoticeApi API Data]', data);
      return data as TNoticeProps;
    } else {
      console.error('[💥getNoticeApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getNoticeApi Error]', error);
    return undefined;
  }
};

export const postNoticeApi = async ({ title, content }: { title: string; content: string }): Promise<Response> => {
  const apiEndPoint = 'https://api.finfellows.co.kr/api/post';

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
    console.log('[✅postNoticeApi API Data]', data);
  }

  return res;
};

export const deletePostApi = async (id: number): Promise<Response> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/post/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    console.log('[✅ deletePostApi success]');
  }
  return res;
};

export const patchPostApi = async ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}): Promise<Response> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/post/${id}`;

  const res = await fetch(apiEndPoint, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    console.log('[✅ patchPostApi success]');
  }

  return res;
};
