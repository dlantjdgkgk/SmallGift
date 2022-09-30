import { useDummyJsonQuery } from "api/useInfiniteQuery";
import Card from "components/Card";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import React from "react";
import { uid } from "react-uid";
import changeInfiniteScrollDataToArray from "utils/changeInfiniteScrollDataToArray";

const Test = () => {
  const { data: todoPayload, isFetchingNextPage, fetchNextPage, hasNextPage } = useDummyJsonQuery();
  const todoList = changeInfiniteScrollDataToArray(todoPayload);

  const onIntersect = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage, isFetchingNextPage],
  );

  const { setTarget } = useIntersectionObserver({
    onIntersect,
    options: {
      rootMargin: "10%",
      threshold: 0.25,
    },
  });

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
        }}
      >
        {todoList.map((todo, index) => (
          <Card key={uid(index)} todo={todo} />
        ))}
      </div>
      {hasNextPage && <div ref={(elem) => setTarget(elem)}>로딩중...</div>}
    </div>
  );
};

export default Test;
