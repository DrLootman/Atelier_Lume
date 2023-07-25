import { useEffect } from "react";

export default function useGet(endpoint: string, setData): void {
  useEffect(() => {
    const controller = new AbortController();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`, { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .catch((err) => console.error(err));
    }, []);
    return () => controller.abort();
  }