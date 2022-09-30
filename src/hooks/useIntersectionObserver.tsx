import React from "react";

interface UseIntersectionObserverProps extends IntersectionObserverInit {
  onIntersect: IntersectionObserverCallback;
  options?: {
    root?: Document;
    rootMargin?: string;
    threshold?: number;
  };
}

const useIntersectionObserver = ({
  onIntersect,
  options = { root: null, rootMargin: "0px", threshold: 0 },
}: UseIntersectionObserverProps) => {
  const [target, setTarget] = React.useState<HTMLElement>(null);
  React.useEffect(() => {
    if (!target) return undefined;

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(target);
    return () => target && observer.disconnect();
  }, [target]);

  return { setTarget };
};

export { useIntersectionObserver };
