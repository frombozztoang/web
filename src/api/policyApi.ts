import { TPolicy, TPolicyApiResponse } from '@/types/policyTypes';
import { user } from '@/class/user';
const accessToken = user.getAccessToken();

export const getPolicydetailApi = async (policyInfoId: number): Promise<TPolicy | undefined> => {
  const url = `https://api.finfellows.co.kr/policy-info/${policyInfoId}`;
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
      console.log('[✅getPolicyssApi API Data]', data.data);
      return data.data as TPolicy;
    } else {
      console.error('[💥getPolicyssApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getPolicyssApi Error]', error);
    return undefined;
  }
};

export const getPolicysApi = async (params: string): Promise<TPolicyApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/policy-info?${params}`;

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
      console.log('[✅getPolicyssApi API Data]', data);
      return data.data as TPolicyApiResponse;
    } else {
      console.error('[💥getPolicyssApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getPolicyssApi Error]', error);
    return undefined;
  }
};
