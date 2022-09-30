import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const infiniteServiceWorker = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export function useDummyJsonQuery() {
  return useInfiniteQuery(
    ["todos"],
    async ({ pageParam = 1 }) => {
      const { data } = await infiniteServiceWorker.get(`/todos?_start=${pageParam}&_limit=10`);

      if (data.length < 10) return { result: data, nextPage: undefined };

      return {
        result: data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage ?? undefined,
    },
  );
}
