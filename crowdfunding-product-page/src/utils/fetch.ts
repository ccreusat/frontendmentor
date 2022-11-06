export const useFetch = async (url: string) => {
  const requestOptions = {
    headers: {
      "X-Master-Key": `${import.meta.env.VITE_JSBIN_KEY}`,
    },
  };
  const response = await fetch(url, requestOptions);

  if (!response.ok) return;
  const data = await response.json();
  return data;
};
