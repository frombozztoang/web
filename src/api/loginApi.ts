export async function postKakaoLogin(code: string) {
  const response = await fetch(`http://api.finfellows.co.kr/auth/kakao/sign-in?code=${code}`);
  const { accessToken, role }: { accessToken: string; role: 'USER' | 'ADMIN' } = await response.json();
  const isAdmin = role === 'USER' ? false : true;
  const { status } = response;

  return { accessToken, isAdmin, status };
}
