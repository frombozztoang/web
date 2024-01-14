import { getUser } from '@/api/userApi';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from 'react-query';

export default function useUser() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_USER],
    queryFn: getUser,
    select: ({ user }) => user,
    staleTime: 1000 * 60 * 1, // 1분 동안 유효한 데이터
    refetchInterval: 1000 * 60 * 30, // 30분마다 refetch
    refetchOnMount: 'always',
  });
  return { user, isLoading, isError };
}
