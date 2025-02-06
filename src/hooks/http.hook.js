import { useCallback } from 'react';

// Хук для запроса на сервер, в данном случае для запроса в файл seminars.json
export const useHttp = () => {
  const request = useCallback(
    async (url, method = 'GET', body = null, headers = { 'Content-type': 'application/json' }) => {
      try {
        const response = await fetch(url, { method, headers, body });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    [],
  );

  return { request };
};
