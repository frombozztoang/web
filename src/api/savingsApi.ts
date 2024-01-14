import { TgetDepositSavingApiResponse, TgetDepositSavingIdApiResponse } from '@/types/financial-productsTypes';
import { user } from '@/class/user';

const accessToken = user.getAccessToken();

export const getSavingsApi = async (params: string): Promise<TgetDepositSavingApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/financial-products/saving?${params}`;

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
      console.log('[✅getDepositsApi API Data]', data);
      return data.data as TgetDepositSavingApiResponse;
    } else {
      console.error('[💥getDepositsApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getDepositsApi Error]', error);
    return undefined;
  }
};

export const getSavingIdApi = async (id: number): Promise<TgetDepositSavingIdApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/financial-products/saving/${id}`;

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
      console.log('[✅getDepositIdApi API Data]', data);
      return data.data as TgetDepositSavingIdApiResponse;
    } else {
      console.error('[💥getDepositIdApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getDepositIdApi Error]', error);
    return undefined;
  }
};
