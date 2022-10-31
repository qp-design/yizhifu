import { isFunction, noop } from 'lodash-es';
import { useRef, useCallback } from 'react';

// This hook wraps a potentially changeable function object and always returns the same
// function so it's safe to use it with other hooks: wrapper function stays the same,
// but will always call a latest wrapped function.
// A quick note regarding `react-hooks/exhaustive-deps`: since wrapper function doesn't
// change, it's safe to use it as a dependency, it will never trigger other hooks.
export function useImmutableCallback(callback: any) {
  const callbackRef = useRef() as any;
  callbackRef.current = isFunction(callback) ? callback : noop;
  return useCallback((...args: any) => callbackRef.current(...args), [callbackRef]);
}

export function useLazyRef(getInitialValue: Function, initialValues = void 0 as any) {
  const lazyRef = useRef(initialValues);

  if (lazyRef.current === initialValues) {
    lazyRef.current = getInitialValue();
  }

  return lazyRef;
}
