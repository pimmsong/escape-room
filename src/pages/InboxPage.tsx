import MailContainer from "@features/mail/components/MailContainer";
import { inboxMails } from "@features/mail/data/inbox";

export default function InboxPage() {
  return (
    <div className="relative h-screen">
      <div className="fixed inset-0 bg-grid -z-10" />
      <div className="grid place-items-center min-h-screen">
        <MailContainer mails={inboxMails} />
      </div>
    </div>
  );
}
