import { useCallback } from 'react';

const useSessionStorage = (key) => {
   const getItem = useCallback(() => {
      try {
         const item = sessionStorage.getItem(key);

         if (!item) {
            return null;
         }

         return JSON.parse(item);
      } catch (error) {
         console.error(`Error reading sessionStorage key "${key}"`, error);
         return null;
      }
   }, [key]);

   const setItem = useCallback(
      (value) => {
         try {
            sessionStorage.setItem(key, JSON.stringify(value));
         } catch (error) {
            console.error(`Error writing sessionStorage key "${key}"`, error);
         }
      },
      [key],
   );

   const removeItem = useCallback(() => {
      try {
         sessionStorage.removeItem(key);
      } catch (error) {
         console.error(`Error removing sessionStorage key "${key}"`, error);
      }
   }, [key]);

   return {
      getItem,
      setItem,
      removeItem,
   };
};

export default useSessionStorage;
