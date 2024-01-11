import useMediaQuery from './useMediaQuery';

export default function useFinMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1135 });
  const isTablet = useMediaQuery({ minWidth: 500, maxWidth: 1134 });
  const isMobile = useMediaQuery({ maxWidth: 499 });

  return { isDesktop, isTablet, isMobile };
}
