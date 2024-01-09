import { TFinancialProductsApiResponse } from '@/components/organisms/mypage/FinancialProducts';

export const getFinancialProducts = async (): Promise<TFinancialProductsApiResponse | undefined> => {
  const apiEndpoint = 'http://api.finfellows.co.kr/users/financial-products';
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';

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
      return data.data as TFinancialProductsApiResponse;
    } else {
      console.error('[💥getFinancialProducts API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getFinancialProducts Error]', error);
    return undefined;
  }
};
