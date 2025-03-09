import { useCallback, useEffect, EffectCallback, DependencyList } from "react";

export const useDebounce = (
  effect: EffectCallback,
  dependencies: DependencyList,
  delay: number
) => {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
