import { useEffect } from 'react';

export const useOnClickOutside = (elementRef, listener) => {
  useEffect(() => {
    const handleClick = event => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        listener();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [elementRef, listener]);
};
