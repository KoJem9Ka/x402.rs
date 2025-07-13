import { type RefObject, useEffect, useRef, useState } from 'react';


interface MouseState {
  x: number | null;
  y: number | null;
  elementX: number | null;
  elementY: number | null;
  elementPositionX: number | null;
  elementPositionY: number | null;
}

type UseMouseArgs = {
  parentRef: RefObject<HTMLElement | null>,
  isEnabled?: boolean,
};

// @src https://www.eldoraui.site/docs/components/animatedcard
export function useMouse(
  { parentRef, isEnabled }: UseMouseArgs,
): MouseState {
  const [state, setState] = useState<MouseState>({
    x: null,
    y: null,
    elementX: null,
    elementY: null,
    elementPositionX: null,
    elementPositionY: null,
  });

  const frameIdRef = useRef<number | null>(null);
  const eventRef = useRef<MouseEvent | null>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const updateState = () => {
      const event = eventRef.current;
      if (!event) return;

      const newState: Partial<MouseState> = {
        x: event.pageX,
        y: event.pageY,
      };

      if (parentRef.current instanceof Element) {
        const { left, top } = parentRef.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        newState.elementX = event.pageX - elementPositionX;
        newState.elementY = event.pageY - elementPositionY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState(s => ({ ...s, ...newState }));
      frameIdRef.current = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      eventRef.current = event;
      if (frameIdRef.current === null) {
        frameIdRef.current = requestAnimationFrame(updateState);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isEnabled, parentRef]);

  return state;
}
