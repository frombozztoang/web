import useMediaQuery from './useMediaQuery';

export default function useFinMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 900 });
  const isTablet = useMediaQuery({ minWidth: 391, maxWidth: 900 });
  const isMobile = useMediaQuery({ maxWidth: 390 });

  return { isDesktop, isTablet, isMobile };
}
