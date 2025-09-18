import ArrowIcon from "@assets/icons/icon_arrow_triangle.svg?react";

interface ScrollbarProps {
  trackRef: React.RefObject<HTMLDivElement | null>;
  thumbTop: number;
  thumbHeight: number;
  onThumbMouseDown: (e: React.MouseEvent) => void;
  onScrollUp: () => void;
  onScrollDown: () => void;
}

export default function Scrollbar({
  trackRef,
  thumbTop,
  thumbHeight,
  onThumbMouseDown,
  onScrollUp,
  onScrollDown,
}: ScrollbarProps) {
  return (
    <div className="w-[46px] h-full border-l-2 bg-white flex flex-col">
      <button
        className="flex items-center justify-center h-10 border-b-2 border-black"
        onClick={onScrollUp}
        aria-label="Scroll Up"
      >
        <ArrowIcon />
      </button>

      <div ref={trackRef} className="flex-1 relative overflow-hidden">
        <div
          className="absolute top-0 w-full cursor-pointer"
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
          }}
          onMouseDown={onThumbMouseDown}
        >
          <div className="w-full h-full bg-primary border-t-2 border-b-2"></div>
        </div>
      </div>

      <button
        className="flex items-center justify-center h-10 border-t-2 border-black"
        onClick={onScrollDown}
        aria-label="Scroll Down"
      >
        <ArrowIcon className="rotate-180" />
      </button>
    </div>
  );
}
