import { TgetBankApiResponse } from '@/types/financial-productsTypes';
import { user } from '@/class/user';

const accessToken = user.getAccessToken();

export const getBankApi = async (bankGroupNo: string): Promise<TgetBankApiResponse[] | undefined> => {
  const url = `https://api.finfellows.co.kr/financial-products/bank?bankGroupNo=${bankGroupNo}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅getBankApi API Data]', data);
      return data.data as TgetBankApiResponse[];
    } else {
      console.error('[💥getBankApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getBankApi Error]', error);
    return undefined;
  }
};
