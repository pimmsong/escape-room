import { useScrollbar } from "@features/mail/hooks/useScrollbar";
import MailListItem from "@features/mail/components/MailListItem";
import Scrollbar from "@features/mail/components/ScrollBar";
import type { Variant } from "@features/mail/constants/variant";
import type { Mail } from "@features/mail//type";

interface MailListProps {
  variant: Variant;
  mails: Mail[];
}

export default function MailList({ variant, mails }: MailListProps) {
  const { listRef, trackRef, thumbTop, thumbHeight, scrollBy, onMouseDown } =
    useScrollbar();

  return (
    <div className="relative flex flex-1">
      <ul
        ref={listRef}
        className="flex flex-col flex-1 overflow-y-auto scrollbar-hide"
      >
        {mails.map((mail, i) => (
          <MailListItem key={i} variant={variant} mail={mail} />
        ))}
      </ul>

      <Scrollbar
        trackRef={trackRef}
        thumbTop={thumbTop}
        thumbHeight={thumbHeight}
        onThumbMouseDown={onMouseDown}
        onScrollUp={() => scrollBy(-100)}
        onScrollDown={() => scrollBy(100)}
        variant={variant}
      />
    </div>
  );
}
