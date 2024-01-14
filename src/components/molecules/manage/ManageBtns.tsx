import useUser from '@/hooks/useUser';

export default function ManageBtns({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  return user?.isAdmin ? <div className='flex justify-end items-center gap-10 w-full'>{children}</div> : null;
}
