import { useEffect } from 'react';

export const useOnKeyDown = (key, listener) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === key) {
        listener();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, listener]);
};
