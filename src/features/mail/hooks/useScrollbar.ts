import { useEffect, useRef, useState } from "react";

export function useScrollbar() {
  const listRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartY = useRef(0);
  const dragStartTop = useRef(0);

  useEffect(() => {
    const el = listRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const trackHeight = track.clientHeight;

      const newHeight = (clientHeight / scrollHeight) * trackHeight;
      setThumbHeight(newHeight);

      const maxThumbTop = trackHeight - newHeight + 1;
      const newTop = (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;

      setThumbTop(newTop);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollBy = (amount: number) => {
    listRef.current?.scrollBy({ top: amount, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartTop.current = thumbTop;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !listRef.current || !trackRef.current) return;

    const el = listRef.current;
    const trackHeight = trackRef.current.clientHeight;
    const maxThumbTop = trackHeight - thumbHeight + 1;

    const deltaY = e.clientY - dragStartY.current;
    const newTop = Math.min(
      Math.max(0, dragStartTop.current + deltaY),
      maxThumbTop
    );

    setThumbTop(newTop);

    const scrollable = el.scrollHeight - el.clientHeight;
    el.scrollTop = (newTop / maxThumbTop) * scrollable;
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return {
    listRef,
    trackRef,
    thumbTop,
    thumbHeight,
    scrollBy,
    onMouseDown,
  };
}
