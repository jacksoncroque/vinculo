import { useCallback } from 'react';

const useLocalStorage = (key) => {
  const getItem = useCallback(() => {
    try {
      const item = localStorage.getItem(key);

      if (!item) {
        return null;
      }

      return JSON.parse(item);
    } catch (error) {
      console.error(`Error reading localStorage key "${key}"`, error);
      return null;
    }
  }, [key]);

  const setItem = useCallback(
    (value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error writing localStorage key "${key}"`, error);
      }
    },
    [key]
  );

  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}"`, error);
    }
  }, [key]);

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useLocalStorage;