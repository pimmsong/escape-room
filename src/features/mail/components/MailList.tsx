import { useScrollbar } from "../hooks/useScrollbar";
import MailListItem from "./MailListItem";
import Scrollbar from "./ScrollBar";

export default function MailList() {
  const { listRef, trackRef, thumbTop, thumbHeight, scrollBy, onMouseDown } =
    useScrollbar();

  return (
    <div className="relative flex flex-1">
      <ul
        ref={listRef}
        className="flex flex-col flex-1 overflow-y-auto scrollbar-hide"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <MailListItem key={i} />
        ))}
      </ul>

      <Scrollbar
        trackRef={trackRef}
        thumbTop={thumbTop}
        thumbHeight={thumbHeight}
        onThumbMouseDown={onMouseDown}
        onScrollUp={() => scrollBy(-100)}
        onScrollDown={() => scrollBy(100)}
      />
    </div>
  );
}
