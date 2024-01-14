import { TgetCmaApiResponse, TgetCmaIdApiResponse } from '@/types/financial-productsTypes';
import { user } from '@/class/user';

const accessToken = user.getAccessToken();

export const getCmasApi = async (params: string): Promise<TgetCmaApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/financial-products/cma?${params}`;

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
      console.log('[✅getCmasApi API Data]', data);
      return data.data as TgetCmaApiResponse;
    } else {
      console.error('[💥getCmasApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getCmasApi Error]', error);
    return undefined;
  }
};

export const getCmaIdApi = async (id: number): Promise<TgetCmaIdApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/financial-products/cma/${id}`;

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
      console.log('[✅getCmaIdApi API Data]', data);
      return data.data as TgetCmaIdApiResponse;
    } else {
      console.error('[💥getCmaIdApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getCmaIdApi Error]', error);
    return undefined;
  }
};
