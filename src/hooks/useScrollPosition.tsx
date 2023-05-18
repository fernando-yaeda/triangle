import { MutableRefObject, useEffect, useRef, useState } from "react";

type ScrollPosition = {
  scrollY: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
};

export default function useScrollPosition(): ScrollPosition {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return {
    scrollY,
    containerRef,
  };
}
