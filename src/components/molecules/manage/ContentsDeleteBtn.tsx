import MainBtn from '@/components/atom/button/MainBtn';
import withApi from '@/utils/withApi';

export default function ContentsDeleteBtn({
  deleteFn,
  onPending,
}: {
  deleteFn: () => Promise<Response>;
  onPending?: () => void; // 로딩중일 때 실행할 함수
}) {
  function handleDelete() {
    if (confirm('정말 삭제하시겠습니까?')) {
      withApi(deleteFn, {
        onSuccess: () => {
          alert('삭제되었습니다');
        },
        onError: () => {
          alert('삭제에 실패하였습니다');
        },
        onPending,
      });
    }
  }

  return <MainBtn text='삭제' isOn onClick={handleDelete} />;
}
