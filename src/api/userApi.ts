import { user } from '@/class/user';
import { TUser } from '@/types/user';

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
