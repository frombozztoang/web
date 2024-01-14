import { user } from '@/class/user';
import {
  TEducationBookmarkApiResponse,
  TFinancialProductsBookmarkApiResponse,
  TPoliciesBookmarkApiResponse,
} from '@/types/mypageTypes';

const accessToken = user.getAccessToken();

export const getFinancialProductsBookmarkApi = async (): Promise<TFinancialProductsBookmarkApiResponse | undefined> => {
  const apiEndpoint = 'https://api.finfellows.co.kr/users/financial-products';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅getFinancialProducts API Data]', data);
      return data.data as TFinancialProductsBookmarkApiResponse;
    } else {
      console.error('[💥getFinancialProducts API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getFinancialProducts Error]', error);
    return undefined;
  }
};

export const getEducationBookmarkApi = async (): Promise<TEducationBookmarkApiResponse | undefined> => {
  const apiEndpoint = 'https://api.finfellows.co.kr/users/posts';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅getEducationBookmarkApi API Data]', data);
      return data.data as TEducationBookmarkApiResponse;
    } else {
      console.error('[💥getEducationBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getEducationBookmarkApi Error]', error);
    return undefined;
  }
};

export const getPolicyBookmarkApi = async (): Promise<TPoliciesBookmarkApiResponse | undefined> => {
  const apiEndpoint = 'https://api.finfellows.co.kr/users/policy-infos';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅getPolicyBookmarkApi API Data]', data);
      return data as TPoliciesBookmarkApiResponse;
    } else {
      console.error('[💥getPolicyBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getPolicyBookmarkApi Error]', error);
    return undefined;
  }
};
