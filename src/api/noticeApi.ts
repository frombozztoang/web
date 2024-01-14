import { TGetNoticeListApiProps, TNoticeApiResponse, TNoticeProps } from '@/types/noticeTypes';

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
