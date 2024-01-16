import { TEducation } from '@/components/molecules/Education/EducationList';
export const getEducationIdApi = async (id: number): Promise<TEducation | undefined> => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/api/learn/edu/${id}`;

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
      console.log('[✅getEducationIdApi API Data]', data);
      return data as TEducation;
    } else {
      console.error('[💥getEducationIdApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getEducationIdApi Error]', error);
    return undefined;
  }
};
