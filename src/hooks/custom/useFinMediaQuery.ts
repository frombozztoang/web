import useMediaQuery from './useMediaQuery';

export default function useFinMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1680 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1679 });
  const isMobile = useMediaQuery({ maxWidth: 899 });

  return { isDesktop, isTablet, isMobile };
}
