import { useEffect, useRef, useState } from 'react';

const MOBILE_BREAKPOINT = 640;

export const useUserDevice = () => {
  const isMounted = useRef(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  const handleWindowResize = () =>
    isMounted.current && setWindowWidth(window.innerWidth);

  useEffect(() => {
    isMounted.current = true;
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      isMounted.current = false;
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    isMobile: windowWidth !== undefined ? windowWidth <= MOBILE_BREAKPOINT : false,
    width: windowWidth,
  };
};
