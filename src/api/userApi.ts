import { user } from '@/class/user';
import { TUser } from '@/types/user';
const accessToken = user.getAccessToken();
export async function getUser(): Promise<{ user: TUser; status: number }> {
  const response = await fetch('https://api.finfellows.co.kr/auth', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.getAccessToken()}`,
    },
  });
  const { status } = response;
  const {
    data,
  }: {
    data: {
      email: string;
      id: number;
      name: string;
      role: 'USER' | 'ADMIN';
    };
  } = await response.json();

  return { user: { ...data, isAdmin: data.role === 'ADMIN' }, status };
}

export const postSignOut = async () => {
  const url = 'https://api.finfellows.co.kr/auth/sign-out';

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
      console.log('[✅postSignOut API Data]', data);
      return data.data;
    } else {
      console.error('[💥postSignOut API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postSignOut Error]', error);
    return undefined;
  }
};
