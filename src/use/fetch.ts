import { ref, Ref } from "vue";

type FetchRequest = () => Promise<void>;

interface UsableFetch {
  request: FetchRequest;
  response: Ref<T | undefined>;
}

export function useFetch<T>(url: RequestInfo, options?: RequestInit) {
  const response = ref<T>();

  const request = async () => {
    const res = await fetch(url, options);
    response.value = await res.json();
  };

  return { response, request };
}
