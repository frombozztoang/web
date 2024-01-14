import MainBtn from '@/components/atom/button/MainBtn';
import useUser from '@/hooks/useUser';

export default function ContentsDeleteBtn({ deleteFn }: { deleteFn: () => void }) {
  function handleDelete() {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteFn();
    }
  }

  return <MainBtn text='삭제' isOn onClick={handleDelete} />;
}
