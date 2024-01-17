import { getEduDetailApi } from '@/api/eduApi';
import { getUser } from '@/api/userApi';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from 'react-query';

export default function useEduDetail(id: number) {
  const {
    data: eduData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_EDU_DETAIL],
    queryFn: () => getEduDetailApi(id),
    refetchOnMount: 'always',
    enabled: !!id,
  });
  return { eduData, isLoading, isError };
}
