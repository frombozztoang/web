import useMediaQuery from './useMediaQuery';

export default function useFinMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const isTablet = useMediaQuery({ minWidth: 500, maxWidth: 999 });
  const isMobile = useMediaQuery({ maxWidth: 499 });

  return { isDesktop, isTablet, isMobile };
}
