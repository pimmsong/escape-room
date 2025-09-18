import MailContainer from "@features/mail/components/MailContainer";
import { spamMails } from "@features/mail/data/spam";

export default function SpamPage() {
  return (
    <div className="relative h-screen">
      <div className="fixed inset-0 bg-grid -z-10" />
      <div className="grid place-items-center min-h-screen">
        <MailContainer variant="blue" mails={spamMails} />
      </div>
    </div>
  );
}
