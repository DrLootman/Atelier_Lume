import { useEffect, SetStateAction, Dispatch } from "react";

export default function useGet<T>(
  endpoint: string,
  setData: React.Dispatch<React.SetStateAction<T[]>>
): void {
  useEffect(() => {
    const controller = new AbortController();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
    return () => controller.abort();
  }, []);
}
